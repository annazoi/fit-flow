import { PrismaClient } from "@/lib/generated/prisma";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import * as jose from "jose";

const prisma = new PrismaClient();
const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        { error: "Email and password required." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return Response.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return Response.json({ error: "Invalid password." }, { status: 401 });
    }

    const token = await new jose.SignJWT({ userId: user.uuid })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(process.env.JWT_EXPIRATION_TIME || "1h")
      .sign(secret);

    return Response.json(
      {
        message: "User signed in successfully.",
        user: {
          id: user.uuid,
          email: user.email,
        },
        token,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    return Response.json({ error: (err as Error).message }, { status: 500 });
  }
}
