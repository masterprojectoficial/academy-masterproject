import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        // Identidade Academy Master Project — paleta "blueprint de processo"
        paper: "#FBFAF7", // fundo, branco quente
        ink: "#12151C", // texto principal
        line: "#E3DFD3", // hairlines / divisores estruturais
        brand: {
          // azul-índigo — cor de "processo" / tecnologia
          50: "#EEF1FC",
          100: "#DCE2F8",
          200: "#B4C0EE",
          400: "#4A5FD1",
          500: "#2E3FB8",
          600: "#232F8C",
          900: "#131A4A",
        },
        accent: {
          // âmbar — usado com moderação, para o elemento de assinatura
          50: "#FDF3E3",
          300: "#F0C374",
          500: "#E1A13B",
          600: "#B87E22",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: "70ch",
            "--tw-prose-body": "#12151C",
            "--tw-prose-headings": "#12151C",
            "--tw-prose-links": "#2E3FB8",
            "--tw-prose-bold": "#12151C",
            a: { fontWeight: "500", textDecoration: "none", borderBottom: "1px solid #B4C0EE" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
