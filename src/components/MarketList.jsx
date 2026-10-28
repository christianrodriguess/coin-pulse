import { COINS } from '../data/coins';
import { formatPrice } from '../lib/format';
import { dayChangePercent } from '../lib/money';
import { Change } from './Change';

export function MarketList({ prices }) {
  return (
    <section aria-labelledby="market-title">
      <h2 id="market-title" className="px-4 pt-4 pb-2 font-medium">
        Mercado{' '}
        <span className="text-sm font-normal text-muted"> * 24 horas</span>
      </h2>
      <ul>
        {COINS.map((coin) => {
          const live = prices[coin.pair];
          return (
            <li key={coin.symbol} className="flex items-center gap-3 px-4 py-2">
              <img src={coin.logo} alt="" className="size-7" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium">{coin.symbol}</span>
                <span className="block truncate text-xs text-muted">
                  {coin.name}
                </span>
              </span>
              <span className="text-sm tabular-nums">
                <span className="tabular-nums">
                  {live ? formatPrice(live.price) : '—'}
                </span>
                {live && (
                  <Change
                    percent={dayChangePercent(live)}
                    className="text-xs"
                  />
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
