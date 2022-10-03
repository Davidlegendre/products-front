import Layout from "../components/Layout";
import cookie from 'cookie'
export default function Home({isUser}) {


  return (
    <Layout isUser={isUser}>
      <p>Home</p>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  try {
    cookie.parse(context.req.headers.cookie);
    return {props: {isUser: true}}
  } catch (error) {
    console.log(error)
    return {props: {isUser: false}}
   }
}