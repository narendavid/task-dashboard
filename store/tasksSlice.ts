"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Task, Priority } from "@/features/tasks/types/task";

interface TaskState {
  list: Task[];
  filter: "all" | "completed" | "pending";
}

const initialState: TaskState = {
  list: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ title: string; priority: Priority }>
    ) => {
      const newTask: Task = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        priority: action.payload.priority,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      state.list.unshift(newTask);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const t = state.list.find((x) => x.id === action.payload);
      if (t) t.completed = !t.completed;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((x) => x.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<TaskState["filter"]>) => {
      state.filter = action.payload;
    },
    // Optional: preload tasks (e.g., for demo)
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.list = action.payload;
    },
  },
});

export const { addTask, toggleTask, deleteTask, setFilter, setTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
