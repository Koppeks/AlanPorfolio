import imgacademy from "../assets/platzi.svg";

export default function Academy() {
  return (
    <div className="academy">
      <section className="academy_content">
        <h2>Historial academico</h2>
        <div className="academy_content_source">
          <img src={imgacademy} alt="Platzi logo" />
          <h4>Platzi</h4>
        </div>
        <section className="academy_acomplish">
          <div>
            <h3>Diploma curso de Adobe Premiere</h3>
            <p>
              Curso sobre el uso de la plataforma de edición de videos otorgado
              por Adobe
            </p>
          </div>
          <div>
            <h3>Diploma curso para marcas (TikTok)</h3>
            <p>
              Curso sobre el uso de la plataforma de videos mas prolifera de la
              actulidad, TikTok.
            </p>
          </div>
          <div>
            <h3>Diploma curso introducción al lenguaje audiovisual</h3>
            <p>
              Curso sobre el lenguaje audiovisual, qué lo compone y como usarlo.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
