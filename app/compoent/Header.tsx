// Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="navList">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
