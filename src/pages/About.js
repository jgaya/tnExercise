import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <main>
        <h2>Ejercicio Truth North</h2>
        <p>
          Postulante Juan Gaya, gracias pos su tiempo.
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
} 