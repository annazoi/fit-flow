"use client";
import { signInWithGoogle } from "@/utils/firebase-auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { generatePassword } from "@/lib/utils";
import { paths } from "@/lib/variables";
import { signupSchema } from "@/schemas/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "@/app/services/auth";

export default function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await createUser(data);
      router.push(paths.auth.signIn);
      console.log("User created successfully");
    } catch (error) {
      console.error("Sign Up failed:", error);
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto mt-10">
      <CardHeader>
        <CardTitle>Sign Up for an account</CardTitle>
        <CardDescription>
          Enter your email below to create a new account
        </CardDescription>
        <CardAction>
          <Button variant="link" onClick={() => router.push(paths.auth.signIn)}>
            Login
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <CardAction className="ml-auto">
                  <Button
                    variant="link"
                    className="ml-2 text-sm underline-offset-4 hover:underline"
                    onClick={() => {
                      const password = generatePassword();
                      // Do something with the generated password, e.g., fill the input
                    }}
                  >
                    Generate a Password
                  </Button>
                </CardAction>
              </div>
              <Input
                id="password"
                type="password"
                required
                {...register("password")}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full mt-5">
            Sign Up
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="outline" className="w-full" onClick={signInWithGoogle}>
          Sign Up with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
