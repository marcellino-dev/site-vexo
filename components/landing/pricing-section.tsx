"use client";

import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Projeto sob medida",
    description: "Para empresas com um escopo definido",
    features: [
      "Desenvolvimento web ou mobile",
      "Escopo e prazo definidos",
      "Design de interface (UI/UX)",
      "Deploy em nuvem",
      "Documentação técnica",
      "Suporte pós-entrega",
    ],
    cta: "Solicitar orçamento",
    popular: false,
  },
  {
    name: "Squad dedicada",
    description: "Um time de engenharia focado no seu produto",
    features: [
      "Desenvolvedores dedicados",
      "Gestão ágil do projeto",
      "Entregas contínuas (CI/CD)",
      "APIs e integrações",
      "Automação de processos",
      "Reuniões de acompanhamento",
      "Evolução contínua do produto",
    ],
    cta: "Falar com especialista",
    popular: true,
  },
  {
    name: "Consultoria & IA",
    description: "Para desafios técnicos específicos",
    features: [
      "Consultoria em arquitetura",
      "Soluções de inteligência artificial",
      "Automação e integrações",
      "Auditoria de código",
      "Otimização de performance",
      "Migração para nuvem",
      "Mentoria técnica",
    ],
    cta: "Agendar conversa",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Modelos de contratação
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Trabalhamos do
            <br />
            <span className="text-stroke">seu jeito.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Cada projeto é único. Escolha o modelo que melhor se encaixa e montamos uma proposta sob medida para você.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Mais procurado
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                <span className="font-display text-4xl text-foreground">Sob consulta</span>
                <p className="text-sm text-muted-foreground mt-2">Proposta personalizada</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Não sabe qual modelo escolher?{" "}
          <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Fale com um especialista da VEXO
          </a>
        </p>
      </div>
    </section>
  );
}
