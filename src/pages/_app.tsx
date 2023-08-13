import Header from "@/components/ui/Header";
import "../styles/global.css";
import Footer from "@/components/ui/Footer";

function MyApp({ Component, pageProps }) {
  // if getLayout is defined ignore the default header and footer
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default MyApp;
