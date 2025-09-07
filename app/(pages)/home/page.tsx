'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { paths } from '@/lib/variables';
import { GoalDrawer } from '@/components/goal-drawer';

export default function HomePage() {
	const router = useRouter();

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Button
					className="bg-chart-3"
					onClick={() => {
						router.push(paths.auth.signIn);
					}}
				>
					Get Started Now!
				</Button>
			</main>
			<div className="row-start-3 ml-auto">
				<GoalDrawer />
			</div>
		</div>
	);
}
