"use client";
import { signInWithGoogle } from "@/utils/firebase-auth";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </div>
  );
}
