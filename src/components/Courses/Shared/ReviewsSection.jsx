import { Star } from 'lucide-react';

export default function ReviewsSection({ reviews }) {
    if (!reviews) return null;

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Reviews</h2>
                    <div className="h-1 w-20 bg-orange-500 mx-auto mb-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-gray-50 p-8 rounded-xl relative">
                            <div className="text-orange-500 text-4xl font-serif absolute top-4 right-6 opacity-30">"</div>
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm mb-6 italic">
                                "{review.comment}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                    <p className="text-xs text-gray-500">{review.course}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
