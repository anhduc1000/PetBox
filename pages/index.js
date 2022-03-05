import Layout from "../components/layout"
import { getAllBlogData } from "../lib/blogs";

export async function getServerSideProps() {
  const data = getAllBlogData();
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data }, // will be passed to the page component as props
  }
}


export default function Home(props) {
  const data = props.data;
  return (
    <>
      <Layout data={data} />
    </>
  )
}