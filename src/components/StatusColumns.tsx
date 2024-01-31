import { Task, Status } from "@/types";
import Card from "@/components/Card";
import { statusColors } from "@/helpers/colors";
import AddIcon from '@mui/icons-material/Add'; import Link from "next/link";
import db from "@/config/db";
import { getTasks } from "@/server/actions";



export default async function StatusColumns() {
    const tasks = await getTasks();

    const statusOrder: Status[] = ['backlog', 'todo', 'inProgress', 'done'];

    const groupedData: Record<Status, Task[]> = tasks.reduce((acc, obj) => {
        const { status } = obj;

        if (!acc[status]) {
            acc[status] = [] as Task[];
        }

        acc[status].push(obj);

        return acc;
    }, {} as Record<Status, Task[]>);

    const columns = statusOrder.map((status) => {
        if (!groupedData[status]) {
            return null;
        }

        return (
            <div key={status} className={`w-48 m-2 px-2 py-1 rounded ${statusColors[status].dark}`}>
                <div className="flex items-center py-1">
                    <h2 className={`p-1 rounded text-sm ${statusColors[status].main }`}>
                        {status}
                    </h2>
                    <span className="pl-2">
                        {groupedData[status].length}
                    </span>
                </div>
                <ul>
                    {groupedData[status].map((task, index) => (
                        <li key={index} className="py-2">
                            <Card task={task} />
                        </li>
                    ))}
                </ul>
                <div className="flex items-center mb-1">
                    <AddIcon />
                    <Link href="/new" className={`px-2 rounded text-sm ${statusColors[status].main}`}>
                        New
                    </Link>
                </div>
            </div>
        );
    });

    return <div className="flex">{columns}</div>;
}
