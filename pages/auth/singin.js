import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { CredentialsModifyHandler } from "../../Handlers/globalHandlers";
import { registerHandler } from "../../Handlers/registerHandler";

export default function SingIn() {
  
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    name: "",
  });
  const [state, setState] = useState("");
  const [carga, setCarga] = useState(false);

  return (
    <div>
      <form
        onSubmit={(e) => registerHandler(e, setState, setCarga, credentials, router)}
      >
        <input
          type={"email"}
          name="email"
          placeholder="user@email.com"
          onChange={(e) =>
            CredentialsModifyHandler(e, setCredentials, credentials)
          }
        ></input>
        <input
          type={"password"}
          name="password"
          placeholder="password"
          onChange={(e) =>
            CredentialsModifyHandler(e, setCredentials, credentials)
          }
        ></input>
        <input
          type={"password"}
          name="confirmpassword"
          placeholder="confirm password"
          onChange={(e) =>
            CredentialsModifyHandler(e, setCredentials, credentials)
          }
        ></input>
        <input
          type={"text"}
          name="name"
          placeholder="name"
          onChange={(e) =>
            CredentialsModifyHandler(e, setCredentials, credentials)
          }
        ></input>
        <button>Resgistrar</button>
      </form>
      <p>{state}</p>
      {carga && <p>cargando</p>}
      <Link href={"/auth/login"}>Volver al login</Link>
    </div>
  );
}
