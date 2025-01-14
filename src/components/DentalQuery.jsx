import React, { useState } from 'react';
import Teeth from '../assets/teeth.png';

const ImprovedDentalQueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', issueType: '', query: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 w-screen px-4 sm:px-6 lg:px-8">
      <div className="w-screen mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={Teeth} alt="Dental care illustration" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">Online Dental Consultation</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ask a Dentist</h2>
            <p className="mt-2 text-gray-600 mb-6">Have a dental concern? Our experts are here to help. Fill out the form below, and we'll get back to you shortly.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
                  Type of Dental Issue
                </label>
                <select
                  name="issueType"
                  id="issueType"
                  required
                  value={formData.issueType}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select an issue</option>
                  <option value="toothache">Toothache</option>
                  <option value="gum_problems">Gum Problems</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="orthodontics">Orthodontics</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="query" className="block text-sm font-medium text-gray-700">
                  Your Query
                </label>
                <textarea
                  name="query"
                  id="query"
                  rows="4"
                  required
                  value={formData.query}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Please describe your dental concern in detail..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  Submit Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedDentalQueryForm;

