import axios from "axios";
import cookie from 'cookie'
import { userdataRuta } from "../../../configs/api.configs";

export default async function userdata(req, res){
    if(req.method !== "GET")
    {
      return res.status(400).json({msg: "Bad Request"})
    }

    try {

        const {Token} = cookie.parse(req.headers.cookie);
        const result = await axios.get(userdataRuta, {
            headers: {
                'Authorization': "Bearer " + Token
              }
        });

        const data = result.data
        return res.status(200).json({user: data.user})
      } catch (error) {
        console.error(error)
        return res.status(400).json({msg: "Invalid login"})
      }
}