import { useState } from "react";
import Navbar from "../components/Navbar";
import NeuralBackground from "../components/NeuralBackground";
import PricingCard from "../components/PricingCard";
import PageContainer from "../components/PageContainer";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-white overflow-hidden">
      <NeuralBackground />
      <Navbar />

      {/* ✅ EVERYTHING BELOW NAVBAR */}
      <PageContainer>

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Intelligent pricing for intelligent creation
          </h1>
          <p className="mt-2 text-gray-400 text-sm">
            Only pay more when Greywave generates more.
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          <PricingCard
            title="Starter"
            price="Free"
            description="Explore Greywave"
            features={[
              "1 Website",
              "Basic AI layouts",
              "Limited generations",
            ]}
            compact
            highlighted={selectedPlan === "Starter"}
            onSelect={() => setSelectedPlan("Starter")}
          />

          <PricingCard
            title="Pro"
            price="$29"
            description="Build real products"
            features={[
              "10 Websites",
              "Advanced AI layouts",
              "Custom themes",
              "Priority support",
            ]}
            compact
            highlighted={selectedPlan === "Pro"}
            onSelect={() => setSelectedPlan("Pro")}
          />

          <PricingCard
            title="Studio"
            price="$99"
            description="For teams & agencies"
            features={[
              "Unlimited websites",
              "Full AI control",
              "White‑label export",
            ]}
            compact
            highlighted={selectedPlan === "Studio"}
            onSelect={() => setSelectedPlan("Studio")}
          />
        </div>

      </PageContainer>
    </div>
  );
}