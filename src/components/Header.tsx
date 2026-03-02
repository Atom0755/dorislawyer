'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header>
      <div className="inner">
        <Link href="/" className="logo">
          Haixia Doris Law PLLC
          <span>Attorney at Law</span>
        </Link>
        <nav>
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'active' : ''}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a href="tel:+13109903853" className="phone-header">
          +1-310-990-3853
        </a>
      </div>
    </header>
  )
}
