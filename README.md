
# TaxSim 2425 – Advanced Tax Calculator & AI Assistant

TaxSim 2425 is a modern web application for tax calculation, simulation, and guidance. Built with Next.js 14, TypeScript, and NextUI, it features advanced tax calculators, GST computation, tax rules, and AI-powered suggestions using Google Gemini.

## Features

- Advanced tax calculator for individuals, businessmen, and industrialists
- GST calculation and capital gains support
- Tax rules and simulation with visual charts
- AI-powered tax suggestions and Q&A (Gemini integration)
- Responsive UI with NextUI and Tailwind CSS
- Modular, scalable codebase

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [TypeScript](https://www.typescriptlang.org/)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Google Gemini API](https://ai.google.dev/gemini-api/docs)

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd TaxSim-2425-main
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run the development server

```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 5. (Optional) Setup pnpm

If you use `pnpm`, add this to your `.npmrc`:

```bash
public-hoist-pattern[]=*@nextui-org/*
```
Then run:
```bash
pnpm install
```

## How to Use Gemini AI in This Project

1. Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey) or Google Cloud.
2. Add the key to `.env.local` as shown above.
3. Use the `/api/ai-tax-suggestions` endpoint to interact with Gemini for tax Q&A and suggestions.
4. See the `AI-Suggestions` section in the app for examples.

## How to Make This a Major College Project

- Integrate Gemini AI for smart tax Q&A and personalized suggestions
- Add user authentication and save user sessions/calculations
- Provide downloadable reports (PDF/CSV)
- Enhance data visualization with charts
- Write clear documentation and prepare a demo video

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
