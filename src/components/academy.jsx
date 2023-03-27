import { useEffect, useRef, useState } from "react";
import imgacademy from "../assets/platzi.svg";

export default function Academy() {
  const targetRef = useRef();

  const [isView, setIsView] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsView(true);
        } else {
          setIsView(false);
        }
      },
      { threshold: 0.5 }
    );
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  return (
    <div className="academy">
      <section className="academy_content">
        <h2 ref={targetRef} className={`${isView ? "text_animation" : ""}`}>
          Historial academico
        </h2>
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
