import axios from "axios";
import { serialize } from "cookie";
import {loginRuta} from '../../../configs/api.configs'

export default async function loginRoute(req, res){
    if(req.method !== "POST")
    {
      return res.status(400).json({msg: "Bad Request"})
    }

    try {

      const {email, password} = req.body

      const result = await axios.post(loginRuta, {email, password}, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
  
      const serialized = serialize("Token", result.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        sameSite: "strict",
        maxAge: 3600,
        path: "/",
      });
  
      res.setHeader("Set-Cookie", serialized);
      return res.status(200).json({msg: "Bienvenido"})
    } catch (error) {
      console.log(error)
      return res.status(401).json({msg: "Invalid login"})
    }
}