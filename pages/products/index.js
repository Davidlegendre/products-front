import Layout from "../../components/Layout";
import cookie from 'cookie'

export default function ProductsPage({isUser}){
    return (
       <Layout isUser={isUser}>
            <div>
                <p>productos</p>
            </div>
       </Layout>
    )
}
export function getServerSideProps(context)
{
  try {
    cookie.parse(context.req.headers.cookie);
    return {props: {isUser: true}}
  } catch (error) {
    return {props: {isUser: false}}
   }
}