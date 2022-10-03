import axios from "axios";

export const subminLoginHandler = async (
  event,
  setState,
  setCarga,
  credentials,
  router
) => {
  event.preventDefault();

  setState("");
  
  if (credentials.email === "" || credentials.password === "") {
    setState("Campos Vacios");
  } else {
    setCarga(true);
    try {
      const result = await axios.post("/api/auth/login", credentials, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setState(result.data.msg);
      router.push('/')
    } catch (error) {
      console.log(error)
      setState("Login Error");
    }
    setCarga(false);
  }
};

export const logoutLoginHandler = async (router)=> {
  try {
    await axios.post("/api/auth/logout");    
  }catch(error){
    console.error(error)
  }
  router.push('/')
}