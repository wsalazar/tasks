import axios from "axios";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import { Link } from 'react-router-dom';
import Hyperlink from "@/Components/HyperLink.jsx";


export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const handleDelete = (e, taskId) => {
        e.preventDefault();
        axios.defaults.withCredentials = false;
        axios.delete(route('task.delete', taskId), {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => {
            console.log('Task deleted successfully');
            fetch();
            toast.success('Task created deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }).catch(error => {
            toast.error('Error deleting task', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
            console.log('Error deleting task:', error);
        });
    }
    const fetch = () => {
        axios.defaults.withCredentials = false;
        axios.get(route('task.index'), {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => {
            const taskList = [response.data.data];
            taskList.forEach(task => {
                setTasks(task);
            });
        }).catch(error => {
            console.log('Error creating task:', error);
        });
    }
    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className='flex items-center justify-center mt-10'>
            <table className='border border-spacing-28 border-black'>
                <thead>
                <tr>
                    <th className='border border-black p-2 text-left'>Task Name</th>
                    <th className='border border-black p-2 text-left'>Duration of Task</th>
                    <th className='border border-black p-2 text-left'>Address of Task</th>
                    <th className='border border-black p-2 text-left'>Point of Contact</th>
                    <th className='border border-black p-2 text-left'>Phone Number</th>
                    <th className='border border-black p-2 text-left'>Edit</th>
                    <th className='border border-black p-2 text-left'>Delete</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <td className='border border-black p-2 text-left'>{task.task_name}</td>
                        <td className='border border-black p-2 text-left'>{task.task_duration}</td>
                        <td className='border border-black p-2 text-left'>{task.task_address}</td>
                        <td className='border border-black p-2 text-left'>{task.point_of_contact}</td>
                        <td className='border border-black p-2 text-left'>{task.contact_number}</td>
                        <td className='border border-black p-2 text-left'><a href={`/task/${task.id}/edit`}>Edit</a></td>
                        <td className='border border-black p-2 text-left'>
                            <a
                                onClick={(e) => handleDelete(e, task.id)}
                                href="/dashboard">Delete
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )

}
