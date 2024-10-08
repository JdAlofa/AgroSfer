"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { Calendar } from "lucide-react"

const ageGenderData = [
  { ageGroup: '[15 - 21[', Men: 35, Women: 82 },
  { ageGroup: '[22 - 28[', Men: 72, Women: 65 },
  { ageGroup: '[29 - 35[', Men: 5, Women: 14 },
  { ageGroup: '[36 - 42[', Men: 35, Women: 35 },
  { ageGroup: '[43 - 49[', Men: 82, Women: 7 },
  { ageGroup: '[50 - 56[', Men: 59, Women: 30 },
  { ageGroup: '[57 - 63[', Men: 80, Women: 95 },
  { ageGroup: '[64 - 70[', Men: 18, Women: 42 },
]

export default function AgeGenderDistribution() {
  return (
    <Card className="shadow-2xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Age and gender distribution</CardTitle>
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
      <CardContent className="pt-0">
        <div className="text-sm font-medium mb-2">
          <span className="inline-block w-3 h-3 rounded-full bg-[#B08968] mr-2"></span>
          Men
          <span className="inline-block w-3 h-3 rounded-full bg-[#754C29] ml-4 mr-2"></span>
          Women
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageGenderData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} />
              <XAxis 
                dataKey="ageGroup" 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                interval={0}
                tick={{ dy: 10 }}
              />
              <YAxis 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip />
              <Bar dataKey="Men" fill="#B08968" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Women" fill="#754C29" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}