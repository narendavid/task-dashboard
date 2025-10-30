import TaskForm from "@/features/tasks/components/task-form";
import TaskFilters from "@/features/tasks/components/task-filters";
import TaskStats from "@/features/tasks/components/task-stats";
import TaskList from "@/features/tasks/components/task-list";

export default function TasksPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        📋 Task Dashboard
      </h1>
      <TaskForm />
      <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
        <TaskFilters />
        <TaskStats />
      </div>
      <TaskList />
    </main>
  );
}
