"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { Props as LegendProps } from 'recharts/types/component/DefaultLegendContent';

const data = [
  { name: 'Men', value: 60 },
  { name: 'Women', value: 40 },
]

const COLORS = ['#B79C8F', '#754C29']

const CustomLegend: React.FC<LegendProps> = ({ payload }) => {
  if (!payload) return null;
  return (
    <ul className="flex justify-center space-x-12 mt-6">
      {payload.map((entry, index) => (
        <li key={`item-${index}`} className="flex items-center">
          <span className="w-5 h-5 rounded-full mr-3" style={{ backgroundColor: entry.color }}></span>
          <span className="text-lg font-medium">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default function GenderDistribution() {
  return (
    <div className="w-full h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Gender distribution</h2>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius="90%"
              startAngle={90}
              endAngle={450}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend content={CustomLegend} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
