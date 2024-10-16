import { Head, Link } from '@inertiajs/react';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
export default function Welcome({ auth}) {

    return (
        <>
            <Head title="Tasks"/>
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div
                    className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <h3 className='text-center font-bold text-2xl'>Tasks</h3>
                        <header className="flex justify-center items-center py-10">
                            <nav className="px-4 ">
                                {auth.user ? (
                                    <>
                                        <Link
                                            href={route('dashboard')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Dashboard
                                        </Link>
                                        <Link
                                            href={route('tasks')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Tasks
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>
                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            v0.1
                        </footer>
                    </div>
                </div>
            </div>
            <main>
                <ToastContainer
                    position='top-center'/>
            </main>
        </>
    );
}
