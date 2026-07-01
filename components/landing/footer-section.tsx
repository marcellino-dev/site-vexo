"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import { LogoMark } from "./logo";

const footerLinks = {
  Produto: [
    { name: "Recursos", href: "#features" },
    { name: "Como funciona", href: "#how-it-works" },
    { name: "Preços", href: "#pricing" },
    { name: "Integrações", href: "#integrations" },
  ],
  Desenvolvedores: [
    { name: "Documentação", href: "#developers" },
    { name: "Referência da API", href: "#" },
    { name: "SDK", href: "#developers" },
    { name: "Status", href: "#" },
  ],
  Empresa: [
    { name: "Sobre", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carreiras", href: "#", badge: "Contratando" },
    { name: "Contato", href: "#" },
  ],
  Legal: [
    { name: "Privacidade", href: "#" },
    { name: "Termos", href: "#" },
    { name: "Segurança", href: "#security" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2.5 mb-6" aria-label="VEXO">
                <LogoMark className="w-6 h-6" />
                <span className="text-2xl font-display tracking-[0.2em]">VEXO</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-6 max-w-xs">
                A plataforma de IA para times que entregam. Construa, publique e escale com velocidade e segurança.
              </p>

              <p className="text-sm text-muted-foreground/80 mb-8 max-w-xs">
                Orgulhosamente construída em Joinville, Santa Catarina.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 VEXO. Feito em Joinville, SC. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Todos os sistemas operacionais
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
