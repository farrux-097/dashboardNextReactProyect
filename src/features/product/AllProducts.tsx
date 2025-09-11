import { memo } from 'react';
const products = [
  { id: 1,  name: "iPhone 15",   price: 1200, category: "Smartphone",  stock: 15 },
  { id: 2,  name: "iPhone 15",   price: 1200, category: "Smartphone",  stock: 15 },
  { id: 3,  name: "iPhone 15",   price: 1200, category: "Smartphone",  stock: 15 },
  { id: 4,  name: "iPhone 15",   price: 1200, category: "Smartphone",  stock: 15 },
  { id: 5,  name: "iPhone 15",   price: 1200, category: "Smartphone",  stock: 15 },

  { id: 6,  name: "MacBook Pro", price: 2500, category: "Laptop",      stock: 8  },
  { id: 7,  name: "MacBook Pro", price: 2500, category: "Laptop",      stock: 8  },
  { id: 8,  name: "MacBook Pro", price: 2500, category: "Laptop",      stock: 8  },
  { id: 9,  name: "MacBook Pro", price: 2500, category: "Laptop",      stock: 8  },
  { id: 10, name: "MacBook Pro", price: 2500, category: "Laptop",      stock: 8  },
  { id: 11, name: "MacBook Pro", price: 2500, category: "Laptop",      stock: 8  },
  { id: 12, name: "MacBook Pro", price: 2500, category: "Laptop",      stock: 8  },

  { id: 13, name: "AirPods Pro", price: 250,  category: "Accessories", stock: 30 },
  { id: 14, name: "AirPods Pro", price: 250,  category: "Accessories", stock: 30 },
  { id: 15, name: "AirPods Pro", price: 250,  category: "Accessories", stock: 30 },
  { id: 16, name: "AirPods Pro", price: 250,  category: "Accessories", stock: 30 },
];


const AllProducts = () => {
  return (
 <div className="p-6 w-full ">
      <h2 className="text-2xl font-bold mb-4">Mahsulotlar</h2>
      <div className="overflow-x-auto rounded-xl shadow-xl">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border-b ">ID</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Price</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-300">
                <td className="p-3 border-b">{product.id}</td>
                <td className="p-3 border-b">{product.name}</td>
                <td className="p-3 border-b">${product.price}</td>
                <td className="p-3 border-b">{product.category}</td>
                <td className="p-3 border-b">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(AllProducts);