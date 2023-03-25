import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.id}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      {console.log(postData)}
    </Layout>
  );
}
export function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
