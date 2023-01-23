import {Footer} from "@components";

export function Layout({children }) {
  return (
    <>
      {/*<PreviewAlert />*/}
      <span id="top" />
      {children}
      <Footer />
    </>
  )
}
