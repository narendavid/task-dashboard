"use client";

import { useAppDispatch, useAppSelector } from "@/features/tasks/hooks";
import { addTask, toggleTask } from "@/store/tasksSlice";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import type { Task } from "../../types/task";

interface Props {
  selected: Task | null;
  onClose: () => void;
}

export default function TaskDetailsDrawer({ selected, onClose }: Props) {
  const [local, setLocal] = useState<Task | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLocal(selected);
  }, [selected]);

  if (!local) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>
        <h2>Detalles de la tarea</h2>

        <label>Título</label>
        <input
          className={styles.input}
          value={local.title}
          onChange={(e) => setLocal({ ...local, title: e.target.value })}
        />

        <label>Prioridad</label>
        <select
          className={styles.select}
          value={local.priority}
          onChange={(e) =>
            setLocal({ ...local, priority: e.target.value as any })
          }
        >
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>

        <div className={styles.actions}>
          <button onClick={() => dispatch(toggleTask(local.id))}>
            {local.completed ? "Marcar pendiente" : "Marcar completada"}
          </button>
          <button className={styles.save} onClick={onClose}>
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}
