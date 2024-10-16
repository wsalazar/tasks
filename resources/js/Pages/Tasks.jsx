import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {useRef, useState} from "react";
import InputLabel from "@/Components/InputLabel.jsx";
import { useForm } from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { toast } from 'react-toastify'


import axios from "axios";

export default function Tasks({task} ) {
    const initialFormState =  task ? {
        task_name: task.task_name,
        task_duration: task.task_duration,
        task_address: task.task_address,
        point_of_contact: task.point_of_contact,
        contact_number: task.contact_number,
    }: {
        task_name: '',
        task_duration: '',
        task_address: '',
        point_of_contact: '',
        contact_number: '',
    };
    const { data, setData, post, errors, processing, isDirty } = useForm(initialFormState);


    // const [tasks, setTasks] = useState({});
    const taskName = useRef();
    const taskDuration = useRef();
    const taskAddress = useRef();
    const pointOfContact = useRef();
    const contactNumber = useRef();

    const getChangedState = () => {
        const changedState = {};
        for (const key in data) {
            if (data[key] !== initialFormState[key]) {
                changedState[key] = data[key];
            }
        }
        return changedState;
    }

    const onCancelClick = () => {
        window.location.href = route('dashboard')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newState = {};
        if (task) {
            newState = getChangedState();
        }
        try {
            axios.defaults.withCredentials = false;
            const uri = task ? route('task.update', task.id) : route('task.store')
            axios({
                method: task ? 'PUT' : 'POST',
                url: uri,
                data: task ? newState : {
                        task_name: data.task_name,
                        task_duration: data.task_duration,
                        task_address: data.task_address,
                        point_of_contact: data.point_of_contact,
                        contact_number: data.contact_number,
                    }
            })
                .then(function (response) {
                    if (task) {
                        window.location.href = route('dashboard')
                        return
                    }
                    setData({task_name: '',
                        task_duration: '',
                        task_address: '',
                        point_of_contact: '',
                        contact_number: '',})
                    toast.success('Task created successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                });
        }catch (error) {
            console.error('Error submitting form:', error);
        }
    }
    return (
        <AuthenticatedLayout>
            <Head title="Create/Edit Tasks"/>
            <div className='flex items-center justify-center mt-10'>

                <section className='max-w-xl'>
                    <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                        <div className="justify-center items-center text-center">
                            <div className="flex">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="mt-10 ">
                                        <div className="sm:col-span-3">
                                            <InputLabel
                                                htmlFor="task_name"
                                                value="Task Name"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            />
                                            <div className="mt-2">
                                                <TextInput
                                                    id="task_name"
                                                    ref={taskName}
                                                    value={data.task_name}
                                                    onChange={(e) =>
                                                        setData('task_name', e.target.value)
                                                    }
                                                    type="text"
                                                    className="block w-full md:w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    autoComplete="task_name"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <InputLabel
                                                htmlFor="task_duration"
                                                value="Task Duration"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            />
                                            <div className="mt-2">
                                                <TextInput
                                                    id="task_duration"
                                                    ref={taskDuration}
                                                    value={data.task_duration}
                                                    onChange={(e) =>
                                                        setData('task_duration', e.target.value)
                                                    }
                                                    min="0"
                                                    type="number"
                                                    className="block w-full md:w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    autoComplete="task_name"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <InputLabel
                                                htmlFor="task_address"
                                                value="Task Address"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            />
                                            <div className="mt-2">
                                                <TextInput
                                                    id="task_address"
                                                    ref={taskAddress}
                                                    value={data.task_address}
                                                    onChange={(e) =>
                                                        setData('task_address', e.target.value)
                                                    }
                                                    type="text"
                                                    className="block w-full md:w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <InputLabel
                                                htmlFor="point_of_contact"
                                                value="Point of Contact"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            />
                                            <div className="mt-2">
                                                <TextInput
                                                    id="point_of_contact"
                                                    ref={pointOfContact}
                                                    value={data.point_of_contact}
                                                    onChange={(e) =>
                                                        setData('point_of_contact', e.target.value)
                                                    }
                                                    type="text"
                                                    className="block w-full md:w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2 sm:col-start-1">
                                            <InputLabel
                                                htmlFor="contact_number"
                                                value="Contact Phone Number"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            />
                                            <div className="mt-2">
                                                <TextInput
                                                    id="contact_number"
                                                    ref={contactNumber}
                                                    value={data.contact_number}
                                                    onChange={(e) =>
                                                        setData('contact_number', e.target.value)
                                                    }
                                                    type="text"
                                                    className="block w-full md:w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-center gap-x-6">
                            <PrimaryButton disabled={processing} onClick={() => onCancelClick()}>Cancel</PrimaryButton>
                            <PrimaryButton disabled={processing}>{task ? 'Update' : 'Save'}</PrimaryButton>
                        </div>
                    </form>
                </section>
            </div>
        </AuthenticatedLayout>
);
}

