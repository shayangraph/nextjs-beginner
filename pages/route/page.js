import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Page</title>
        <meta content="first content" />
      </Head>
      <Layout>
        <div className="container">
          <p>this is a test</p>
          <br />
          <Link href="/">this is a page js</Link>
        </div>
      </Layout>
    </>
  );
}
