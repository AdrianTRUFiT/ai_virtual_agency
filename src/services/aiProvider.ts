import { GoogleGenAI } from "@google/genai";

export type AIProvider = "google" | "openai" | "anthropic" | "ollama" | "mock";
export type AIRequest = { task: string; input: any; context?: any };
export type AIResponse = { text: string; meta?: any };

/**
 * Single entry point for all AI calls in the application.
 * This isolates provider-specific logic and allows for easy switching.
 */
export async function runAI(req: AIRequest): Promise<AIResponse> {
  const provider = (import.meta.env.VITE_AI_PROVIDER || "mock") as AIProvider;
  
  try {
    if (provider === "google") {
      const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
      if (!apiKey) {
        console.warn("VITE_GOOGLE_API_KEY is missing, falling back to mock.");
        return runMockAI(req);
      }
      
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ parts: [{ text: `${req.task}\n\nInput: ${JSON.stringify(req.input)}\n\nContext: ${JSON.stringify(req.context || {})}` }] }],
      });
      
      return { 
        text: response.text || "",
        meta: { provider: "google" }
      };
    }
    
    // Fallback to mock for other providers not yet implemented or if mock is selected
    return runMockAI(req);
  } catch (error) {
    console.error(`AI Provider ${provider} failed:`, error);
    return runMockAI(req);
  }
}

/**
 * Deterministic mock implementation to ensure the app runs without API keys.
 */
async function runMockAI(req: AIRequest): Promise<AIResponse> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const task = req.task.toLowerCase();
  
  if (task.includes("decision") || task.includes("diagnostic")) {
    const score = 65;
    return {
      text: JSON.stringify({
        classification: 'Yellow',
        score: score,
        frictionAreas: [
          'Founder dependency on trivial approvals',
          'Lack of documented decision boundaries'
        ],
        insight: {
          categoryPercentage: '65% Operational, 25% Strategic, 10% Trivial',
          repeatedTypes: ['Expense Approvals', 'Content Review'],
          frictionPatterns: 'Moderate friction in daily operations. Some delegation is working but lacks structure.'
        },
        installableRule: 'Expenses under $250 are auto-approved if within monthly budget.',
        timeReclaimed: '3-5 hours/week'
      }),
      meta: { provider: "mock" }
    };
  }

  if (task.includes("revenue") || task.includes("leak")) {
    return {
      text: JSON.stringify({
        constraint: 'Decision Bottleneck',
        impact: {
          hoursLost: '8-12 hours/week',
          revenueImpact: '$4,500 - $12,000 / month'
        },
        structuralMove: 'Implement an Asynchronous Decision Log to replace 3 weekly sync meetings.'
      }),
      meta: { provider: "mock" }
    };
  }

  return { 
    text: "This is a deterministic mock response from the AI adapter.",
    meta: { provider: "mock" }
  };
}
