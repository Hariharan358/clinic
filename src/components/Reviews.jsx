import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'John Doe',
    rating: 5,
    comment: 'Excellent service! The staff was friendly and professional. I highly recommend this clinic.'
  },
  {
    name: 'Jane Smith',
    rating: 4,
    comment: 'Great experience overall. The dentist was very thorough and explained everything clearly.'
  },
  {
    name: 'Mike Johnson',
    rating: 5,
    comment: 'I was nervous about my procedure, but the team made me feel comfortable and at ease.'
  }
];

function Reviews() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Patient Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{review.name}</h2>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;

