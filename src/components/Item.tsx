import { priorityColors, statusColors } from '@/helpers/colors';
import { getUserByTaskId } from '@/server/actions';
import { Task } from '@/types/index';

export default async function Item({ task }: { task: Task; }) {
    const { id, title, status, assignee_id, priority, createdAt } = task;

    const user = await getUserByTaskId(id);

    const formatDate = (timestamp: number) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(timestamp).toLocaleString('en-US', options);
    };

    return (
        <tr className='text-sm'>
            <td className='border p-2'>{title}</td>
            <td className='border p-2'>
                <span className={`text-xs text-slate-100 inline-block p-2 rounded ${statusColors[status].dark}`}>
                    {status}
                </span>
            </td>
            <td className='border p-2'>
                <div className="flex items-center">
                    <span className="mr-2 bg-zinc-900 border-slate-600 text-slate-600 text-xs border rounded-full w-6 h-6 flex justify-center items-center">{user?.username.charAt(0).toUpperCase()}</span>
                    <span className="text-xs my-1 py-1">{user?.username}</span>
                </div></td>
            <td className={`border p-2`}>
                <span className={`text-xs text-slate-100 inline-block p-2 rounded ${priorityColors[priority]}`}>
                    {priority}
                </span>
            </td>
            <td className='border p-2'>{formatDate(createdAt)}</td>
        </tr>
    );
} 