import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useThemeStore } from "../store/ThemeStore";

function MyApp({ Component, pageProps }: AppProps) {
  const dark = useThemeStore((state) => state.dark);
  return (
    <div data-theme={dark ? "dark" : "light"} className="min-h-screen h-full">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
