import React, { useState } from 'react';
import { Calendar, MessageSquare, Star, Check, X, Send } from 'lucide-react';

function AdminPage() {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'John Doe', date: '2023-05-20', time: '10:00 AM', status: 'pending' },
    { id: 2, name: 'Jane Smith', date: '2023-05-21', time: '2:00 PM', status: 'pending' },
    { id: 3, name: 'Mike Johnson', date: '2023-05-22', time: '11:30 AM', status: 'pending' },
  ]);

  const [queries, setQueries] = useState([
    { id: 1, name: 'Alice Brown', email: 'alice@example.com', message: 'What are your office hours?', status: 'unanswered' },
    { id: 2, name: 'Bob Wilson', email: 'bob@example.com', message: 'Do you offer teeth whitening services?', status: 'unanswered' },
  ]);

  const [reviews, setReviews] = useState([
    { id: 1, name: 'Sarah Lee', rating: 5, comment: 'Great service!', status: 'pending' },
    { id: 2, name: 'Tom Davis', rating: 4, comment: 'Very professional staff.', status: 'pending' },
  ]);

  const handleAppointmentAction = (id, action) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: action } : app
    ));
  };

  const handleQueryReply = (id, reply) => {
    setQueries(queries.map(query => 
      query.id === id ? { ...query, status: 'answered', reply } : query
    ));
  };

  const handleReviewAction = (id, action) => {
    setReviews(reviews.map(review => 
      review.id === id ? { ...review, status: action } : review
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Calendar className="mr-2" /> Appointments
        </h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <li key={appointment.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">{appointment.name}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {appointment.status}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {appointment.date} at {appointment.time}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <button
                        onClick={() => handleAppointmentAction(appointment.id, 'approved')}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
                      >
                        <Check size={16} />
                      </button>
                      <button
                        onClick={() => handleAppointmentAction(appointment.id, 'rejected')}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <MessageSquare className="mr-2" /> User Queries
        </h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {queries.map((query) => (
              <li key={query.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">{query.name}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {query.status}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <p className="text-sm text-gray-500">{query.message}</p>
                  </div>
                  <div className="mt-2">
                    <textarea
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      rows="2"
                      placeholder="Type your reply..."
                    ></textarea>
                    <button
                      onClick={() => handleQueryReply(query.id, 'Your reply here')}
                      className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
                    >
                      <Send size={16} className="mr-2" /> Send Reply
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Star className="mr-2" /> User Reviews
        </h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {reviews.map((review) => (
              <li key={review.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">{review.name}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {review.status}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        Rating: {review.rating}/5
                      </p>
                    </div>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      {review.comment}
                    </p>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={() => handleReviewAction(review.id, 'approved')}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={() => handleReviewAction(review.id, 'rejected')}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AdminPage;

