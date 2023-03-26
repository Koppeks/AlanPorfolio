import imgexperience from "../assets/sintiendome.png";

export default function Experience() {
  return (
    <div className="experience">
      <section className="experience_content">
        <h2>Experiencia laboral</h2>
        <h3>CONTENIDO DE MARCA - Enero 2022/Actualidad</h3>
        <div className="experience_content_source">
          <img src={imgexperience} alt="" srcset="" />
          <h4>Sintiendo.me</h4>
        </div>
        <p>
          Desarrollé varios puestos ya que estoy desde el inicio de la empresa.
          Creando la identidad de la misma dentro de TikTok (@www.sintiendo.me)
          alcanzando 100k de seguidores, dando las ideas, dirigiendo el
          contenido hacia donde convenía estadísticamente y a veces apareciendo
          en el mismo. Desarrollo de videos cortos publicitarios para ser
          publicados en Facebook e Instagram logrando superar el 50 porciento de
          vista del mismo. Videos para YouTube según el cliente lo iba pidiendo
          (canal: Sintiendo.me)
        </p>
      </section>
    </div>
  );
}
