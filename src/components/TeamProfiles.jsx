import React from 'react';

const teamMembers = [
  {
    name: 'Dr.P.Prasannakumar',
    role: 'General Dentist',
    bio: ' Dr.P.Prasannakumar has over 8 years of experience in general dentistry and is passionate about patient education.',
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    name: 'Dr.P.Iniyal',
    role: 'Orthodontist',
    bio: ' Dr.P.Iniyal specializes in creating beautiful smiles through advanced orthodontic treatments.',
    image: '/placeholder.svg?height=200&width=200'
  },
  
];


function TeamProfiles() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-center">{member.name}</h2>
            <p className="text-blue-600 font-semibold text-center mb-2">{member.role}</p>
            <p className="text-gray-600 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6 mt-5">Technical Support</h2>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>HARIHARAN K</h2>
        </div>
      </div>
    </div>
  );
}

export default TeamProfiles;

