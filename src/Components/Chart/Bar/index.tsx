import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { SalesState } from '../../../Model/Product';
import React from 'react';

interface BarProps {
  data: SalesState;
}

const BarChartComponent: React.FC<BarProps> = ({ data }) => {
  return (
    <>
      <h1 className="capitalize text-4xl">bar chart</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: 'Year', position: 'bottom' }} />
          <YAxis
            label={{ value: 'Sales', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Legend verticalAlign="top" align="center" />
          <Bar
            dataKey="shirt"
            name="Shirt Sales"
            fill="#17bfd9"
            label={{ fill: 'black', fontSize: 10 }}
          />
          <Bar
            dataKey="pants"
            name="Pants Sales"
            fill="#ff7300"
            label={{ fill: 'black', fontSize: 10 }}
          />
          <Bar
            dataKey="shoe"
            name="Shoe Sales"
            fill="#ffc658"
            label={{ fill: 'black', fontSize: 10 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartComponent;
