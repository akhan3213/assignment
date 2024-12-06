import React from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const chartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Responsive Placeholder Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-3xl font-bold mt-2">$5,400</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">New Users</h2>
          <p className="text-3xl font-bold mt-2">1,250</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Orders</h2>
          <p className="text-3xl font-bold mt-2">320</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-3xl font-bold mt-2">$12,890</p>
        </div>
      </div>

      {/* Responsive Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Monthly Sales</h2>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={300}
          />
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Sales Trend</h2>
          <Chart
            options={{
              chart: {
                id: "line-chart",
              },
              xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              },
            }}
            series={[
              {
                name: "Sales",
                data: [10, 41, 35, 51, 49, 62, 69],
              },
            ]}
            type="line"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
