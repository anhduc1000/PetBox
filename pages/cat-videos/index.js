import Videos from '../../components/videos';
import { getAllBlogData } from "../../lib/blogs";

export function getServerSideProps() {
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


export default function CatVideos(props) {
  const data = props.data;
  return (
    <>
      <Videos data={data} />
    </>
  )
}