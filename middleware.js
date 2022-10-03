import { NextResponse } from "next/server";

export async function middleware(req){
    let verify = req.cookies.get('Token')
    let host = req.nextUrl.origin
    let url = req.nextUrl.pathname

    if(!verify && url.includes('/products'))
    {
        return NextResponse.redirect(host + '/auth/login')
    }

    if(verify && (url.includes('/login') || url.includes('/singin') && !url.includes('/api')))
    {
        return NextResponse.redirect(host + '/')
    }
}