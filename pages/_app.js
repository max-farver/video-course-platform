import "../styles/globalStyles.css"
import { PageWrapper } from "../utils/appContext"
import { DefaultSeo } from "next-seo"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageWrapper>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "en_US",
            url: "https://video-course-platform.now.sh/",
            site_name: "Northwest Financial Consulting",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary",
          }}
          titleTemplate="NW Financial | %s"
        />
        <Component {...pageProps} />
      </PageWrapper>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
