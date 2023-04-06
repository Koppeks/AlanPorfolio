import { useEffect, useState } from "react";
import profilepic from "../assets/profilepic.jpg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className="header">
      <div
        className={`header_img_container ${
          isScrolled ? "tiny_header_img_container" : ""
        }`}
      >
        <svg
          className="bg_img"
          width="960"
          height="960"
          viewBox="0 0 960 960"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="480"
            cy="480"
            r="475"
            fill="white"
            stroke="#FFD159"
            strokeWidth="10"
          />
        </svg>
        <div className="header_img">
          <img src={profilepic} alt="" />
        </div>
      </div>
      <div className={`header_name ${isScrolled ? "tiny_header_name" : ""}`}>
        <h1>ALAN FACUNDO URRI</h1>
        <p>Ventas y contenido publicitario</p>
      </div>
    </header>
  );
}
