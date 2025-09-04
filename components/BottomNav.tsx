import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/activities', label: 'Attività' },
  { href: '/routines', label: 'Routine' },
  { href: '/timer', label: 'Timer' },
  { href: '/info', label: 'Info' }
];

export default function BottomNav() {
  const path = usePathname();
  return (
    <nav className="border-t flex justify-between px-2 py-3 bg-white">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className={path === l.href ? 'text-primary' : ''}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
