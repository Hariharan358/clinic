import React from 'react';

const blogPosts = [
  {
    title: '5 Tips for a Healthier Smile',
    date: 'May 15, 2023',
    excerpt: 'Discover simple ways to improve your oral health and maintain a beautiful smile.',
    link: '/blog/5-tips-for-healthier-smile'
  },
  {
    title: 'The Truth About Teeth Whitening',
    date: 'April 28, 2023',
    excerpt: 'Learn about different teeth whitening methods and which one might be right for you.',
    link: '/blog/truth-about-teeth-whitening'
  },
  {
    title: 'Overcoming Dental Anxiety',
    date: 'April 10, 2023',
    excerpt: 'Practical strategies to help you feel more comfortable during dental visits.',
    link: '/blog/overcoming-dental-anxiety'
  }
];

function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dental Health Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{post.date}</p>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <a href={post.link} className="text-blue-600 hover:underline">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

