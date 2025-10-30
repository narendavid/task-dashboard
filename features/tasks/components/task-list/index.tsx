// src/features/tasks/components/task-list/index.tsx
"use client";

import { useAppDispatch, useAppSelector } from "@/features/tasks/hooks";
import TaskItem from "../task-item";
import styles from "./styles.module.css";

export default function TaskList() {
  const { list, filter } = useAppSelector((s) => s.tasks);
  const filtered = list.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  if (filtered.length === 0)
    return <p style={{ marginTop: 16, textAlign: "center" }}>No hay tareas.</p>;

  return (
    <div className={styles.list}>
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
