import { Logo } from './Logo';

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6">
        <Logo />
      </div>
    </header>
  );
}
