"use client";

import { useAppSelector } from "@/features/tasks/hooks";
import { selectFilteredTasks } from "@/store/tasksSlice";
import TaskItem from "../task-item";
import styles from "./styles.module.css";

export default function TaskList() {
  const filteredTasks = useAppSelector(selectFilteredTasks);

  if (filteredTasks.length === 0)
    return <p style={{ marginTop: 16, textAlign: "center" }}>No hay tareas.</p>;

  return (
    <div className={styles.list}>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
