import React from 'react';

const educationResources = [
  {
    title: 'Proper Brushing Techniques',
    content: 'Learn the correct way to brush your teeth for optimal oral health.',
    link: '/education/brushing-techniques'
  },
  {
    title: 'The Importance of Flossing',
    content: 'Discover why flossing is crucial for preventing gum disease and cavities.',
    link: '/education/importance-of-flossing'
  },
  {
    title: 'Understanding Gum Disease',
    content: 'Learn about the causes, symptoms, and treatments for gum disease.',
    link: '/education/gum-disease'
  },
  {
    title: 'Caring for Your Child',
    content: 'Tips for parents on maintaining good oral health in children.',
    link: '/education/child-dental-care'
  }
];

function PatientEducation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Patient Education Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationResources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-4">{resource.content}</p>
            <a href={resource.link} className="text-blue-600 hover:underline">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientEducation;

