import "twin.macro";
import { useEffect, useLayoutEffect, useState } from "react";
import Head from "next/head";

import AnalysisButton from "../components/AnalysisButton";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

import { generate, ModeType, modeTypes } from "./../helpers/generateText";

const useIsomorphicEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function Home() {
  const [analysis, setAnalysis] = useState<string>(null);

  const generateRandomAnalysis = () => setAnalysis(generate());
  const generateSpecificAnalysis = (mode: ModeType) =>
    setAnalysis(generate(mode));

  const copyCurrentToClipboard = () => navigator.clipboard.writeText(analysis);

  useIsomorphicEffect(() => {
    setAnalysis(generate());
  }, []);

  return (
    <div tw="flex flex-col min-h-screen">
      <Head>
        <title>Você foi metaforado</title>
      </Head>

      <header>
        <h1 tw="text-blue-700 text-center pt-14 pb-40 text-sm md:(text-xl pt-16 pb-36) font-bold uppercase tracking-widest bg-blue-50">
          Você foi
          <br />
          <div tw="text-4xl md:(text-6xl) font-normal">metaforado</div>
        </h1>

        <div>
          <svg
            preserveAspectRatio="none"
            fill="currentColor"
            viewBox="0 0 32 1"
            xmlns="http://www.w3.org/2000/svg"
            tw="text-blue-50"
          >
            <path d="M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z"></path>
          </svg>
        </div>
      </header>

      <main tw="flex-1 container mx-auto text-center py-10 px-2 -mt-40">
        <Card>
          <p>{analysis}</p>
        </Card>

        <div tw="space-y-4 pt-6 pb-8 md:(space-x-4)">
          <Button onClick={generateRandomAnalysis}>
            <svg
              tw="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Gerar aleatório
          </Button>

          <Button onClick={copyCurrentToClipboard}>
            <svg
              tw="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Copiar
          </Button>
        </div>

        <hr tw="opacity-50 max-w-xl mx-auto pb-5 md:(pb-0)" />

        <div tw="pt-4 space-y-4 md:(space-x-4)">
          {modeTypes.map(([mode, label]) => (
            <AnalysisButton
              key={mode}
              onClick={() => generateSpecificAnalysis(mode)}
            >
              {label}
            </AnalysisButton>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
