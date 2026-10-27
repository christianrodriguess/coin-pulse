import { useState } from 'react';
import { AddPurchaseForm } from './components/AddPurchaseForm';
import { PurchaseTable } from './components/PurchaseTable';
import { Header } from './components/Header';
import { MarketList } from './components/MarketList';
import { PortfolioSummary } from './components/PortfolioSummary';
import { FAKE_PRICES } from './data/fakePrices';
import { DOLLAR_PAIR } from './data/coins';
import { portfolioSummary } from './lib/money';
import { sortPurchases } from './lib/purchases';

function App() {
  const [purchases, setPurchases] = useState([]);
  const prices = FAKE_PRICES;
  const summary = portfolioSummary(purchases, prices);

  function addPurchase(purchase) {
    setPurchases([...purchases, purchase]);
  }

  function removePurchase(id) {
    setPurchases(purchases.filter((purchase) => purchase.id !== id));
  }

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <Header />

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-x-12 gap-y-10 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div>
          <PortfolioSummary
            summary={summary}
            dollar={prices[DOLLAR_PAIR].price}
            hasPurchases={purchases.length > 0}
          />
          <section className="mt-10">
            <h2 className="font-medium">Suas Compras</h2>
            {purchases.length === 0 ? (
              <p className="mt-3 rounded-lg border border-dashed border-line px-4 py-6 text-sm text-muted">
                Nenhuma compra registrada ainda
              </p>
            ) : (
              <div className="mt-10">
                <PurchaseTable
                  purchases={sortPurchases(purchases, 'recentes')}
                  prices={prices}
                  onRemove={removePurchase}
                />
              </div>
            )}
          </section>
        </div>

        <aside className="self-start rounded-xl border border-line">
          <MarketList prices={prices} />
          <AddPurchaseForm prices={prices} onAdd={addPurchase} />
        </aside>
      </main>
    </div>
  );
}

export default App;
