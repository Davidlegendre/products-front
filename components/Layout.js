import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { logoutLoginHandler } from "../Handlers/loginHandler";

export default function Layout({isUser,children, title }) {
const router = useRouter()
  return (
    <div>
      <Head>
        <title>Products App {title ? "-" + title : ""}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      {!isUser && <ul>
          
          <li>
            <Link href={"/auth/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/auth/singin"}>Registrarse</Link>
          </li>

        </ul> || 
          <button onClick={async ()=> await logoutLoginHandler(router)}>Logout</button>
        }
      </div>
      <main>        
        {children}
      </main>
    </div>
  );
}