import type { Metadata } from "next";
import { Inter, Oxanium, Rajdhani } from "next/font/google";
import { EmberField } from "./components/ember-field";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const oxanium = Oxanium({ variable: "--font-display", subsets: ["latin"] });
const rajdhani = Rajdhani({ variable: "--font-ui", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Próximos Passos | CPPEM Concursos Presencial",
  description:
    "Parabéns pela sua matrícula! Siga os próximos passos para concluir sua entrada na turma presencial do CPPEM Concursos.",
  openGraph: {
    title: "Próximos Passos | CPPEM Concursos Presencial",
    description: "Siga os próximos passos para concluir sua entrada na turma presencial.",
    siteName: "CPPEM Concursos",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oxanium.variable} ${rajdhani.variable}`}>
      <body>
        <div className="page-shell" id="topo">
          <EmberField />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
