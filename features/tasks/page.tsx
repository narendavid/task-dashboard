"use client";

import { useState } from "react";
import TaskForm from "./components/task-form";
import TaskBoard from "./components/task-board";
import TaskDetailsDrawer from "./components/task-drawer";
import TaskSearchBar from "./components/task-search";
import TaskFilters from "./components/task-filters";
import TaskStats from "./components/task-stats";
import type { Task } from "./types/task";

export default function TasksPage() {
  const [selected, setSelected] = useState<Task | null>(null);

  return (
    <main style={{ padding: "2rem", maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>📋 Task Dashboard Avanzado</h1>
      <TaskForm />
      <TaskSearchBar />
      <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
        <TaskFilters />
        <TaskStats />
      </div>

      <TaskBoard />
      <TaskDetailsDrawer selected={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
