import { Button, Image, Modal, Space, Table, Tabs, Tag, Tooltip } from 'antd';
import { memo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCategory } from '../services/useCategory';
import { useProduct } from '../services/useProduct';
import ProductForm from '../components/ProductForm';

const Dashboard = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category") || "all";
    const navigate = useNavigate();

    const { getCategorys } = useCategory();
    const { data: categoryRes } = getCategorys();

    const { getProducts, deleteProduct } = useProduct();
    const { data: productRes, isLoading } = getProducts();

    const [open, setOpen] = useState(false);

    // backenddan keladigan productlar
    const allProducts = productRes?.data?.allProducts || [];

    // filter qilingan productlar
    const filteredProducts =
        category === "all"
            ? allProducts
            : allProducts.filter((p: any) => p.category?.name === category);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 50,
            render: (id: number) => (
                <span className="font-mono font-semibold text-gray-700">{id}</span>
            ),
        },
        {
            title: "Image",
            dataIndex: "images",
            key: "images",
            width: 100,
            render: (images: any[]) => (
                <div className="flex justify-center items-center">
                    {images?.length ? (
                        <Image
                            src={`https://api.errorchi.uz/product/image/${images[0]}`} // faqat birinchi rasmi
                            alt="product"
                            className="w-12 h-12 rounded-lg border object-contain border-gray-300 shadow-sm"
                        />
                    ) : (
                        <span>No image</span>
                    )}
                </div>
            ),
        },
        {
            title: "Product Name",
            dataIndex: "title",
            key: "title",
            width: 220,
            render: (_: any, record: any) => (
                <Tooltip
                    title={
                        <>
                            <div><b>Created by:</b> {record?.user?.fname || "Unknown"}</div>
                            <div><b>Email:</b> {record?.user?.email || "no email"}</div>
                        </>
                    }
                >
                    <span className="font-semibold text-gray-800 cursor-pointer">
                        {record.title}
                    </span>
                </Tooltip>
            ),
        },
        {
            title: "Category",
            dataIndex: ["category", "name"],
            key: "category",
            width: 160,
            render: (category: string) => (
                <Tag
                    className="px-3 py-1 rounded-full text-sm"
                    color={
                        category === "Shoes"
                            ? "blue"
                            : category === "Electronics"
                                ? "purple"
                                : "geekblue"
                    }
                >
                    {category}
                </Tag>
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            width: 150,
            render: (price: number) => (
                <span className="text-green-600 font-medium">{price.toLocaleString()} USD</span>
            ),
        },
        {
            title: "Stock",
            dataIndex: "stock",
            key: "stock",
            width: 100,
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
            width: 150,
            render: (brand: string) => brand || "-",
        },
        {
            title: "Action",
            key: "action",
            width: 180,
            render: (_: any, record: any) => (
                <Space>
                    <Button type="link" className="text-blue-600 hover:text-blue-800">
                        Edit
                    </Button>
                    <Button
                        type="link"
                        danger
                        className="hover:text-red-700"
                        onClick={() => deleteProduct.mutate({ id: record.id })}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Tabs
                activeKey={category}
                onChange={(key: any) => navigate(`?category=${key}`)}
                items={[
                    { key: "all", label: "All" },
                    ...(categoryRes?.data?.map((cat: any) => ({
                        key: cat.name,
                        label: cat.name.charAt(0).toUpperCase() + cat.name.slice(1),
                    })) || []),
                ]}
            />

            <Button className="mb-[12px]" type="primary" onClick={() => setOpen(true)}>
                Add Product
            </Button>

            <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
                <ProductForm setOpen={setOpen} />
            </Modal>

            <Table
                columns={columns}
                dataSource={filteredProducts}
                rowKey="id"
                bordered
                tableLayout="fixed"
                pagination={{ pageSize: 5 }}
                loading={isLoading}
                rowClassName={(_, index) =>
                    index % 2 === 0
                        ? "bg-white hover:bg-gray-50 transition-colors"
                        : "bg-gray-50 hover:bg-gray-100 transition-colors"
                }
            />
        </>
    );
};

export default memo(Dashboard);
