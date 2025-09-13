import { memo, useState, type FC } from "react";
import { Form, Input, InputNumber, Button, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useCategory } from "../services/useCategory";
import { useProduct } from "../services/useProduct";

interface props {
    setOpen: (word: boolean) => void;
}

const ProductForm:FC<props> = ({setOpen}) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<any[]>([]);
    const { getCategorys } = useCategory();
    const { data } = getCategorys();
    const { createProduct } = useProduct();

    const categories = data?.data || [];

    const handleChange = ({ fileList }: any) => setFileList(fileList);

    const onFinish = (values: any) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("stock", values.stock);
        formData.append("brand", values.brand || "");
        formData.append("categoryId", values.category);

        fileList.forEach((file: any) => {
            if (file.originFileObj) {
                formData.append("images", file.originFileObj);
            }
        });

        createProduct.mutate(formData, {
            onSuccess: () => {
                form.resetFields();
                setFileList([]);
                setOpen(false);
            },
        });
    };

    return (
        <div className="">
            <h2 className="text-[22px] font-semibold mb-4">Create Product</h2>
            <Form layout="vertical" form={form} onFinish={onFinish}>
                <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                    <Input placeholder="Enter product title" />
                </Form.Item>

                <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                    <Input.TextArea rows={3} placeholder="Enter product description" />
                </Form.Item>

                <Form.Item label="Price" name="price" rules={[{ required: true }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="Enter price" />
                </Form.Item>

                <Form.Item label="Stock" name="stock" rules={[{ required: true }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="Enter stock amount" />
                </Form.Item>

                <Form.Item label="Brand" name="brand">
                    <Input placeholder="Enter brand" />
                </Form.Item>

                <Form.Item label="Category" name="category" rules={[{ required: true }]}>
                    <Select placeholder="Select category" loading={!categories}>
                        {categories?.map((cat: any) => (
                            <Select.Option key={cat.id} value={cat.id}>
                                {cat.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item label="Images">
                    <Upload
                        listType="picture"
                        beforeUpload={() => false}
                        fileList={fileList}
                        onChange={handleChange}
                        multiple
                    >
                        <Button icon={<UploadOutlined />}>Upload Images</Button>
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={createProduct.isPending}
                        className="w-full"
                    >
                        Add Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default memo(ProductForm);
