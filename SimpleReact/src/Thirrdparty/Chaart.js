import React from 'react';
import { BarChart, Bar, Pie, PieChart, Tooltip, XAxis, YAxis,LineChart, Legend, Line, CartesianGrid } from 'recharts';

const data = [
  {name: 'Facebook', value: 2000},
  {name: 'Instagram', value: 1000},
  {name: 'Twitter', value: 1550},
  {name: 'Whatsapp', value: 1100},
];

export default function Chaart() {
    return (
        <>
            <BarChart width={150} height={40} data={data}>
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
        <PieChart width={400} height={400}>
        <Pie data={data} isAnimationActive={false} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" label/>
        <Tooltip/>
        </PieChart> 

        <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
        </>
      
    );
  }