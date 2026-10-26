import { Header } from "./components/Header";
import { MarketList } from "./components/MarketList";
import { PortfolioSummary } from "./components/PortfolioSummary";
import { FAKE_PRICES } from "./data/fakePrices";

function App() {
  return (
    <div className="min-h-dvh bg-bg text-ink">
      <Header />

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-x-12 gap-y-10 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div>
          <PortfolioSummary />
        </div>
        <aside className="self-start rounded-xl border border-line">
          <MarketList prices={FAKE_PRICES} />
        </aside>
      </main>
    </div>
  );
}

export default App;
