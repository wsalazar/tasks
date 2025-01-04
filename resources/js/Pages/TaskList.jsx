import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Hyperlink from "@/Components/HyperLink.jsx";
import { usePage } from "@inertiajs/react";

export default function TaskList() {
    const user = usePage().props.auth.user;
    const [tasks, setTasks] = useState([]);
    const handleDelete = (e, taskId) => {
        e.preventDefault();
        axios.defaults.withCredentials = false;
        axios
            .delete(route("task.delete", taskId), {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((response) => {
                console.log("Task deleted successfully");
                fetch();
                toast.success("Task created deleted!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            })
            .catch((error) => {
                toast.error("Error deleting task", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                console.log("Error deleting task:", error);
            });
    };
    const fetch = () => {
        axios.defaults.withCredentials = false;
        axios
            .get(route("task.index", user.id), {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((response) => {
                const taskList = [response.data.data];
                taskList.forEach((task) => {
                    setTasks(task);
                });
            })
            .catch((error) => {
                console.log("Error creating task:", error);
            });
    };
    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="flex items-center justify-center mt-10">
            <table className="border border-black border-spacing-28">
                <thead>
                    <tr>
                        <th className="p-2 text-left border border-black">
                            Task Name
                        </th>
                        <th className="p-2 text-left border border-black">
                            Duration of Task
                        </th>
                        <th className="p-2 text-left border border-black">
                            Address of Task
                        </th>
                        <th className="p-2 text-left border border-black">
                            Point of Contact
                        </th>
                        <th className="p-2 text-left border border-black">
                            Phone Number
                        </th>
                        <th className="p-2 text-left border border-black">
                            Edit
                        </th>
                        <th className="p-2 text-left border border-black">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td className="p-2 text-left border border-black">
                                {task.task_name}
                            </td>
                            <td className="p-2 text-left border border-black">
                                {task.task_duration}
                            </td>
                            <td className="p-2 text-left border border-black">
                                {task.task_address}
                            </td>
                            <td className="p-2 text-left border border-black">
                                {task.point_of_contact}
                            </td>
                            <td className="p-2 text-left border border-black">
                                {task.contact_number}
                            </td>
                            <td className="p-2 text-left border border-black">
                                <a href={`/task/${task.id}/edit`}>Edit</a>
                            </td>
                            <td className="p-2 text-left border border-black">
                                <a
                                    onClick={(e) => handleDelete(e, task.id)}
                                    href="/dashboard"
                                >
                                    Delete
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
