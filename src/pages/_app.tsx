import Header from "@/components/ui/Header";
import "../styles/global.css";
import Footer from "@/components/ui/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
