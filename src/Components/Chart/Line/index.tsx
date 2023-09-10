import { LineChart } from 'recharts';
import { SalesState } from '../../../Model/Product';
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
} from 'recharts';
import React from 'react';

interface LineProps {
  data: SalesState;
}

const LineCharts: React.FC<LineProps> = ({ data }) => {
  return (
    <>
      <h1 className="capitalize text-4xl">line chart</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: 'Year', position: 'bottom' }} />
          <YAxis
            label={{ value: 'Sales', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Legend verticalAlign="top" align="center" />
          <Line
            type="monotone"
            dataKey="shirt"
            name="Shirt Sales"
            stroke="#17bfd9"
            dot={{ stroke: 'red', strokeWidth: 2, r: 1 }}
            label={{ fill: 'black', fontSize: 10 }}
            strokeDasharray="4 2"
          />
          <Line
            type="monotone"
            dataKey="pants"
            name="Pants Sales"
            stroke="#ff7300"
            dot={{ stroke: 'blue', strokeWidth: 2, r: 1 }}
            label={{ fill: 'black', fontSize: 10 }}
            strokeDasharray="4 2"
          />
          <Line
            type="monotone"
            dataKey="shoe"
            name="Shoe Sales"
            stroke="#ffc658"
            dot={{ stroke: 'green', strokeWidth: 2, r: 1 }}
            label={{ fill: 'black', fontSize: 10 }}
            strokeDasharray="4 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineCharts;
