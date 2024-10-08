"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: 'Men', value: 60 },
  { name: 'Women', value: 40 },
]

const COLORS = ['#B79C8F', '#754C29']

const CustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="flex justify-center space-x-8 mt-4">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center">
          <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
          <span className="text-sm font-medium">{entry.value}</span>
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
              outerRadius="80%"
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