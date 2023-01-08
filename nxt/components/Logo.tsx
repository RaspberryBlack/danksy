import Link from "next/link";

interface LogoProps {
  className?: string,
}

export const Logo = ({className}:LogoProps) => (
  <Link href="/" className={`text-pink-600 inline-block font-heading font-black text-xl tracking-wide after:content-[''] after:w-4/5 after:block after:border-b-[4px] after:border-pink-600 after:-mt-3 after:ml-px ${className && className}`}>
    Danksy
  </Link>
)
