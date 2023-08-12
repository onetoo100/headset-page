import logo1 from "../assets/icono-sonido.svg";
import logo2 from "../assets/icono-garantia.svg";
import logo3 from "../assets/icono-bateria.svg";

const Container = () => {
  return (
    <section className="contenedor">
      <div className="iconos">
        <div className="icono">
          <img src={logo1} alt="imagen icono" />
          <h3>Big Sound</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            possimus, facilis, magni officia deserunt eius pariatur eligendi,
            mollitia nemo soluta inventore repellendus laboriosam perferendis
            est fuga itaque necessitatibus. Doloribus, itaque.
          </p>
        </div>

        <div className="icono">
          <img src={logo2} alt="imagen icono" />
          <h3>lifetime warranty</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            possimus, facilis, magni officia deserunt eius pariatur eligendi,
            mollitia nemo soluta inventore repellendus laboriosam perferendis
            est fuga itaque necessitatibus. Doloribus, itaque.
          </p>
        </div>

        <div className="icono">
          <img src={logo3} alt="imagen icono" />
          <h3>+20 hours of battery</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            possimus, facilis, magni officia deserunt eius pariatur eligendi,
            mollitia nemo soluta inventore repellendus laboriosam perferendis
            est fuga itaque necessitatibus. Doloribus, itaque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Container;
