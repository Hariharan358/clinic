import React, { useState } from 'react';

function VirtualConsultation() {
  const [isCallActive, setIsCallActive] = useState(false);

  const startCall = () => {
    // Here you would typically initialize your video call library
    setIsCallActive(true);
  };

  const endCall = () => {
    // Here you would typically end the call using your video call library
    setIsCallActive(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Virtual Consultation</h1>
      <div className="max-w-2xl mx-auto">
        {!isCallActive ? (
          <div className="text-center">
            <p className="mb-4">Click the button below to start your virtual consultation.</p>
            <button
              onClick={startCall}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
            >
              Start Consultation
            </button>
          </div>
        ) : (
          <div>
            <div className="bg-black h-96 mb-4 flex items-center justify-center text-white">
              Video call would be displayed here
            </div>
            <div className="text-center">
              <button
                onClick={endCall}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
              >
                End Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VirtualConsultation;

