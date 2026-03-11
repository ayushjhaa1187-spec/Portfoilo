import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#060608" }}
    >
      <div className="max-w-md w-full text-center">
        <h1
          className="font-display tracking-wider mb-4"
          style={{
            fontSize: "120px",
            lineHeight: 1,
            color: "#8B5CF6",
          }}
        >
          404
        </h1>
        <h2
          className="font-display text-3xl tracking-wider mb-4"
          style={{ color: "#F1F0FB" }}
        >
          Page Not Found
        </h2>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: "#888" }}>
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="shimmer-btn font-mono text-sm tracking-wider uppercase px-8 py-3 flex items-center justify-center gap-2 text-white"
          >
            <Home size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
