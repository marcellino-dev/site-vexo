import React from "react"
import type { Metadata } from "next"
import {
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vexo.com.br"),

  title: {
    default: "VEXO",
    template: "%s | VEXO",
  },


  applicationName: "VEXO",
  generator: "v0.app",

  keywords: [
    "VEXO",
    "plataforma de IA",
    "Joinville",
    "Santa Catarina",
    "desenvolvimento de software",
    "deploy",
    "infraestrutura",
    "startup joinvillense",
  ],

  authors: [
    {
      name: "VEXO",
      url: "https://vexo.com.br",
    },
  ],

  creator: "VEXO",
  publisher: "VEXO",

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vexo.com.br",
    siteName: "VEXO",
    title: "VEXO — Plataforma de IA para construir e escalar",
    description:
      "A plataforma de IA feita em Joinville para times que entregam. Construa, publique e escale com velocidade e segurança.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "VEXO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VEXO — Plataforma de IA para construir e escalar",
    description:
      "A plataforma de IA feita em Joinville para times que entregam. Construa, publique e escale com velocidade e segurança.",
    creator: "@vexo",
    images: ["/android-chrome-512x512.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}