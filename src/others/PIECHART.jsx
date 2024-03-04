import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const PIECHART = ({ Doctors, Admins, Users }) => {
    // Sample data
    const data = [
        { name: 'Doctors', students: Doctors },
        { name: 'Users', students: Admins },
        { name: 'Admins', students: Users },
    ];

    // Define an array of colors to use for each item
    const colors = ['#0074D9', '#2ECC40', '#FF4136'];

    return (
        <PieChart width={800} height={700}>
            <Pie data={data} dataKey="students" outerRadius={250}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>
            <Legend  layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
    );
}

export default PIECHART;
