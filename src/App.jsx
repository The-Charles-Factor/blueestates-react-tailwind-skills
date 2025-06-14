import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RealEstateLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const properties = [
    {
      id: 1,
      title: 'Luxury Villa in Beverly Hills',
      price: '$3,250,000',
      location: 'Beverly Hills, CA',
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4500,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: true,
      type: 'Villa'
    },
    {
      id: 2,
      title: 'Modern Apartment in Manhattan',
      price: '$1,750,000',
      location: 'New York, NY',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: false,
      type: 'Apartment'
    },
    {
      id: 3,
      title: 'Waterfront Mansion in Miami',
      price: '$4,500,000',
      location: 'Miami, FL',
      bedrooms: 6,
      bathrooms: 5,
      sqft: 6200,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: true,
      type: 'Mansion'
    },
    {
      id: 4,
      title: 'Chic Loft in Downtown Chicago',
      price: '$1,200,000',
      location: 'Chicago, IL',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1600,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: false,
      type: 'Loft'
    },
    {
      id: 5,
      title: 'Historic Townhouse in Boston',
      price: '$2,800,000',
      location: 'Boston, MA',
      bedrooms: 4,
      bathrooms: 3.5,
      sqft: 3200,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: true,
      type: 'Townhouse'
    },
    {
      id: 6,
      title: 'Modern Farmhouse in Austin',
      price: '$1,950,000',
      location: 'Austin, TX',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: false,
      type: 'Farmhouse'
    },
  ];

  const agents = [
    {
      id: 1,
      name: 'Professor Njoroge',
      title: 'Senior Agent',
      experience: '6 years',
      deals: '30+',
      image: '/prof.jpg'
    },
    {
      id: 2,
      name: 'James Mwangi',
      title: 'Luxury Specialist',
      experience: '3 years',
      deals: '20+',
      image: '/Screenshot from 2025-06-14 08-27-54.png'
    },
    {
      id: 3,
      name: 'Kamfugo Edwin',
      title: 'Technician',
      experience: '4 years',
      deals: '14+',
      image: '/edu-wick-dsc04325.jpeg'
    },
    {
      id: 4,
      name: 'The Charles-Factor',
      title: 'Software Engineer',
      experience: '2 years',
      deals: '11+',
      image: '/Screenshot from 2025-06-14 08-29-42.png'
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Expert Agents',
      description: 'Our team of experienced agents will guide you through every step of the process with personalized service.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Verified Listings',
      description: 'All our properties are thoroughly vetted to ensure accurate information and transparent pricing.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: '24/7 Support',
      description: 'Our dedicated customer service team is available around the clock to assist with all your needs.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Easy Financing',
      description: 'We partner with top lenders to help you secure the best mortgage rates and financing options.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Virtual Tours',
      description: 'Explore properties from anywhere with our high-quality virtual tours and 3D walkthroughs.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Closing Guarantee',
      description: 'Our closing guarantee ensures your transaction stays on track with clear timelines.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Moses Njoroge',
      role: 'Homeowner',
      quote: 'BlueEstate made the entire home buying process seamless. Their agents were knowledgeable and always available to answer my questions. We found our dream home faster than I expected!',
      image: '/Screenshot from 2025-06-14 08-29-42.png',
      rating: 5
    },
    {
      id: 2,
      name: 'James Mwangi',
      role: 'Investor',
      quote: 'I\'ve worked with many real estate companies, but BlueEstate stands out for their professionalism and attention to detail. Their market insights helped me make profitable investments.',
      image: '/Screenshot from 2025-06-14 08-27-54.png',
      rating: 5
    },
    {
      id: 3,
      name: 'Edwin K',
      role: 'First-time Buyer',
      quote: 'As a first-time homebuyer, I was nervous about the process. BlueEstate guided me through every step and found me the perfect home within my budget. Couldn\'t be happier!',
      image: '/edu-wick-dsc04325.jpeg',
      rating: 5
    },
    {
      id: 4,
      name: 'Kamfugo Edwin',
      role: 'Seller',
      quote: 'Sold my property for 15% above asking price thanks to BlueEstate\'s marketing strategy and negotiation skills. Highly recommend their services to anyone buying or selling.',
      image: '/edu-wick-dsc04325.jpeg',
      rating: 5
    }
  ];

  const stats = [
    { value: '1,250+', label: 'Properties Sold' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '25+', label: 'Years Experience' },
    { value: '$4.2B', label: 'Total Volume' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Enhanced Navbar with scroll effect */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 shadow-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-blue-600 flex items-center">
                <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H5a1 1 0 010-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
                BlueEstate
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo('home')} className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition duration-300">Home</button>
              <button onClick={() => scrollTo('properties')} className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition duration-300">Properties</button>
              <button onClick={() => scrollTo('agents')} className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition duration-300">Agents</button>
              <button onClick={() => scrollTo('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition duration-300">About Us</button>
              <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition duration-300">Contact</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-300 shadow-md hover:shadow-lg">
                Sign In
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              <button onClick={() => scrollTo('home')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300">Home</button>
              <button onClick={() => scrollTo('properties')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300">Properties</button>
              <button onClick={() => scrollTo('agents')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300">Agents</button>
              <button onClick={() => scrollTo('about')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300">About Us</button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300">Contact</button>
              <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-100 transition duration-300">Sign In</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Enhanced Background */}
      <section id="home" className="pt-16">
        <div className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Luxury Home" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-800/50"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-lg"
            >
              Trusted by 5,000+ Clients
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Your <span className="text-blue-300">Perfect</span> Home
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Premium properties across the country with expert guidance from our dedicated real estate agents.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Browse Properties
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg shadow-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Tour
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section with Filter */}
      <section id="properties" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties across various categories
            </p>
          </div>
          
          {/* Property Type Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium shadow-md">All</button>
            <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium shadow-sm hover:shadow-md transition duration-300">Houses</button>
            <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium shadow-sm hover:shadow-md transition duration-300">Apartments</button>
            <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium shadow-sm hover:shadow-md transition duration-300">Villas</button>
            <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium shadow-sm hover:shadow-md transition duration-300">Condos</button>
            <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full font-medium shadow-sm hover:shadow-md transition duration-300">Luxury</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <motion.div 
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                  />
                  {property.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {property.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-blue-600 text-lg font-semibold mb-3">{property.price}</p>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </p>
                  <div className="flex justify-between border-t pt-4">
                    <span className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {property.bedrooms} Beds
                    </span>
                    <span className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {property.bathrooms} Baths
                    </span>
                    <span className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {property.sqft} sqft
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 flex items-center mx-auto gap-2">
              View All Properties
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Property Search Section */}
      <section className="py-16 bg-gradient-to-r from-gray-400 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Perfect Property</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Search by location, price range, property type and more
          </p>
          
          <div className="bg-white rounded-xl shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-1 md:col-span-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 text-left mb-1">Location</label>
                <input 
                  type="text" 
                  id="location" 
                  placeholder="City, Neighborhood or ZIP" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 text-left mb-1">Type</label>
                <select 
                  id="type" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Any Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                  <option>Villa</option>
                </select>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 text-left mb-1">Price</label>
                <select 
                  id="price" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Any Price</option>
                  <option>$0 - $500,000</option>
                  <option>$500,000 - $1M</option>
                  <option>$1M - $2M</option>
                  <option>$2M+</option>
                </select>
              </div>
            </div>
            <button className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
              Search Properties
            </button>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Agents</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team of dedicated professionals is ready to assist you
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent) => (
              <motion.div 
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                    <p className="text-blue-300">{agent.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {agent.experience}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {agent.deals} Deals
                    </span>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition duration-300">
                    Contact Agent
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose BlueEstate</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service at every step of your real estate journey
            </p>
          </div>
          {/* Find your  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
                      <div className="flex items-center mb-6">
                        <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-500" />
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-blue-600">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 italic text-lg">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${activeTestimonial === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Neighborhood Guides</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the best neighborhoods for your lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative rounded-xl overflow-hidden shadow-lg h-64"
            >
              <img 
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Urban Living" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Urban Living</h3>
                  <p className="text-gray-200">Explore vibrant city centers</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative rounded-xl overflow-hidden shadow-lg h-64"
            >
              <img 
                src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Suburban Bliss" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Suburban Bliss</h3>
                  <p className="text-gray-200">Family-friendly communities</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative rounded-xl overflow-hidden shadow-lg h-64"
            >
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Waterfront Properties" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Waterfront Living</h3>
                  <p className="text-gray-200">Homes with stunning water views</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 bg-gradient-to-r from-gray-400 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team of expert agents is standing by to help you find the perfect property.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-lg shadow-xl text-lg transition duration-300"
            >
              Contact an Agent Today
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent hover:bg-blue-700 border-2 border-white text-white font-bold rounded-lg shadow-xl text-lg transition duration-300"
            >
              Call Now: (555) 123-4567
            </motion.button>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Estate Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Latest news and tips for buyers and sellers
            </p>
          </div>
          {/* Stay Updated */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Home Buying Tips" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">Buying Guide</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">10 Tips for First-Time Home Buyers</h3>
                <p className="text-gray-600 mb-4">Essential advice to navigate your first home purchase with confidence.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Market Trends" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">Market Trends</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2023 Real Estate Market Outlook</h3>
                <p className="text-gray-600 mb-4">What to expect in the housing market this year and how to prepare.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Home Staging" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">Selling Guide</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Home Staging Secrets for Faster Sales</h3>
                <p className="text-gray-600 mb-4">Professional tips to make your home stand out and sell quickly.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 inline-flex items-center">
              View All Articles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest property listings and market news
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>


      {/* About me : the developer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16 bg-gradient-to-r from-gray-200 to-gray-400 py-16 px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Developer</h2>
  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
    Crafting digital experiences with precision and passion
  </p>
</div>

          
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="lg:w-1/3">
              {/* Placeholder for your image - replace with your actual image */}
              <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-blue-600/20">
                <img 
                  src="/Screenshot from 2025-06-14 08-19-06.png" 
                  alt="Charles Njoroge" 
                  className="w-full h-auto object-cover grayscale-[20%] sepia-[10%]"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Charles Njoroge</h3>
              <p className="text-blue-600 font-medium mb-6">Full Stack Developer & Designer</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Professional Arsenal</h4>
                <div className="flex flex-wrap gap-2">
                  {['Full Stack', 'Backend', 'Frontend', 'Graphic Design'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'Python', 'React', 'Flask', 'FastAPI', 'MySQL', 'SQLite'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Design Services</h4>
                <p className="text-gray-600 mb-2">Creating visually compelling assets including:</p>
                <div className="flex flex-wrap gap-2">
                  {['Logos', 'Posters', 'Business Cards', 'Catalogues', 'Branding'].map((design) => (
                    <span key={design} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-300">
                      {design}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Get In Touch</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="tel:+254757821574" className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +254 757 821 574 (Direct Call)
                  </a>
                  <a href="mailto:thecharlesfactor.dev@gmail.com" className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    thecharlesfactor.dev@gmail.com
                  </a>
                  <a href="https://www.facebook.com/theCharlesfactor" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                    Facebook Profile
                  </a>
                  <a href="https://wa.me/254707645624" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-300">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Message
                    </div>
                    <span className="text-sm">+254 707 645 624</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mb-8">
              <a href="#" className="text-2xl font-bold text-white flex items-center mb-4">
                <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H5a1 1 0 010-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
                BlueEstate
              </a>
              <p className="text-gray-400 mb-6">
                Helping you find your perfect home since 2005. Our mission is to make real estate transactions simple and stress-free.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-gray-400 hover:text-white transition duration-300 bg-gray-800 p-2 rounded-full"
                    aria-label={social}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Properties', 'Agents', 'About Us', 'Contact', 'Blog'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => scrollTo(link.toLowerCase().replace(' ', ''))} 
                      className="text-gray-400 hover:text-white transition duration-300 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {['FAQ', 'Privacy Policy', 'Terms of Service', 'Mortgage Calculator', 'Site Map', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <address className="text-gray-400 not-italic">
                <p className="mb-3 flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  1234 Estate Avenue, Beverly Hills, CA 90210
                </p>
                <p className="mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (+254) 757821574
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@blueestate.com
                </p>
              </address>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Business Hours</h4>
                <p className="text-gray-400 text-sm">Monday - Friday: 9am - 7pm</p>
                <p className="text-gray-400 text-sm">Saturday: 10am - 5pm</p>
                <p className="text-gray-400 text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BlueEstate. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RealEstateLanding;