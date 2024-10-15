import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WorkoutSplit() {
  const workoutDays = [
    {
      day: "Monday",
      focus: "Legs",
      exercises: [
        "Squats: 4 sets x 8-10 reps",
        "Leg Press: 3 sets x 10-12 reps",
        "Romanian Deadlifts: 3 sets x 10-12 reps",
        "Leg Extensions: 3 sets x 12-15 reps",
        "Leg Curls: 3 sets x 12-15 reps",
        "Calf Raises: 4 sets x 15-20 reps"
      ]
    },
    {
      day: "Tuesday",
      focus: "Chest and Shoulders",
      exercises: [
        "Bench Press: 4 sets x 8-10 reps",
        "Incline Dumbbell Press: 3 sets x 10-12 reps",
        "Shoulder Press: 3 sets x 8-10 reps",
        "Lateral Raises: 3 sets x 12-15 reps",
        "Chest Flyes: 3 sets x 12-15 reps",
        "Front Raises: 3 sets x 12-15 reps"
      ]
    },
    {
      day: "Thursday",
      focus: "Back",
      exercises: [
        "Deadlifts: 4 sets x 6-8 reps",
        "Pull-ups or Lat Pulldowns: 4 sets x 8-10 reps",
        "Barbell Rows: 3 sets x 8-10 reps",
        "Seated Cable Rows: 3 sets x 10-12 reps",
        "Face Pulls: 3 sets x 12-15 reps",
        "Hyperextensions: 3 sets x 12-15 reps"
      ]
    },
    {
      day: "Friday",
      focus: "Arms",
      exercises: [
        "Barbell Curls: 3 sets x 8-10 reps",
        "Tricep Pushdowns: 3 sets x 10-12 reps",
        "Hammer Curls: 3 sets x 10-12 reps",
        "Skull Crushers: 3 sets x 10-12 reps",
        "Preacher Curls: 3 sets x 12-15 reps",
        "Tricep Dips: 3 sets x 12-15 reps"
      ]
    }
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {workoutDays.map((workout, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle>{workout.day}: {workout.focus}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {workout.exercises.map((exercise, exerciseIndex) => (
                <li key={exerciseIndex} className="text-sm">{exercise}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
