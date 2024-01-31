import Item from "@/components/Item";
import { getTasks } from "@/server/actions";
import { Task } from "@/types";

export default async function Tasks() {
    const tasks: Task[] = await getTasks();

    return (
        <div className="container ml-64 mr-8 overflow-auto h-96">
            <table className=" w-full text-slate-800">
                <thead>
                    <tr className="sticky top-[-1px] bg-gray-300">
                        <th className="border p-3">Name</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Assignee</th>
                        <th className="border p-2">Priority</th>
                        <th className="border p-2">Date</th>
                    </tr>
                </thead>
                <tbody className="bg-slate-100">
                    {tasks.map((task) => (
                        <Item task={task} key={task.id} />

                    ))}
                </tbody>
            </table>
        </div>
    );
}
