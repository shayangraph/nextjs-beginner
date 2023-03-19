import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title key="title">Page</title>
        <meta content="first content" key="first" />
      </Head>
      <div className="container">
        <p>this is a test</p>
        <br />
        <Link href="/">this is a page js</Link>
      </div>
    </>
  );
}
