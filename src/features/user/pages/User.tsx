import { memo, useEffect, useState } from "react";
import { Table, Tag, Space, Button } from "antd";

interface UserType {
    key: string;
    id: number;
    name: string;
    email: string;
    role: string;
    status: "active" | "inactive";
    avatar: string;
}

const User = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        setUsers([
            {
                key: "1",
                id: 1,
                name: "Usmonjon Karimov",
                email: "usmonjon.karimov@example.com",
                role: "Admin",
                status: "active",
                avatar: "https://i.pravatar.cc/150?img=1",
            },
            {
                key: "2",
                id: 2,
                name: "Lazizbek Sodiqov",
                email: "lazizbek.sodiqov@example.com",
                role: "User",
                status: "inactive",
                avatar: "https://i.pravatar.cc/150?img=2",
            },
            {
                key: "3",
                id: 3,
                name: "Aziza Mamatova",
                email: "aziza.mamatova@example.com",
                role: "Moderator",
                status: "active",
                avatar: "https://i.pravatar.cc/150?img=3",
            },
            {
                key: "4",
                id: 4,
                name: "Javohir Rahmonov",
                email: "javohir.rahmonov@example.com",
                role: "User",
                status: "active",
                avatar: "https://i.pravatar.cc/150?img=4",
            },
            {
                key: "5",
                id: 5,
                name: "Malika Akhmedova",
                email: "malika.akhmedova@example.com",
                role: "User",
                status: "inactive",
                avatar: "https://i.pravatar.cc/150?img=5",
            },
        ]);
    }, []);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 45,
            render: (id: number) => (
                <span className="font-mono font-semibold text-gray-700">{id}</span>
            ),
        },
        {
            title: "Avatar",
            dataIndex: "avatar",
            key: "avatar",
            width: 100,
            render: (avatar: string) => (
                <div className="flex justify-center">
                    <img
                        src={avatar}
                        alt="avatar"
                        className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
                    />
                </div>
            ),
        },
        {
            title: "Full Name",
            dataIndex: "name",
            key: "name",
            width: 180,
            render: (text: string) => (
                <span className="font-semibold text-gray-800">{text}</span>
            ),
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: 230,
            render: (text: string) => (
                <span className="text-gray-600">{text}</span>
            ),
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            width: 150,
            render: (role: string) => (
                <Tag
                    className="px-3 py-1 rounded-full text-sm"
                    color={role === "Admin" ? "red" : role === "Moderator" ? "blue" : "green"}
                >
                    {role}
                </Tag>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 150,
            render: (status: string) => (
                <Tag
                    className="px-3 py-1 rounded-full text-sm"
                    color={status === "active" ? "green" : "volcano"}
                >
                    {status.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: "Action",
            key: "action",
            width: 180,
            render: (_: any) => (
                <Space>
                    <Button type="link" className="text-blue-600 hover:text-blue-800">
                        Edit
                    </Button>
                    <Button type="link" danger className="hover:text-red-700">
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-2 w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">User Management</h2>
            <Table
                columns={columns}
                dataSource={users}
                bordered
                tableLayout="fixed"
                pagination={{ pageSize: 5 }}
                rowClassName={(_, index) =>
                    index % 2 === 0
                        ? "bg-white hover:bg-gray-50 transition-colors"
                        : "bg-gray-50 hover:bg-gray-100 transition-colors"
                }
            />
        </div>
    );
};

export default memo(User);
