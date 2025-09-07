import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";

import { ExerciseTypeEnum } from "@/enum/exercises";
import { exerciseType } from "@/lib/variables";

export default function ExercisesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Workout Categories</h1>
      <div
        className="
        grid   
        lg:grid-cols-4
        md:grid-cols-3
        sm:grid-cols-3
        grid-cols-2
        gap-4"
      >
        {Object.values(exerciseType).map((exercise, index) => (
          <div key={index} className="pt-1 basis-1/2">
            <div className="p-1">
              <Card
                // onClick={() => console.log("clicked")}
                className="cursor-pointer "
                style={{
                  backgroundImage: `url(${exercise.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-center p-6">
                    <h3>{exercise.name}</h3>
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <Button className="mt-10 ">Add a new exercise</Button>
    </div>
  );
}
