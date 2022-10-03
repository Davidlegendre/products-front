import { registerRuta } from "../configs/api.configs";
import axios from "axios";

export async function registerHandler(
  event,
  setState,
  setCarga,
  credentials,
  router
) {
  event.preventDefault();
  setState("");
  
  if (
    credentials.email === "" ||
    credentials.password === "" ||
    credentials.name === "" ||
    credentials.confirmpassword === ""
  ) {
    setState("Campos Vacios");
  } else if (credentials.password !== credentials.confirmpassword) {
    setState("Confirme el password");
  } else {
    setCarga(true);
    try {
      const result = await axios.post(registerRuta, credentials, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setState(result.data.msg);
      router.push('/auth/login')
    } catch (error) {
      console.log(error)
      setState("Registro Error");
    }
    setCarga(false);
  }
}
