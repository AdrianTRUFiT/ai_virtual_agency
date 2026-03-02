# AI Virtual Agency

A modern platform for identifying and fixing operational bottlenecks using AI-driven diagnostics and installable systems.

## Local Development

To run this project locally, follow these steps:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Configure Environment Variables**:
    - Copy `.env.example` to `.env`.
    - Set `VITE_AI_PROVIDER` to your preferred provider (default is `mock`).
    - If using `google`, provide your `VITE_GOOGLE_API_KEY`.

3.  **Start Development Server**:
    ```bash
    npm run dev
    ```

4.  **Build for Production**:
    ```bash
    npm run build
    ```

## AI Provider Architecture

This project uses a centralized AI adapter located at `src/services/aiProvider.ts`. All AI interactions flow through the `runAI()` function.

### Key Features:
- **Provider Switching**: Easily switch between Google Gemini, OpenAI, Anthropic, or Ollama by changing the `VITE_AI_PROVIDER` environment variable.
- **Deterministic Mock**: A built-in `mock` provider ensures the app remains fully functional even without API keys.
- **Low-Risk Removal**: Google/Gemini dependencies are isolated within the adapter. To remove them, you only need to modify `src/services/aiProvider.ts` and update `package.json`.

> **Note**: Google removal after download is safe because all Google-specific code is contained within the `aiProvider.ts` adapter.

## Tech Stack
- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
