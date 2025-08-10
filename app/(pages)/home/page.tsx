import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function HomePage() {
  const path = usePathname();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Button
          className="bg-chart-3"
          onClick={() => {
            path === "/auth/login";
            window.location.href = "/auth/sign-in";
          }}
        >
          Get Started Now!
        </Button>
      </main>
    </div>
  );
}
