import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { CardHeader, Card, CardBody, CardFooter } from "reactstrap";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <Card>
        <CardHeader>{postData.title}</CardHeader>
        <CardBody>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </CardBody>
        <CardFooter>
          <Date dateString={postData.date} />
        </CardFooter>
      </Card>
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
