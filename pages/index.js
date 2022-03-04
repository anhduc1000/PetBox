import Layout from "../components/layout"
import fs from "fs";



export async function getServerSideProps(context) {
  const rawData = fs.readFileSync("./data/breeds.json");
  const data = JSON.parse(rawData);
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