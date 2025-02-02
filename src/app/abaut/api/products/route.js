import { NextResponse } from "next/server";

export  function GET() {
  return NextResponse.json("LISTANDO PRODUCTOS");
}

export  async function POST(resquest) {

  const data = await request.json()
    console.log(data)
    return NextResponse.json("CREANDO PRODUCTOS");
  }