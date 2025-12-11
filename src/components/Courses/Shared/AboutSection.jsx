import { CheckCircle } from 'lucide-react';

export default function AboutSection({ about }) {
    if (!about) return null;

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{about.title}</h2>
                    <div className="h-1 w-20 bg-orange-500 mb-6"></div>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        {about.content}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {about.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle className="text-orange-500" size={20} />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    {/* Replace with actual image or placeholder */}
                    <div className="bg-gray-200 rounded-lg h-96 w-full flex items-center justify-center">
                        <span className="text-gray-400">About Image Placeholder</span>
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg hidden md:block">
                        <div className="text-4xl font-bold">10+</div>
                        <div className="text-sm">Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
