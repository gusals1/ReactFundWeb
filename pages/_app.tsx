import { globalStyles } from "@/src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout/index";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}
