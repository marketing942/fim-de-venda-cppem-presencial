import Image from "next/image";
import { ArrowUp, ArrowUpRight, LifeBuoy, MapPin } from "lucide-react";
import { SOCIAL_LINKS, SocialIcon } from "./social-icons";
import { HELP_CENTER_URL, MAIN_SITE_URL } from "@/lib/contact";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-crest" aria-hidden>
        <span className="footer-crest-line" />
        <span className="footer-crest-badge">
          <Image src="/brand/emblema-leao.webp" alt="" width={400} height={465} />
        </span>
        <span className="footer-crest-line" />
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/brand/logo-cppem.png" alt="CPPEM" width={700} height={239} className="footer-logo" />
          <p>
            Seu sonho, nosso objetivo. Siga o CPPEM nas redes e acompanhe a sua jornada rumo à <strong>aprovação</strong>.
          </p>
          <div className="footer-social">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.key} href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label} do CPPEM`}>
                <SocialIcon name={social.key} />
              </a>
            ))}
          </div>
          <a className="footer-site-link" href={MAIN_SITE_URL} target="_blank" rel="noreferrer">
            Ir para o cppem.com.br <ArrowUpRight size={14} aria-hidden />
          </a>
        </div>

        <div className="footer-help">
          <span className="channel-icon">
            <LifeBuoy size={24} aria-hidden />
          </span>
          <h2>Central de Ajuda</h2>
          <p>Plataforma, turmas, mentoria, materiais e pagamentos: as orientações oficiais do CPPEM em um só lugar.</p>
          <a className="gold-button" href={HELP_CENTER_URL} target="_blank" rel="noreferrer">
            Acessar a Central de Ajuda <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>
      </div>

      <div className="footer-wordmark" aria-hidden>
        CPPEM
      </div>

      <div className="container footer-bottom">
        <span>© {year} CPPEM Concursos Públicos. Todos os direitos reservados.</span>
        <span className="footer-location">
          <MapPin size={14} aria-hidden /> Caruaru — Pernambuco
        </span>
        <a href="#topo" className="footer-top">
          Voltar ao topo <ArrowUp size={14} aria-hidden />
        </a>
      </div>
    </footer>
  );
}
