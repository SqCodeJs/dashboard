"use server";
import db from '@/config/db';
import { Task, User } from '@/types';
import { RowDataPacket } from 'mysql2';
import { redirect } from 'next/navigation';

export async function addTask(data: FormData) {
    let taskData: Record<string, FormDataEntryValue> = {};

    for (const [key, value] of data) {
        taskData[key as string] = value;
    }

    const { title, status, priority, type, select_option, description } = taskData;
    const assigneeEmail = 'tomek.bilka@example.com';

    const [userInfo] = await db.query<RowDataPacket[]>('SELECT id FROM Users WHERE email = ?', [assigneeEmail]);
    const assignee_id: number = userInfo[0].id;

    await db.query(
        'INSERT INTO Tasks (title, assignee_id, status, priority, createdAt, type, select_option, description) VALUES (?, ?, ?, ?, NOW(), ?, ?, ?)',
        [title, assignee_id, status, priority, type, select_option, description]
    );

    redirect("/");
};

export async function getTasks() {
    try {
        const query = 'SELECT * FROM Tasks';
        const response = await db.query(query);
        return response[0] as Task[];

    } catch (error) {
        throw new Error('failed to fetch data from db');
    }
};

export async function getUserByTaskId(taskId: number) {
    try {
        const query = `
        SELECT Users.*
        FROM Users
        JOIN Tasks ON Users.id = Tasks.assignee_id
        WHERE Tasks.id = ?;
      `;

        const [userData] = await db.query<RowDataPacket[]>(query, [taskId]);

        if (userData.length > 0) {
            console.log(userData,"elo")
            const user = userData[0] as User;
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.error('eror',error);
        
    }
}
