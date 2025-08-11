import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const users = await pool.query('SELECT * FROM "users" ');
    return NextResponse.json(users.rows);
  } catch (err: unknown) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
