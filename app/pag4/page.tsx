"use client";

export default function Home() {
  const a = {
    foto: "default.png",
    campanha: "campanha.jpeg.jpeg",
    api: "api.jpeg",
  };
  return (
    <div className="prim">
      <header>
        <a className="logo">
          <img src={a.foto} />
        </a>
      </header>
      <nav>
        <ul>
          <a href="../" className="um">
            <li className="red">Home</li>
          </a>
          <a href="../pag2" className="um">
            <li className="yellow">Campanha</li>
          </a>
          <a href="../pag3" className="um">
            <li className="green">Sobre</li>
          </a>
        </ul>
      </nav>
      <section className="sec2">
        <article className="art2">
          <img src={a.api} className="camp" />
        </article>
      </section>
      <div className="but">
        <a href="">
          <button>Saiba Mais</button>
        </a>
      </div>
      <footer>
        <p>Logo</p>
      </footer>
    </div>
  );
}
