import { useEffect, useRef, useState } from "react";

export default function Competence() {
  const targetRef = useRef(null);

  const [bubbleAnim, setBubbleAnim] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBubbleAnim(true);
        } else {
          setBubbleAnim(false);
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
    <div ref={targetRef} className="competence">
      <h2>Competencias principales</h2>
      <ul>
        <li>Gestion integral de distintas redes</li>
        <li>Identidad de marca</li>
        <li>Planificación de contenido (NOTION)</li>
        <li>Anàlisis de feedback</li>
        <li>Edición de video (guión, grabación, etc.)</li>
        <li>Locución</li>
        <li>Photoshop</li>
        <li>Canva</li>
        <li>Uso de IA's</li>
      </ul>
      <div
        className={`competence_animation_reveal ${
          bubbleAnim ? "animation_reveal" : ""
        }`}
      >
        <section className="competence_animation_reveal_detail"></section>
      </div>
    </div>
  );
}
