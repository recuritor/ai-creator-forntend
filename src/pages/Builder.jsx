import { useState } from "react";
import Navbar from "../components/Navbar";
import GlowButton from "../components/GlowButton";
import PageContainer from "../components/PageContainer";
import NeuralBackground from "../components/NeuralBackground";
import Loader from "../components/Loader";
import { generateWebsite } from "../utils/api";

export default function Builder() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const data = await generateWebsite(prompt);

      const fullCode = `
      <html>
        <head>
          <style>${data?.css || ""}</style>
        </head>
        <body>
          ${data?.html || ""}
          <script>${data?.js || ""}</script>
        </body>
      </html>`;

      setResult(fullCode);

        } catch (err) {
          console.error("Error:", err);
        }

        setLoading(false);
            };


  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-white overflow-hidden">
      <NeuralBackground />
      <Navbar />

      {/* ✅ EVERYTHING BELOW NAVBAR */}
      <PageContainer className="overflow-hidden">


    <div className="w-full mb-8 px-6 sm:px-8">
      <h1 className="text-left text-3xl md:text-4xl font-bold tracking-tight drop-shadow-[0_0_30px_rgba(79,172,254,0.3)]">
        Greywave AI Builder
      </h1>
      <p className="text-left text-gray-400 mt-2">
        Speak to Greywave. Watch intelligenturninto interface.
      </p>
    </div>


        {/* MAIN */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">

          {/* PROMPT PANEL */}
          <div className="bg-[#0F1623]/80 backdrop-blur-md border border-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">
              Website Prompt
            </h2>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A futuristic SaaS landing page for an AI startup named Greywave..."
              className="w-full h-52 bg-[#111827] text-white rounded-xl p-5 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 resize-none outline-none"
            />

            <div className="mt-5">
              <GlowButton onClick={generate} disabled={loading}>
                {loading ? "Greywave Processing..." : "Generate Website"}
              </GlowButton>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              AI will analyze structure, content, and layout.
            </p>
          </div>

          {/* PREVIEW PANEL */}
          <div className="relative bg-black/80 backdrop-blur-md border border-blue-500/30 rounded-2xl overflow-hidden">
            
            {/* PREVIEW HEADER */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-[#0F1623] border-b border-blue-500/20 flex items-center px-4 text-sm text-gray-300">
              Live Preview
            </div>

            <div className="pt-12 h-full flex items-center justify-center text-gray-400">
              {loading ? (
                <Loader text="Neural generation in progress..." />
              ) : (
              <iframe srcDoc={result} sandbox="allow-scripts"/>
)}
            </div>
          </div>

        </div>
      </PageContainer>
    </div>
  )
}