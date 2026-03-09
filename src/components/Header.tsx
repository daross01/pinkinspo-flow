import { Link } from "react-router-dom";

const Header = () => (
  <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
    <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
      <Link to="/" className="text-xl font-bold tracking-tight text-accent">
        pinkinspo
      </Link>
      <Link
        to="/method"
        className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        The Pinterest + AI Method
      </Link>
    </div>
  </header>
);

export default Header;
