import { memo, useState } from "react";
import { Modal, Button, Form, Input, InputNumber } from "antd";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
};

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "iPhone 15", price: 1200, category: "Smartphone", stock: 15 },
    { id: 2, name: "MacBook Pro", price: 2500, category: "Laptop", stock: 8 },
    { id: 3, name: "AirPods Pro", price: 250, category: "Accessories", stock: 30 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form] = Form.useForm();

  const openModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      form.setFieldsValue(product);
    } else {
      setEditingProduct(null);
      form.resetFields();
    }
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const onFinish = (values: any) => {
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? { ...editingProduct, ...values } : p))
      );
    } else {
      setProducts((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...values,
        },
      ]);
    }
    handleCancel();
  };

  const deleteProduct = (id: number) =>
    setProducts((prev) => prev.filter((p) => p.id !== id));

  return (
    <div className="p-6 w-full">
      <div className="mb-4">
        <Button type="primary" onClick={() => openModal()}>
           Add
        </Button>
      </div>

      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3 border-b">ID</th>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Price</th>
            <th className="p-3 border-b">Category</th>
            <th className="p-3 border-b">Stock</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">{p.id}</td>
              <td className="p-3 border-b">{p.name}</td>
              <td className="p-3 border-b">${p.price}</td>
              <td className="p-3 border-b">{p.category}</td>
              <td className="p-3 border-b">{p.stock}</td>
              <td className="p-3 border-b flex gap-2">
                <Button type="default" onClick={() => openModal(p)}>
                  Update
                </Button>
                <Button danger onClick={() => deleteProduct(p.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        title={editingProduct ? "Update Product" : "Add Product"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ name: "", price: 0, category: "", stock: 0 }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter product name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter product price" }]}
          >
            <InputNumber className="w-full" min={0} />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please enter category" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Stock"
            name="stock"
            rules={[{ required: true, message: "Please enter stock count" }]}
          >
            <InputNumber className="w-full" min={0} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              {editingProduct ? "Update" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default memo(ProductPage);
