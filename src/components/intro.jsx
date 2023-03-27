import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const targetRef = useRef();

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("in view");
          setInView(true);
        } else {
          console.log("not in view");
          setInView(false);
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
    <div ref={targetRef} className="intro">
      <div className="intro_content">
        <h1 className={` ${inView ? "text_animation" : ""}`}>
          Ventas y contenido publicitario
        </h1>
        <p>
          Soy un joven profesional de 25 años. Apasionado por el aprendizaje
          autodidacta y la investigación en el mundo del marketing digital. He
          adquirido habilidades en la creación y edición de contenido
          multimedia, incluyendo video y locución. Mi enfoque siempre ha sido el
          de crear contenido atractivo y relevante para la audiencia, lo que ha
          dado como resultado una mejora en el engagement y en la presencia
          digital de la empresa.
        </p>
      </div>
    </div>
  );
}
