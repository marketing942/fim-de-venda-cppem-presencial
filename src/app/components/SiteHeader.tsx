import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a href="#topo" className="brand" aria-label="CPPEM Presencial — início">
          <Image src="/brand/logo-cppem.png" alt="CPPEM" width={700} height={239} priority />
          <span className="brand-divider" aria-hidden />
          <span className="brand-label">Turmas Presenciais</span>
        </a>
      </div>
    </header>
  );
}
