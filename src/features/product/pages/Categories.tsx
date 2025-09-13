import { memo, useState } from "react";
import { Button, Form, Input, Modal, Popconfirm, Space, Table, Tooltip } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useCategory } from "../services/useCategory";

const Categories = () => {
    const { getCategorys, createCategory, updateCategory, deleteCategory } = useCategory();
    const { data, isLoading } = getCategorys();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editing, setEditing] = useState<any>(null);
    const [form] = Form.useForm();

    const handleCreate = () => {
        setEditing(null);
        form.resetFields();
        setIsModalOpen(true);
    };

    const handleEdit = (item: any) => {
        setEditing(item);
        form.setFieldsValue({ name: item.name });
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        form.validateFields().then((values) => {
            if (editing) {
                updateCategory.mutate(
                    { id: editing.id, ...values },
                    {
                        onSuccess: () => {
                            setIsModalOpen(false);
                        },
                    }
                );
            } else {
                createCategory.mutate(values, {
                    onSuccess: () => {
                        setIsModalOpen(false);
                    },
                });
            }
        });
    };

    const handleDelete = (id: string) => {
        deleteCategory.mutate({ id });
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            width: 80,
            align: "center" as const,
        },
        {
            title: "Category Name",
            dataIndex: "name",
            render: (_: any, record: any) => (
                <Tooltip
                    title={
                        <>
                            <div><b>Foydalanuvchi:</b> {record?.user?.fname || "Unknown"}</div>
                            <div><b>Email:</b> {record?.user?.email || "no email"}</div>
                        </>
                    }
                >
                    <span className="font-semibold cursor-pointer">
                        {record?.name}
                    </span>
                </Tooltip>
            ),
        },
        {
            title: "Action",
            key: "action",
            width: 200,
            render: (_: any, record: any) => (
                <Space>
                    <Button
                        icon={<EditOutlined />}
                        type="primary"
                        ghost
                        onClick={() => handleEdit(record)}
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Are you sure delete this category?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <Button danger icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-3 bg-white rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Category Management</h2>
                <Button type="primary" icon={<PlusOutlined />} onClick={handleCreate}>
                    Add Category
                </Button>
            </div>

            <Table
                columns={columns}
                dataSource={data?.data || []}
                rowKey="id"
                loading={isLoading}
                pagination={{ pageSize: 5 }}
                bordered
                className="rounded-lg overflow-hidden"
            />

            <Modal
                title={editing ? "Edit Category" : "Add Category"}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={handleSubmit}
                okText="Save"
                cancelText="Cancel"
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Category Name"
                        name="name"
                        rules={[{ required: true, message: "Please input category name!" }]}
                    >
                        <Input placeholder="Enter category name" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default memo(Categories);
