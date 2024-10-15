import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WeeklyWorkoutSplit() {
  const weekSchedule = [
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
      focus: "Rest Day",
      exercises: ["Active recovery, stretching, or light cardio (optional)"]
    },
    {
      day: "Wednesday",
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
      focus: "Rest Day",
      exercises: ["Active recovery, stretching, or light cardio (optional)"]
    },
    {
      day: "Friday",
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
      day: "Saturday",
      focus: "Arms",
      exercises: [
        "Barbell Curls: 3 sets x 8-10 reps",
        "Tricep Pushdowns: 3 sets x 10-12 reps",
        "Hammer Curls: 3 sets x 10-12 reps",
        "Skull Crushers: 3 sets x 10-12 reps",
        "Preacher Curls: 3 sets x 12-15 reps",
        "Tricep Dips: 3 sets x 12-15 reps"
      ]
    },
    {
      day: "Sunday",
      focus: "Rest Day",
      exercises: ["Full rest or light activity like walking or yoga"]
    }
  ]

  return (
    <div className="max-w-md mx-auto space-y-6">
      {weekSchedule.map((day, index) => (
        <Card key={index} className={`w-full ${day.focus === "Rest Day" ? "bg-secondary" : ""}`}>
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between items-center">
              <span className="text-lg font-bold">{day.day}</span>
              <span className={`text-sm font-medium ${day.focus === "Rest Day" ? "text-muted-foreground" : "text-primary"}`}>
                {day.focus}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              {day.exercises.map((exercise, exerciseIndex) => (
                <li key={exerciseIndex} className="text-sm">{exercise}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
