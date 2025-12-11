export default function ToolsSection({ tools }) {
    if (!tools) return null;

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools Covered</h2>
                <div className="h-1 w-20 bg-orange-500 mx-auto mb-12"></div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-center">
                    {tools.map((tool, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3 p-4 hover:shadow-lg rounded-lg transition border border-transparent hover:border-gray-100">
                            {/* Placeholder for tool icon */}
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-400">
                                {/* {tool.icon} */} icon
                            </div>
                            <span className="font-semibold text-gray-700">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
