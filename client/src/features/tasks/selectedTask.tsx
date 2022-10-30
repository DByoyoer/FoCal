import { useAppSelector } from "../../app/hooks";
import { selectedTask } from "./tasksSlice";
import { Event as Task } from "react-big-calendar";

export default function currentTask() {
    const task: Task | null = useAppSelector(selectedTask);
    return task;
}