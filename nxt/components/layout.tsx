import {Footer} from "@components";

export function Layout({children }) {
  return (
    <>
      {/*<PreviewAlert />*/}
      <a id="top" />
      {children}
      <Footer />
    </>
  )
}
