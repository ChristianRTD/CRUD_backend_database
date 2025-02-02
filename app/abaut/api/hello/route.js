import { NextResponse } from "next/server";
import {conn} from "@/src/libs/mysql";

export async function GET() {
  const result = await conn.query('SELECT NOW()')
  console.log(result)
  return NextResponse.json( {message: 'hello word'} );
}
