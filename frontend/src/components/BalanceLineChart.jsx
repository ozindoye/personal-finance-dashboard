import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid }
    from 'recharts'

function BalanceLineChart({ transactions }) {
    if (transactions.length === 0) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500">
                No data to chart yet.
            </div>
        )
    }

    const sorted = [...transactions].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    )

    let runningBalance = 0
    const data = sorted.map((t) => {
        runningBalance += t.type === 'INCOME' ? t.amount : -t.amount
        return {
            date: t.date,
            balance: runningBalance,
        }
    })

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Balance Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip formatter={(value) => `£${value.toFixed(2)}`} />
                    <Line
                        type="monotone"
                        dataKey="balance"
                        stroke="#2563eb"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BalanceLineChart