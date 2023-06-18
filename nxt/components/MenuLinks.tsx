import Link from "next/link";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Artworks", href: "/art" },
  { text: "Contact", href: "#contact" },
];

export const MenuLinks = ({className, classNameLink}) => {

  return (
    <ul className={className}>
      {MENU_LIST.map((item, index) => (
        <li key={item.text} >
          <Link href={item.href}
                className={classNameLink}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
