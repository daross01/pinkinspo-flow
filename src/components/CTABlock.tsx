import { Link } from "react-router-dom";

const CTABlock = () => (
  <section className="mx-auto my-12 max-w-3xl rounded-2xl bg-primary px-6 py-10 text-center">
    <p className="mb-4 text-lg font-semibold text-primary-foreground">
      Creé esta web en 24h con ChatGPT y ahora genera $$$ sola
    </p>
    <Link
      to="/method"
      className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
    >
      Descubre cómo replicarla
    </Link>
  </section>
);

export default CTABlock;
