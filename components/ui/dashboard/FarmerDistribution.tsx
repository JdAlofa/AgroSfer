"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, LabelList, Line, CartesianGrid } from "recharts"
import { Calendar } from "lucide-react"

const farmerDistributionData = [
  { city: "Agoué", count: 80 },
  { city: "Aklahoué", count: 695 },
  { city: "Zè", count: 452 },
  { city: "Allada", count: 512 },
  { city: "Kpobè", count: 480 },
  { city: "Tchivi", count: 720 },
  { city: "Bimbèrèkè", count: 72 },
  { city: "Tchaorou", count: 455 },
  { city: "Bohicon", count: 1580 },
  { city: "Tanvèdji", count: 25 },
]

export default function FarmerDistribution() {
  const maxCount = Math.max(...farmerDistributionData.map(item => item.count))

  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Farmer distribution over cities</CardTitle>
        <button 
          className="flex items-center text-sm bg-gray-100 rounded-md p-2 hover:bg-gray-200 transition-colors duration-200"
          onClick={() => {
            console.log('Open date selector');
          }}
        >
          <span className="text-[#754C29] mr-2">03/2021 - 04/2021</span>
          <Calendar className="h-4 w-4 text-[#754C29]" />
        </button>
      </CardHeader>
      <CardContent className="flex-grow p-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={farmerDistributionData} 
            layout="vertical" 
            margin={{ top: 20, right: 40, left: 80, bottom: 20 }}
          >
            <XAxis type="number" domain={[0, maxCount * 1.05]} hide />
            <YAxis 
              dataKey="city" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              tick={false}
              width={10}
            />
            <Tooltip />
            <CartesianGrid horizontal={false} vertical={true} />
            <Bar dataKey="count" fill="#D2B48C" barSize={20}>
              <LabelList 
                dataKey="count" 
                position="left" 
                fill="#754C29" 
                formatter={(value: number | string) => `${value}`} 
                style={{ fontWeight: 'bold' }}
                offset={10}
              />
              <LabelList 
                dataKey="city" 
                position="right" 
                fill="#754C29" 
                formatter={(value: number | string) => `${value}`} 
                style={{ fontWeight: 'bold' }}
              />
            </Bar>
            <Line 
              type="linear" 
              dataKey="count" 
              stroke="#754C29" 
              strokeWidth={2} 
              dot={false} 
              activeDot={false} 
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
