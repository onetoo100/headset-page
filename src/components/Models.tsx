const Models = () => {
  return (
    <main className="contenedor modelos">
      <h2 className="text-center degradado-verde header-modelos">
        Elige tus Headset
      </h2>

      <div className="listado-modelos">
        <div className="modelo modelo-x">
          <h3>Headset X</h3>
          <p className="precio">$3000</p>
        </div>

        <div className="modelo modelo-y">
          <h3>Headset Y</h3>
          <p className="precio">$2000</p>
        </div>

        <div className="modelo modelo-z">
          <h3>Headset Z</h3>
          <p className="precio">$1000</p>
        </div>
      </div>
    </main>
  );
};

export default Models;
