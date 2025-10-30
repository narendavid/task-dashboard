"use client";

import { useAppSelector } from "@/features/tasks/hooks";
import TaskItem from "../task-item";
import styles from "./styles.module.css";

export default function TaskBoard() {
  const { list, filter } = useAppSelector((s) => s.tasks);

  const priorities = ["high", "medium", "low"] as const;

  const filtered = list.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div className={styles.board}>
      {priorities.map((p) => (
        <div key={p} className={styles.column}>
          <h3 className={styles.header}>
            {p === "high" ? "Alta" : p === "medium" ? "Media" : "Baja"}
          </h3>
          <div className={styles.list}>
            {filtered
              .filter((t) => t.priority === p)
              .map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
