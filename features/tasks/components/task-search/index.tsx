"use client";

import { useState } from "react";
import { useAppDispatch } from "@/features/tasks/hooks";
import { setSearchQuery } from "@/store/tasksSlice";
import styles from "./styles.module.css";

export default function TaskSearchBar() {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    dispatch(setSearchQuery(value));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Buscar tareas..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
