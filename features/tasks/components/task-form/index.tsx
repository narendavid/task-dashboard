// src/features/tasks/components/task-form/index.tsx
"use client";

import { useState } from "react";
import { useAppDispatch } from "@/features/tasks/hooks";
import { addTask } from "@/store/tasksSlice";
import styles from "./styles.module.css";

export default function TaskForm() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask({ title: title.trim(), priority }));
    setTitle("");
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <input
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <select
        className={styles.select}
        value={priority}
        onChange={(e) => setPriority(e.target.value as any)}
      >
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>
      <button className={styles.button} type="submit">
        Agregar
      </button>
    </form>
  );
}
