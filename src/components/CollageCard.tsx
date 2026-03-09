import { Link } from "react-router-dom";

interface CollageCardProps {
  label: string;
  to: string;
}

const placeholder = (i: number) =>
  `https://images.unsplash.com/photo-${
    [
      "1604654894610-df63bc536371",
      "1519014816548-bf5fe059798b",
      "1522337360788-8b13dee7a37e",
      "1507003211169-0a1dd7228f2d",
    ][i % 4]
  }?w=200&h=200&fit=crop&auto=format`;

const CollageCard = ({ label, to }: CollageCardProps) => (
  <Link
    to={to}
    className="block w-52 shrink-0 snap-start rounded-2xl border border-border bg-card p-2 transition-transform hover:scale-[1.02]"
  >
    <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-xl">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="aspect-square bg-primary">
          <img
            src={placeholder(i)}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
    <p className="mt-2 text-center text-sm font-medium text-foreground">{label}</p>
  </Link>
);

export default CollageCard;
