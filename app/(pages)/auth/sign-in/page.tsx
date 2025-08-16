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
import { paths } from "@/lib/variables";
import { signinSchema } from "@/schemas/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authStore } from "@/store/authstore";
import { useMutation } from "@tanstack/react-query";
import { signInUser } from "@/app/services/auth";

export default function SignIn() {
  const router = useRouter();
  const { logIn } = authStore((store) => store);
  const signInMutation = useMutation({
    mutationFn: signInUser,
    onSuccess: (data) => {
      console.log("data:", data);
      logIn({
        email: data.user.email,
        token: data.token,
        userId: data.user.id,
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      signInMutation.mutate(data);
    } catch (error) {
      console.error("Sign In failed:", error);
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto mt-10">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link" onClick={() => router.push(paths.auth.signUp)}>
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
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
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <Button type="submit" className="w-full mt-5">
            Login
          </Button>
        </CardContent>
      </form>
      <CardFooter className="flex-col gap-2">
        <Button variant="outline" className="w-full" onClick={signInWithGoogle}>
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
