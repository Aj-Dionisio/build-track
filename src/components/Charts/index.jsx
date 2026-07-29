import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import Styles from'./styles.module.css'


function Charts() {

    const data = [
        { mes: "Jan", produtividade: 20 },
        { mes: "Fev", produtividade: 35 },
        { mes: "Mar", produtividade: 45 },
        { mes: "Abr", produtividade: 58 },
        { mes: "Mai", produtividade: 70 },
        { mes: "Jun", produtividade: 87 },
        { mes: "Jul", produtividade: 89 },
        { mes: "Ago", produtividade: 92 },
        { mes: "Set", produtividade: 95 },
        { mes: "Out", produtividade: 98 },
        { mes: "Nov", produtividade: 100 },
        { mes: "Dez", produtividade: 100 },
    ];

    return (

        <ResponsiveContainer className={Styles.chartContainer} width="100%" height={900}>

            <LineChart data={data}>

                <CartesianGrid stroke='#334155' strokeDasharray="3 3" />

                <XAxis dataKey="mes" tick={{ fill: '#94A3B8', fontSize: 12 }} axisLine={false} tickLine={false} />

                <YAxis tick={{ fill: '#94A3B8', fontSize: 12 }} axisLine={false} tickLine={false} />

                { <Tooltip
                    contentStyle={{
                        fontSize: '20px',
                        borderRadius: '10px',
                        backgroundColor: '#1E293B',
                    }}
                    labelStyle={{
                        fontSize: '20px'
                    }}
                    itemStyle={{
                        fontSize: '20px'
                    }}
                /> }

                <Line
                    type='monotone' dataKey='produtividade' stroke='#3B82F6' strokeWidth={3} dot={{ fill: '#3B82F6', r: 4}} activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }}
                />

            </LineChart>

        </ResponsiveContainer>

    )

}

export default Charts;