import Navbar from "../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";

export async function getServerSideProps() {
  const rawData = fs.readFileSync("./data/breeds.json");
  const posts = JSON.parse(rawData);
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default function WiKat({ posts }) {
  return (
    <>
      <Navbar />
      <nav>
        <ul>
          {posts.map((post) => (
            <li>
              <Link href={`/wi-kat/blog/${encodeURIComponent(post.id)}`}>
                <a>
                  <Image
                    src={post.imageSrc}
                    className="box-image"
                    alt="me"
                    width="300"
                    height="300"
                  />
                </a>
              </Link>

              <p>{post.breed}</p>
              <p>Coat Length: {post.coat_length}</p>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        nav ul {
          list-style-type: none;
          margin: 1vh;
          padding: 7vh;
          display: flex;
          flex-wrap: wrap;
          gap: 1vh 1vw;
          justify-content: space-evenly;
          /*align-items: stretch;  not needed, it's by default*/
        }
        nav li {
          width: 25vw;
          text-align: center;
          border: 2px solid rgb(20, 60, 168);
          background-color: rgba(20, 60, 168, 0.2);
          text-decoration: none;
          color: #000;
          padding: 10px 10px 8px;
          display: block;
          height: 100%;
          box-sizing: border-box; /*Don't forget this*/
        }
      `}</style>
    </>
  );
}
