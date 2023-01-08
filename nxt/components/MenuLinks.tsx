import Link from "next/link";

export const MenuLinks = () => {
  return (
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/art">Artworks</Link></li>
      <li><Link href="#contact">Contact</Link></li>
    </ul>
  )
}
