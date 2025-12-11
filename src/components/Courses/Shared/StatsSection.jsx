export default function StatsSection({ stats }) {
    if (!stats) return null;

    return (
        <section className="bg-white py-12 px-4 shadow-md relative z-10 -mt-10 mx-4 lg:mx-auto max-w-7xl rounded-lg">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-orange-500 text-white p-6 rounded text-center hover:shadow-xl transition">
                            <div className="text-3xl font-bold mb-2">{stat.number}</div>
                            <div className="h-1 w-12 bg-blue-400 mx-auto mb-2"></div>
                            <p className="font-semibold text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
