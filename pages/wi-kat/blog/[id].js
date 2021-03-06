import { getBlogData, getAllBlogData } from "../../../lib/blogs";
import Navbar from "../../../components/navbar";


export async function getStaticPaths() {
  const blogs = getAllBlogData();
  if (!blogs) {
    return {
      notFound: true,
    };
  }
  const paths = blogs.map((blog) => {
    return {
      params: {
        id: blog.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id);
  return {
    props: {
      blogData,
    },
  };
}

export default function Blog({ blogData }) {
  return (
    <>
      <Navbar />
      <p>{blogData.breed}</p>
    </>
  );
}
