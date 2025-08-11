import pool from "@/lib/db";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const id = uuidv4();

    if (!email || !password) {
      return Response.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO "users" (uuid, email, password) VALUES ($1, $2, $3) RETURNING uuid, email',
      [id, email, hashedPassword]
    );

    return Response.json(result.rows[0]); // (returned without password)
  } catch (err: unknown) {
    return Response.json({ error: (err as Error).message }, { status: 500 });
  }
}
