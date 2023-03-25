import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date} 
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
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
