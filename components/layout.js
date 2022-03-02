import Navbar from "./navbar";
import Post from "./post";

export default function Layout({data}) {
  return (
    <>
      <Navbar />
      <Post data={data}/>
    </>
  );
}
