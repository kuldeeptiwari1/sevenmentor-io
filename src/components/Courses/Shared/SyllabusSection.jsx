"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

export default function SyllabusSection({ syllabus }) {
    const [openIndex, setOpenIndex] = useState(0);

    if (!syllabus) return null;

    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Syllabus</h2>
                    <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
                </div>

                <div className="space-y-4">
                    {syllabus.map((module, idx) => (
                        <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                            <button
                                onClick={() => setOpenIndex(op => op === idx ? -1 : idx)}
                                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-orange-100 p-2 rounded text-orange-600">
                                        <BookOpen size={20} />
                                    </div>
                                    <span className="text-lg font-semibold text-gray-800">{module.title}</span>
                                </div>
                                {openIndex === idx ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                            </button>

                            {openIndex === idx && (
                                <div className="p-6 pt-0 border-t border-gray-100 bg-gray-50/50">
                                    <ul className="space-y-2 mt-4 ml-12 list-disc text-gray-600">
                                        {module.topics.map((topic, tIdx) => (
                                            <li key={tIdx}>{topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition shadow">
                        Download Full Syllabus
                    </button>
                </div>
            </div>
        </section>
    );
}
