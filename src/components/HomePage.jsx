import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smile, Calendar, Phone, Clock } from 'lucide-react';
import teeth from '../assets/teeth.png';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <motion.header 
        className="text-center pt-10 mb-0 text-blue-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto  shadow-lg p-5 px-3">
          <h1 className="text-5xl font-bold mb-2 font-serif">Welcome to PanneerSelvam Dental Clinic</h1>
          <p className="text-2xl">Your Partner in Oral Health and Beautiful Smiles</p>
        </div>
      </motion.header>

      <div className="container mx-auto px-2 py-12 ">
        {/* Image and text section */}
        <motion.section
          className="flex flex-col md:flex-row items-center justify-between gap-1 mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-2 px-10">
            <img src={teeth} alt="Teeth" className="w-150 h-80 rounded-full border-rounded shadow-lg" />
          </div>
          <div className="flex-1 text-lg text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Need a Smile Makeover?</h3>
            <p className="mb-4">
            At PannerSelvam Dental Clinic, we offer expert care tailored to your needs. <br />
             Whether it's a routine check-up or a smile makeover, our team is here to help. <br /> Book your consultation online today and take the first step toward a healthier, <br /> brighter smile!   </p>
            <div>
             <Link to='/query'> <button className='bg-blue-500 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:text-black'>Quries?</button></Link></div> 
          </div>
          
        </motion.section>
        

        {/* About Us Section */}
        <motion.section 
          className="mb-16 bg-white p-8 rounded-xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">About Us</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            At Smile Bright Dental Clinic, we are committed to providing top-quality dental care in a comfortable and friendly environment. Our mission is to help you achieve and maintain optimal oral health and a beautiful smile that lasts a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/appointment" className="bg-blue-500 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:text-black">
                <Calendar className="mr-2" size={24} />
                Book Consultation
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/services" className="bg-green-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:text-black">
                <Smile className="mr-2" size={24} />
                Our Services
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Special Offers Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Special Offers</h2>
          <motion.div 
            className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="font-bold text-2xl mb-4 text-blue-800">New Patient Special!</h3>
            <p className="text-lg text-blue-900 mb-4">Get a comprehensive dental exam and cleaning for just $99. Limited time offer.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Claim Offer
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Patient Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-600 italic mb-4 text-lg">"The best dental experience I've ever had. The staff is friendly and professional, and the facilities are top-notch."</p>
              <div className="flex items-center justify-end">
                <img src="/placeholder.svg?height=50&width=50" alt="John D." className="w-12 h-12 rounded-full mr-4" />
                <p className="text-gray-800 font-semibold">John D.</p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-600 italic mb-4 text-lg">"I love my new smile! Thank you, Smile Bright Dental Clinic! The team made me feel comfortable throughout the entire process."</p>
              <div className="flex items-center justify-end">
                <img src="/placeholder.svg?height=50&width=50" alt="Sarah M." className="w-12 h-12 rounded-full mr-4" />
                <p className="text-gray-800 font-semibold">Sarah M.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Smile className="mx-auto mb-4 text-blue-500" size={48} />
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">Our team of experienced dentists provides top-notch dental care.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Clock className="mx-auto mb-4 text-blue-500" size={48} />
              <h3 className="text-xl font-semibold mb-2">Convenient Hours</h3>
              <p className="text-gray-600">We offer flexible scheduling to fit your busy lifestyle.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone className="mx-auto mb-4 text-blue-500" size={48} />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our team is always available to address your dental concerns.</p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <motion.footer 
        className="bg-blue-600 text-white py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Smile Bright Dental Clinic. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default HomePage;
