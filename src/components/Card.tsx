import { statusColors, priorityColors, typeColors, selectColors } from "@/helpers/colors";
import { getUserByTaskId } from "@/server/actions";
import { Task } from "@/types";
import AssignmentIcon from '@mui/icons-material/Assignment';

interface CardProps {
    task: Task;
}

export default async function Card({ task }: CardProps) {
    const { id, title, status, priority, type, select_option } = task;
    const user = await getUserByTaskId(id);

    return (
        <div className={`flex flex-col items-start  p-2 rounded ${statusColors[status].main} hover:${statusColors[status].light}`}>
            <div className="flex py-3 w-full">
                <AssignmentIcon className="text-md text-slate-200" />
                <span className="pl-2 text-sm text-slate-200">{title}</span>
            </div>
            <div className="flex items-center">
                <span className="mr-2 bg-zinc-900 border-slate-600 text-slate-600 text-xs border rounded-full w-6 h-6 flex justify-center items-center">{user?.username.charAt(0).toUpperCase()}</span>
                <span className="text-xs my-1 py-1">{user?.username}</span>
            </div>
            <div className="flex flex-wrap gap-2">
                <span className={`text-xs px-2 py-1 ${priorityColors[priority]} rounded`}>{priority}</span>
                <span className={`text-xs px-2 py-1 ${typeColors[type]} rounded`}>{type}</span>
                <span className={`text-xs px-2 py-1 ${selectColors[select_option]} rounded`}>{select_option}</span>
            </div>
        </div>
    );

}