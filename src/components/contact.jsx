import { useEffect, useRef, useState } from "react";

export default function Contact() {
  // const targetRef = useRef(null);

  // const [bubbleAnim, setBubbleAnim] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         console.log("Visible contact");
  //         setBubbleAnim(true);
  //       } else {
  //         console.log("No visible contact");
  //         setBubbleAnim(false);
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );
  //   if (targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }
  //   return () => {
  //     if (targetRef.current) {
  //       observer.unobserve(targetRef.current);
  //     }
  //   };
  // }, [targetRef]);

  return (
    <div className="contact">
      <h2>Contactame</h2>
      <form action="" className="contact_form">
        <section>
          <input type="text" required />
          <label>Nombre</label>
        </section>
        <section>
          <input type="text" required />
          <label>Email</label>
        </section>
        <section>
          <input type="text" required />
          <label>Asunto</label>
        </section>
        <section>
          <textarea name="" id="" cols="30" rows="10" required></textarea>
          <label>Mensaje</label>
        </section>
      </form>
      <div className={`contact_animation_reveal`}></div>
    </div>
  );
}
