import React from 'react';

function Emergency() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Emergency Dental Care</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">24/7 Emergency Hotline</h2>
        <p className="text-2xl font-bold text-red-600 mb-6">Call: (555) 123-4567</p>
        <h3 className="text-lg font-semibold mb-2">Common Dental Emergencies:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Severe toothache</li>
          <li>Knocked-out tooth</li>
          <li>Cracked or chipped tooth</li>
          <li>Lost filling or crown</li>
          <li>Swollen jaw or gums</li>
          <li>Bleeding that won't stop</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">What to Do in a Dental Emergency:</h3>
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-2">Stay calm and assess the situation.</li>
          <li className="mb-2">Call our emergency hotline immediately.</li>
          <li className="mb-2">Follow any instructions given by our staff.</li>
          <li className="mb-2">If advised, come to our clinic as soon as possible.</li>
        </ol>
        <p className="italic">
          Remember, quick action can often save a tooth and prevent further complications. Don't hesitate to call us in any dental emergency situation.
        </p>
      </div>
    </div>
  );
}

export default Emergency;

