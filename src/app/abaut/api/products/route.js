import { NextResponse } from "next/server";

export  function GET() {
  return NextResponse.json("LISTANDO PRODUCTOS");
}

export  function POST() {
    return NextResponse.json("CREANDO PRODUCTOS");
  }