import { StatusWithColor, } from "@/types";

export const statusColors: StatusWithColor = {
    backlog: {
        light: 'bg-backlog-light',
        main: 'bg-backlog-main',
        dark: 'bg-backlog-dark'
    },
    todo: {
        light: 'bg-todo-light',
        main: 'bg-todo-main',
        dark: 'bg-todo-dark'
    },
    inProgress: {
        light: 'bg-inprogress-light',
        main: 'bg-inprogress-main',
        dark: 'bg-inprogress-dark'
    },
    done: {
        light: 'bg-done-light',
        main: 'bg-done-main',
        dark: 'bg-done-dark'
    },
};

export const statusHColors: StatusWithColor = {
    backlog: {
        light: 'hover:bg-backlog-light',
        main: 'hover:bg-backlog-main',
        dark: 'hover:bg-backlog-dark'
    },
    todo: {
        light: 'hover:bg-todo-light',
        main: 'hover:bg-todo-main',
        dark: 'hover:bg-todo-dark'
    },
    inProgress: {
        light: 'hover:bg-inprogress-light',
        main: 'hover:bg-inprogress-main',
        dark: 'hover:bg-inprogress-dark'
    },
    done: {
        light: 'hover:bg-done-light',
        main: 'hover:bg-done-main',
        dark: 'hoverbg-done-dark'
    },
};

export const priorityColors = {
    low: 'bg-yellow-700',
    medium: 'bg-red-700',
    high: 'bg-indigo-700',
};

export const typeColors = {
    maintenance: 'bg-teal-700',
    feature: 'bg-blue-700',
    bug: 'bg-purple-700',
};

export const selectColors = {
    frontend: 'bg-yellow-500',
    backend: 'bg-red-500',
};
