import pool from "@/lib/db";

export async function GET(request: Request) {
  try {
    const userId = request.url.split("/").pop();
    const user = await pool.query('SELECT * FROM "users" WHERE uuid = $1', [
      userId,
    ]);

    if (!userId) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    if (user.rows.length === 0) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }
    return Response.json(user.rows[0]);
  } catch (err: unknown) {
    return Response.json({ error: (err as Error).message }, { status: 500 });
  }
}
