import { useState } from "react";
import {subminLoginHandler } from "../../Handlers/loginHandler";
import { CredentialsModifyHandler } from "../../Handlers/globalHandlers"
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const router = useRouter()

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [state, setState] = useState("");
  const [carga, setCarga] = useState(false);   

  return (
    <div>
      <Link href={"/"}>Volver a Home</Link>
      <form onSubmit={(e)=>subminLoginHandler(e,setState, setCarga,credentials, router)}>
        <input
          type={"email"}
          name="email"
          placeholder="user@email.com"
          onChange={(e)=>CredentialsModifyHandler(e,setCredentials, credentials)}
        ></input>
        <input
          type={"password"}
          name="password"
          placeholder="********"
          onChange={(e)=>CredentialsModifyHandler(e,setCredentials, credentials)}
        ></input>
        <button>Login</button>
      </form>
      <p>{state}</p>
      {carga && <p>cargando</p>}
    </div>
  );
}
