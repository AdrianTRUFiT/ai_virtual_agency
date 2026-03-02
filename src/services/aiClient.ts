/**
 * AI Client Service (Mock Implementation)
 * As per requirements, this returns deterministic responses.
 */

import { runAI } from './aiProvider';

export interface DecisionInsight {
  classification: 'Green' | 'Yellow' | 'Red';
  score: number;
  frictionAreas: string[];
  insight: {
    categoryPercentage: string;
    repeatedTypes: string[];
    frictionPatterns: string;
  };
  installableRule: string;
  timeReclaimed: string;
}

export interface RevenueLeakInsight {
  constraint: 'Decision Bottleneck' | 'Meeting Debt' | 'Role Ambiguity' | 'Process Fragility';
  impact: {
    hoursLost: string;
    revenueImpact: string;
  };
  structuralMove: string;
}

export const aiClient = {
  /**
   * Processes Decision Diagnostic data
   */
  async getDecisionInsight(answers: Record<number, number>): Promise<DecisionInsight> {
    const response = await runAI({
      task: "Analyze the following decision diagnostic answers and return a JSON object matching the DecisionInsight interface.",
      input: answers,
      context: {
        interface: "DecisionInsight",
        schema: "{ classification: 'Green' | 'Yellow' | 'Red', score: number, frictionAreas: string[], insight: { categoryPercentage: string, repeatedTypes: string[], frictionPatterns: string }, installableRule: string, timeReclaimed: string }"
      }
    });

    try {
      return JSON.parse(response.text);
    } catch (e) {
      console.error("Failed to parse AI response, returning fallback data", e);
      // Fallback to a safe default if parsing fails
      return {
        classification: 'Yellow',
        score: 50,
        frictionAreas: ['Data parsing error'],
        insight: {
          categoryPercentage: 'N/A',
          repeatedTypes: [],
          frictionPatterns: 'Error processing AI response.'
        },
        installableRule: 'N/A',
        timeReclaimed: '0 hours'
      };
    }
  },

  /**
   * Processes Revenue Leak data
   */
  async getRevenueLeakInsight(input: any): Promise<RevenueLeakInsight> {
    const response = await runAI({
      task: "Analyze the following revenue leak assessment data and return a JSON object matching the RevenueLeakInsight interface.",
      input: input,
      context: {
        interface: "RevenueLeakInsight",
        schema: "{ constraint: string, impact: { hoursLost: string, revenueImpact: string }, structuralMove: string }"
      }
    });

    try {
      return JSON.parse(response.text);
    } catch (e) {
      console.error("Failed to parse AI response, returning fallback data", e);
      return {
        constraint: 'Decision Bottleneck',
        impact: {
          hoursLost: 'N/A',
          revenueImpact: 'N/A'
        },
        structuralMove: 'Error processing AI response.'
      };
    }
  }
};
