import Link from "next/link"

import { PreviewAlert } from "components/preview-alert"

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
        <header>

        </header>
        <main>{children}</main>
    </>
  )
}
