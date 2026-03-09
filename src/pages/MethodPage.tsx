import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const benefits = [
  "Aprende a crear webs aesthetic que generan ingresos pasivos",
  "Usa ChatGPT para generar contenido visual en minutos",
  "Monetiza con productos digitales sin experiencia previa",
  "Paso a paso, desde cero hasta tu primera venta",
];

const MethodPage = () => (
  <Layout>
    <section className="mx-auto max-w-2xl px-4 py-16 text-center">
      <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
        Producto Digital
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        The Pinterest + AI Method
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        La guía completa para crear webs de inspiración aesthetic que generan ingresos pasivos con Pinterest y ChatGPT.
      </p>
      <a
        href="#"
        className="mt-8 inline-block rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        Quiero el método — $27
      </a>
    </section>

    <section className="mx-auto max-w-2xl px-4 pb-16">
      <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
        ¿Qué incluye?
      </h2>
      <ul className="space-y-4">
        {benefits.map((b, i) => (
          <li
            key={i}
            className="rounded-xl border border-border bg-card px-5 py-4 text-foreground"
          >
            ✨ {b}
          </li>
        ))}
      </ul>
    </section>

    <section className="mx-auto max-w-2xl px-4 pb-16 text-center">
      <div className="rounded-2xl bg-primary px-6 py-10">
        <p className="mb-4 text-lg font-semibold text-primary-foreground">
          ¿Lista para crear tu propia web aesthetic?
        </p>
        <a
          href="#"
          className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Consigue el método ahora
        </a>
      </div>
    </section>
  </Layout>
);

export default MethodPage;
