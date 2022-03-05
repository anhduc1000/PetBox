import { getBlogData } from "../../../lib/blogs";
import Navbar from "../../../components/navbar";
import fs from "fs";


export async function getStaticPaths() {
  const rawData = fs.readFileSync("./breeds/breeds.json");
  const blogs = JSON.parse(rawData);
  console.log(blogs);
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
