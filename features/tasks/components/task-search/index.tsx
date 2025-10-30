"use client";

import { useState, useEffect } from "react";
import { useAppDispatch } from "@/features/tasks/hooks";
import { setTasks } from "@/store/tasksSlice";
import { useAppSelector } from "@/features/tasks/hooks";
import styles from "./styles.module.css";

export default function TaskSearchBar() {
  const dispatch = useAppDispatch();
  const allTasks = useAppSelector((s) => s.tasks.list);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() === "") {
        dispatch(setTasks(allTasks));
      } else {
        const filtered = allTasks.filter((t) =>
          t.title.toLowerCase().includes(query.toLowerCase())
        );
        dispatch(setTasks(filtered));
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Buscar tareas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
