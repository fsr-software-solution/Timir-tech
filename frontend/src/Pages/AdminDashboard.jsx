import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [messagesPerPage, setMessagesPerPage] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMessages = async () => {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                navigate('/admin/login');
                return;
            }

            try {
                const response = await fetch('https://timir-tech-back.vercel.app/api/messages', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setMessages(data);
                } else {
                    if (response.status === 401) {
                        localStorage.removeItem('adminToken');
                        navigate('/admin/login');
                    }
                    setError('Failed to fetch messages');
                }
            } catch (err) {
                setError('Could not connect to server');
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, [navigate]);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this message?')) return;

        const token = localStorage.getItem('adminToken');
        try {
            const response = await fetch(`https://timir-tech-back.vercel.app/api/messages/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                setMessages(messages.filter(msg => msg._id !== id));
            } else {
                alert('Failed to delete message');
            }
        } catch (err) {
            alert('Error deleting message');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminInfo');
        navigate('/admin/login');
    };

    const indexOfLastMessage = currentPage * messagesPerPage;
    const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
    const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);
    const totalPages = Math.ceil(messages.length / messagesPerPage);

    if (loading) return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
            <div className="text-primary animate-pulse text-xl">Loading messages...</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-950 text-on-surface p-6 md:p-12 pt-28 md:pt-36">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="headline text-4xl font-bold text-gradient mb-2">Message Inbox</h1>
                        <p className="opacity-60">Manage client inquiries and project requests</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 text-sm font-medium"
                    >
                        <span className="material-symbols-outlined text-sm">logout</span>
                        Sign Out
                    </button>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-6 rounded-3xl text-center">
                        {error}
                    </div>
                )}

                {!error && messages.length === 0 ? (
                    <div className="glass-card p-20 rounded-[3rem] border-primary/10 text-center space-y-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                            <span className="material-symbols-outlined text-primary text-4xl">inbox</span>
                        </div>
                        <h3 className="text-xl font-bold opacity-60">No messages yet</h3>
                        <p className="text-sm opacity-40 max-w-xs mx-auto">When clients fill out the contact form, their inquiries will appear here.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {currentMessages.map((msg) => (
                            <div key={msg._id} className="glass-card p-8 rounded-[2.5rem] border-primary/5 hover:border-primary/20 transition-all group relative overflow-hidden">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div className="space-y-4 flex-1">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20">
                                                {msg.projectType}
                                            </span>
                                            <span className="text-[10px] opacity-40 font-bold uppercase tracking-widest">
                                                {new Date(msg.createdAt).toLocaleDateString()} at {new Date(msg.createdAt).toLocaleTimeString()}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1">{msg.name}</h3>
                                            <a href={`mailto:${msg.email}`} className="text-primary/80 hover:text-primary text-sm flex items-center gap-2">
                                                <span className="material-symbols-outlined text-xs">mail</span>
                                                {msg.email}
                                            </a>
                                        </div>
                                        <p className="text-on-surface-variant leading-relaxed opacity-80 whitespace-pre-wrap">
                                            {msg.message}
                                        </p>
                                    </div>
                                    <div className="flex md:flex-col justify-end gap-3 shrink-0">
                                        <button
                                            onClick={() => handleDelete(msg._id)}
                                            className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center group-hover:border-red-500/50"
                                            title="Delete Message"
                                        >
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 border-t border-white/5 pt-6">
                            <div className="flex items-center gap-2">
                                <span className="text-sm opacity-60">Messages per page:</span>
                                <select
                                    value={messagesPerPage}
                                    onChange={(e) => {
                                        setMessagesPerPage(Number(e.target.value));
                                        setCurrentPage(1);
                                    }}
                                    className="bg-slate-900 border border-white/10 rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-primary/50 text-white cursor-pointer"
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                </select>
                            </div>

                            {totalPages > 1 && (
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 disabled:opacity-50 transition-all font-medium text-sm"
                                    >
                                        Previous
                                    </button>
                                    <span className="text-sm opacity-60">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 disabled:opacity-50 transition-all font-medium text-sm"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
