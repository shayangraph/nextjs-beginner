import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <div className="container">
        <img src="/assets/vercel.svg" alt="vercel" />
        <br />
        <p>this is a test</p><br />
        <Link href="/route/page">Hello</Link>
      </div>
    </>
  );
}
