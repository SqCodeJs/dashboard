"use client";

import { Priority, TaskSelect, Status, TaskType } from "@/types";
import { Button, Dialog, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState } from "react";
import { addTask } from "@/server/actions";

export default function NewTask() {
    const priorityList = ['low', 'medium', 'high'];
    const statusList = ['backlog', 'todo', 'inProgress', 'done'];
    const typeList = ['maintenance', 'feature', 'bug'];
    const selectList = ['frontend', 'backend'];

    const [priority, setPriority] = useState<Priority>('low');
    const [status, setStatus] = useState<Status>('backlog');
    const [type, setType] = useState<TaskType>('maintenance');
    const [select, setSelect] = useState<TaskSelect>('frontend');

    return (
        <Dialog open={true}>
            <div className="w-full">
                <form action={addTask} className="flex flex-col p-4">
                    <TextField className="mb-2" id="standard-basic" label="Title" name="title" variant="standard" />
                    <FormControl fullWidth className="my-2 text-xs" sx={{ minWidth: 120 }} size="small">
                        <InputLabel id="priority-label">Priority</InputLabel>
                        <Select
                            labelId="priority-label"
                            id="priority"
                            value={priority}
                            label="Priority"
                            name="priority"
                            onChange={(e) => setPriority(e.target.value as Priority)}
                        >
                            {priorityList.map((item) => (
                                <MenuItem value={item} key={item}>
                                    <div>{item}</div>
                                </MenuItem>))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth className="my-2" sx={{ minWidth: 120 }} size="small">
                        <InputLabel id="status-label">Status</InputLabel>
                        <Select
                            labelId="status-label"
                            id="status"
                            value={status}
                            label="Status"
                            name="status"
                            onChange={(e) => setStatus(e.target.value as Status)}
                        >
                            {statusList.map((item) => (
                                <MenuItem value={item} key={item}>
                                    <div>{item}</div>
                                </MenuItem>))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth className="my-2" sx={{ minWidth: 120 }} size="small">
                        <InputLabel id="type-label">Type</InputLabel>
                        <Select
                            labelId="type-label"
                            id="type"
                            value={type}
                            label="Type"
                            name="type"
                            onChange={(e) => setType(e.target.value as TaskType)}
                        >
                            {typeList.map((item) => (<MenuItem value={item} key={item}>
                                <div>{item}</div>

                            </MenuItem>))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth className="my-2" sx={{ minWidth: 120 }} size="small">
                        <InputLabel id="select-label">Select</InputLabel>
                        <Select
                            labelId="select-label"
                            id="select"
                            value={select}
                            label="Select"
                            name="select_option"
                            onChange={(e) => setSelect(e.target.value as TaskSelect)}
                        >
                            {selectList.map((item) => (<MenuItem value={item} key={item}>
                                <div>{item}</div>

                            </MenuItem>))}
                        </Select>
                    </FormControl>
                    <TextareaAutosize name="description" className="p-2 border border-slate-400 rounded my-2 focus:border-blue-300" aria-label="minimum height" minRows={3} placeholder="Description" />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Dialog>
    );
}
