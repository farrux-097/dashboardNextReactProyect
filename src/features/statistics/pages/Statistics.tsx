
const Statistics = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <span className="text-sm text-gray-500">Users</span>
          <span className="text-2xl font-bold text-blue-600 mt-2">1,245</span>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <span className="text-sm text-gray-500">Revenue</span>
          <span className="text-2xl font-bold text-green-600 mt-2">$8,540</span>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <span className="text-sm text-gray-500">Orders</span>
          <span className="text-2xl font-bold text-purple-600 mt-2">325</span>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <span className="text-sm text-gray-500">Growth</span>
          <span className="text-2xl font-bold text-red-600 mt-2">+12.4%</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Monthly Overview</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          Grafik uchun
        </div>
      </div>
    </div>
  );
};

export default Statistics;
