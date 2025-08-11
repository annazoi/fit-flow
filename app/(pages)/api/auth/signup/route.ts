import pool from "@/lib/db";
import bcrypt from "bcrypt"; // for password hashing

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO "users" (email, password) VALUES ($1, $2) RETURNING id, email',
      [email, hashedPassword]
    );

    return Response.json(result.rows[0]); // Return the created user (without password)
  } catch (err: unknown) {
    return Response.json({ error: (err as Error).message }, { status: 500 });
  }
}
