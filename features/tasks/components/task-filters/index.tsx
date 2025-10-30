"use client";

import { useAppDispatch, useAppSelector } from "@/features/tasks/hooks";
import { setFilter } from "@/store/tasksSlice";
import styles from "./styles.module.css";

export default function TaskFilters() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((s) => s.tasks.filter);

  return (
    <div className={styles.row}>
      <button
        className={`${styles.button} ${filter === "all" ? styles.active : ""}`}
        onClick={() => dispatch(setFilter("all"))}
      >
        Todas
      </button>

      <button
        className={`${styles.button} ${filter === "completed" ? styles.active : ""}`}
        onClick={() => dispatch(setFilter("completed"))}
      >
        Completadas
      </button>

      <button
        className={`${styles.button} ${filter === "pending" ? styles.active : ""}`}
        onClick={() => dispatch(setFilter("pending"))}
      >
        Pendientes
      </button>
    </div>
  );
}
