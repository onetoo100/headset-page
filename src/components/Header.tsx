const Header = () => {
  return (
    <header className="header">
      <div className="contenedor contenido-header">
        <div className="imagen-header">
          <picture>
            <img
              loading="lazy"
              decoding="async"
              src="src/assets/header.png"
              width="1000"
              height="600"
            />
          </picture>
        </div>

        <div className="texto-header">
          <p className="tagline-producto">Professional Sound</p>
          <h1 className="nombre-producto degradado-verde">TechPro</h1>
          <p className="descripcion-producto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            autem ipsam perferendis nulla incidunt dolores, iusto quidem maxime
            perspiciatis voluptatum ratione, aliquam nemo odit officia aperiam
            quo labore aliquid magni!
          </p>
          <p className="precio-producto">
            Desde <span>$299</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
