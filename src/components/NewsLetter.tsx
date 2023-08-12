const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="contenido-newsletter contenedor">
        <div className="texto-newsletter">
          <h2>Recibe Actualizaciones</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            error libero veritatis nemo commodi inventore blanditiis delectus
            sint accusantium molestias, ut voluptate incidunt dolore alias
            ducimus! Laboriosam doloremque maxime nostrum?
          </p>
          <form className="formulario">
            <div className="input">
              <input type="text" placeholder="Tu Email" />
            </div>
            <input type="submit" value="Inscribirme" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
