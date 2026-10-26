import { formatBRL } from "../lib/format";

export function PortfolioSummary() {
  return (
    <section aria-labelledby="summary-title">
      <h1 id="summary-title" className="text-sm font-medium text-muted">
        Sua carteira
      </h1>
      <p className="mt-1 text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
        {formatBRL("0")}
      </p>
      <p className="mt-2 text-sm text-muted">
        Registre uma compra para acompanhar o resultado.
      </p>
    </section>
  );
}
