import { COINS } from '../data/coins';
import { formatPrice } from '../lib/format';

export function MarketList({ prices }) {
  return (
    <section aria-labelledby="market-title">
      <h2 id="market-title" className="px-4 pt-4 pb-2 font-medium">
        Mercado
      </h2>
      <ul>
        {COINS.map((coin) => (
          <li key={coin.symbol} className="flex items-center gap-3 px-4 py-2">
            <img src={coin.logo} alt="Logo da criptomoeda" className="size-7" />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium">{coin.symbol}</span>
              <span className="block truncate text-xs text-muted">
                {coin.name}
              </span>
            </span>
            <span className="text-sm tabular-nums">
              {formatPrice(prices[coin.pair].price)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
