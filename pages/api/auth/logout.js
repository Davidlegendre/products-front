import cookie, { serialize } from 'cookie'
export default function logoutRuta(req, res){
    if(req.method !== "POST")
    {
      
      return res.status(400).json({msg: "Bad Request"})
    }
    try {      
      const {Token} = cookie.parse(req.headers.cookie);
        const serialized = serialize("Token", "null", {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: "strict",
            maxAge: 0,
            path: "/",
          });
        
        res.setHeader('Set-Cookie', serialized)
        return res.status(200).json({msg: "Cierre de sesion"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Not Login"})
    }
}