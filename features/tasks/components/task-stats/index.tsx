"use client";

import { useAppSelector } from "@/features/tasks/hooks";
import styles from "./styles.module.css";

export default function TaskStats() {
  const tasks = useAppSelector((s) => s.tasks.list);
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div className={styles.box}>
      <div>Total: {total}</div>
      <div>Completadas: {completed}</div>
      <div>Pendientes: {total - completed}</div>
    </div>
  );
}
