import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, LogOut } from "lucide-react";
import { Settings } from 'lucide-react';
import Profile from "../assets/logo_1.png";

const Chat = () => {
    return (
        <div className="flex h-screen bg-black text-white font-sans">
            {/* 1. Sidebar (Left Side) */}
            <div className="w-64 border-r border-gray-800 flex flex-col p-5">
                <div className="flex items-center gap-3 mb-10">
                    <img src={Profile} className="w-10 h-10 rounded-full" alt="User" />
                    <span className="font-bold">My Account</span>
                </div>

                <nav className="flex-1 flex flex-col gap-2">
                    <p className="text-gray-500 text-sm mb-4">CHATS</p>
                    <div className="p-3 bg-gray-900 rounded-md cursor-pointer hover:bg-gray-800 transition">
                        SathiyaPramod
                        <p className="text-gray-500 text-sm">I am using Chatapp</p>
                    </div>
                    <div className="p-3 rounded-md cursor-pointer hover:bg-gray-800 transition">
                        Azhagan Natrajan
                        <p className="text-gray-500 text-sm">I am using Chatapp</p>
                    </div>
                    <div className="p-3 rounded-md cursor-pointer hover:bg-gray-800 transition">
                        Saravana Perumal
                        <p className="text-gray-500 text-sm">I am using Chatapp</p>
                    </div>
                    <div className="p-3  rounded-md cursor-pointer hover:bg-gray-800 transition">
                        Kamalesh
                        <p className="text-gray-500 text-sm">I am using Chatapp</p>
                    </div>
                </nav>
                <Link to="/login" className="flex items-center gap-2 text-red-400 mt-auto p-2 hover:bg-red-900/20 rounded-md transition">
                    <LogOut size={18} />
                    <span>Logout</span>
                </Link>
                <Link to="/settings" className="flex items-center gap-2 text-white mt-auto p-2 hover:bg-red-900/20 rounded-md transition">
                    <Settings size={18} />
                    <span>settings</span>
                </Link>
            </div>

            {/* 2. Main Chat Area (Right Side) */}
            <div className="flex-1 flex flex-col items-center justify-center p-10 bg-[#0B0D11]">
                <div className="p-6 bg-gray-900 rounded-3xl mb-5 shadow-xl">
                    <MessageSquare size={50} className="text-[#34D4F4]" />
                </div>

                <h1 className="text-3xl font-bold mb-2">Welcome to TalkNest!</h1>
                <p className="text-gray-400 text-center max-w-sm">
                    Select a friend from the sidebar to start a conversation.
                </p>

                <button className="mt-8 px-6 py-2 bg-[#34D4F4] text-black font-bold rounded-lg hover:scale-105 transition">
                    Start Messaging
                </button>
            </div>
        </div>
    );
};

export default Chat;
