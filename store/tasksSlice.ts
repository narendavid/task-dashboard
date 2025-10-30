"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Task, Priority } from "@/features/tasks/types/task";

interface TaskState {
  list: Task[];
  filter: "all" | "completed" | "pending";
  searchQuery: string;
}

const initialState: TaskState = {
  list: [],
  filter: "all",
  searchQuery: "",
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
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    // Optional: preload tasks (e.g., for demo)
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.list = action.payload;
    },
  },
});

export const { addTask, toggleTask, deleteTask, setFilter, setSearchQuery, setTasks } =
  taskSlice.actions;

// Selectors
export const selectFilteredTasks = (state: { tasks: TaskState }) => {
  const { list, filter, searchQuery } = state.tasks;
  
  let filteredTasks = list;
  
  // Apply search filter
  if (searchQuery.trim()) {
    filteredTasks = filteredTasks.filter(task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  // Apply status filter
  if (filter === "completed") {
    filteredTasks = filteredTasks.filter(task => task.completed);
  } else if (filter === "pending") {
    filteredTasks = filteredTasks.filter(task => !task.completed);
  }
  
  return filteredTasks;
};

export default taskSlice.reducer;
