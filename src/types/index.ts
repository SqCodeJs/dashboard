
export type Status = 'backlog' | 'todo' | 'inProgress' | 'done';
export type Priority = 'low' | 'medium' | "high";
export type TaskType = 'maintenance' | 'feature' | 'bug';
export type TaskSelect = 'frontend' | 'backend';

export interface Color {
    light: string,
    main: string,
    dark: string
};

export interface Task {
    id: number;
    title: string;
    assignee_id: number;
    status: Status;
    priority: Priority;
    createdAt: number;
    type: TaskType;
    select_option: TaskSelect;
    description: string;
}

export type StatusWithColor = {
    [key in Status]: Color;
  };

export interface User {
    id: number;
    username: string;
    email: string;
  }