import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Layout>
        <div className="container">
          <img src="/assets/vercel.svg" alt="vercel" />
          <br />
          <p className="title">this is a test</p>
          <br />
          <Link href="/route/page">Hello</Link>
        </div>
      </Layout>
    </>
  );
}
