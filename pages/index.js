import Head from 'next/head'
// import { getSortedPostsData } from '../lib/posts'
import Layout from "../components/layout"

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/wiki`)
  const data = await res.json()
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