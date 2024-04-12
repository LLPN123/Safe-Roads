"use client";

export default function Home() {
  const a = { foto: "default.png" };
  return (
    <div className="prim">
      <header>
        <a className="logo">
          <img src={a.foto} />
        </a>
      </header>
      <nav>
        <ul>
          <a href="" className="um">
            <li className="red">Home</li>
          </a>
          <a href="/pag2" className="um">
            <li className="yellow">Campanha</li>
          </a>
          <a href="/pag3" className="um">
            <li className="green">Sobre</li>
          </a>
        </ul>
      </nav>
      <section>
        <article>
          <p>
            Bem-vindo à SafeRoads! A cada ano, são 1,3 milhão de mortes e 50
            milhões de feridos em acidentes de trânsito pelo mundo. Pensando
            neste dado assustador, promovemos uma campanha de conscientização
            para que as pessoas tenham mais responsabilidade nas vias e que esse
            número possa diminuir cada vez mais.
          </p>
        </article>
      </section>
      <div className="but">
        <a href="/pag4">
          <button>Saiba Mais</button>
        </a>
      </div>
      <footer>
        <p>Logo</p>
      </footer>
    </div>
  );
}
