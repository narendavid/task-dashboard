// src/features/tasks/components/task-item/index.tsx
"use client";

import styles from "./styles.module.css";
import type { Task } from "@/features/tasks/types/task";
import { useAppDispatch } from "@/features/tasks/hooks";
import { toggleTask, deleteTask } from "@/store/tasksSlice";

export default function TaskItem({ task }: { task: Task }) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <button
          className={styles.checkbox}
          aria-label="toggle"
          onClick={() => dispatch(toggleTask(task.id))}
        >
          {task.completed ? "✅" : "◻️"}
        </button>
        <div>
          <div
            className={`${styles.title} ${task.completed ? styles.done : ""}`}
          >
            {task.title}
          </div>
          <div className={styles.meta}>
            <span className={styles.priority}>{task.priority}</span>
            <span className={styles.date}>
              {new Date(task.createdAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div>
        <button
          className={styles.delete}
          onClick={() => dispatch(deleteTask(task.id))}
          aria-label="delete"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
