export default function ProjectsSection({ projects }) {
    if (!projects) return null;

    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Hands-on Projects</h2>
                    <div className="h-1 w-20 bg-orange-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Gain practical experience by working on real-world projects that simulate industry scenarios.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border-t-4 border-orange-500">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-2xl">
                                🚀
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
