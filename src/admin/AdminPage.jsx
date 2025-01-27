import React, { useState, useEffect } from 'react';
import { Calendar, Check, X } from 'lucide-react';

function AdminPage() {
  const [appointments, setAppointments] = useState([]);
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reply, setReply] = useState('');  // State to store the reply text
  const [selectedQueryId, setSelectedQueryId] = useState(null);  // To track the query being replied to

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5003/appointments');
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchQueries = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5003/queries');
        if (!response.ok) {
          throw new Error('Failed to fetch queries');
        }
        const data = await response.json();
        setQueries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
    fetchQueries();
  }, []);

  const handleAppointmentAction = async (id, action) => {
    try {
      const response = await fetch(`http://localhost:5003/appointments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: action }),
      });

      if (!response.ok) {
        throw new Error('Failed to update appointment status');
      }

      const updatedAppointment = await response.json();
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === id ? { ...appointment, status: action } : appointment
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const handleQueryAction = async (id, action) => {
    try {
      const response = await fetch(`http://localhost:5003/queries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: action }),
      });

      if (!response.ok) {
        throw new Error('Failed to update query status');
      }

      const updatedQuery = await response.json();
      setQueries((prevQueries) =>
        prevQueries.map((query) =>
          query._id === id ? { ...query, status: action } : query
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = async () => {
    if (!reply || !selectedQueryId) return;

    try {
      const response = await fetch(`http://localhost:5003/queries/${selectedQueryId}/reply`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reply }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit reply');
      }

      const updatedQuery = await response.json();
      setQueries((prevQueries) =>
        prevQueries.map((query) =>
          query._id === selectedQueryId ? { ...query, reply } : query
        )
      );
      setReply(''); // Clear the reply input after submitting
      setSelectedQueryId(null); // Reset the selected query ID
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Appointments Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Calendar className="mr-2" /> Appointments
        </h2>

        {loading && <p>Loading appointments...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <li key={appointment._id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {appointment.name}
                    </p>
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
                        onClick={() => handleAppointmentAction(appointment._id, 'approved')}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
                      >
                        <Check size={16} />
                      </button>
                      <button
                        onClick={() => handleAppointmentAction(appointment._id, 'rejected')}
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

      {/* Queries Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Calendar className="mr-2" /> Queries
        </h2>

        {loading && <p>Loading queries...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {queries.map((query) => (
              <li key={query._id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {query.name} ({query.email})
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {query.status}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {query.issueType}: {query.query}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <button
                        onClick={() => {
                          setSelectedQueryId(query._id);  // Set the query ID to reply
                          setReply('');  // Clear any previous reply
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2"
                      >
                        Reply
                      </button>
                      <button
                        onClick={() => handleQueryAction(query._id, 'resolved')}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
                      >
                        <Check size={16} />
                      </button>
                      <button
                        onClick={() => handleQueryAction(query._id, 'pending')}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Reply Section */}
                {selectedQueryId === query._id && (
                  <div className="mt-4">
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Write your reply here..."
                      value={reply}
                      onChange={handleReplyChange}
                    />
                    <button
                      onClick={handleReplySubmit}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
                    >
                      Submit Reply
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AdminPage;
