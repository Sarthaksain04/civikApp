import React, { useState, useEffect, useRef } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../Components";
import { Carousel, TextType, SplitText,Button, } from "../Components/index";
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Blogbg from '../Components/Image/blogBg.png'
import  LaptopImg from '../Components/Image/LaptopImg.png'

function Home() {
   const authStatus=useSelector((state)=>state.auth.status)
    const navigate=useNavigate()
     const navItem=[
     {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
   ]

  // Counter component for animated numbers
  const AnimatedCounter = ({ end, duration = 2000, label, className = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            let startTime;
            let animationFrame;
            
            const animate = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = timestamp - startTime;
              const percentage = Math.min(progress / duration, 1);
              const currentCount = Math.floor(percentage * end);
              
              setCount(currentCount);
              
              if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
              }
            };
            
            animationFrame = requestAnimationFrame(animate);
            
            return () => {
              cancelAnimationFrame(animationFrame);
            };
          }
        },
        { threshold: 0.1 }
      );
      
      if (countRef.current) {
        observer.observe(countRef.current);
      }
      
      return () => {
        if (countRef.current) {
          observer.unobserve(countRef.current);
        }
      };
    }, [end, duration]);
    
    return (
      <div ref={countRef} className={`flex flex-col items-center ${className} p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:bg-white/70 transform hover:-translate-y-1`}>
        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
          {count}+
        </div>
        <div className="text-gray-700 font-medium text-center">{label}</div>
      </div>
    );
  };

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-start">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Next-Gen </span> Civique
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl">
                  An innovative Civic Issues Management System designed to transform how citizens report, track, and resolve civic problems
                </p>
                <div className="flex flex-wrap gap-5 mb-8">
                  {navItem.map((item) =>
                    item.active ? (
                      <button
                        key={item.name}
                        onClick={() => navigate(item.slug)}
                        className={item.name === "Login" 
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-4 px-10 rounded-lg shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1" 
                          : "bg-white/80 backdrop-blur-sm hover:bg-white text-blue-600 border-2 border-blue-600 font-medium py-4 px-10 rounded-lg shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1"}
                      >
                        {item.name}
                      </button>
                    ) : null
                  )}
                </div>
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Easy to use</span>
                  <span className="mx-2">•</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fast performance</span>
                  <span className="mx-2">•</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Modern UI</span>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 relative">
                <div className="relative">
                  <img
                    src={LaptopImg}
                    alt="Blog Platform"
                    className="w-full max-w-md mx-auto rounded-lg shadow-2xl border border-gray-200 relative z-10 transform transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-24 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-white/70 backdrop-blur-sm text-blue-800 rounded-full text-sm font-semibold mb-3 border border-white/30">POWERFUL FEATURES</span>
              <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-6">Why Choose Our Platform</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Designed for citizens who demand accountability, with tools that make issue reporting simple, effective, and impactful.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/30 transition-all duration-300 hover:shadow-2xl hover:bg-white/80 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 mb-6 border border-blue-200/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Smart Grievance Reporting</h3>
                <p className="text-gray-700 text-lg">
                  Report civic issues instantly with photos, voice, or text. Categorize problems easily to ensure they reach the right department.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/30 transition-all duration-300 hover:shadow-2xl hover:bg-white/80 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100/80 backdrop-blur-sm rounded-full flex items-center justify-center text-purple-600 mb-6 border border-purple-200/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rich Media Support</h3>
                <p className="text-gray-700 text-lg">Easily embed images, videos, and other media to create visually stunning blog posts that engage your readers.</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/30 transition-all duration-300 hover:shadow-2xl hover:bg-white/80 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-indigo-100/80 backdrop-blur-sm rounded-full flex items-center justify-center text-indigo-600 mb-6 border border-indigo-200/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lightning Fast Performance</h3>
                <p className="text-gray-700 text-lg">Built with cutting-edge technology for blazing-fast loading and real-time updates for optimal user experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 bbg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Ready to Make Your City Better?</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Empower your community with a modern civic management platform. File, track, and resolve issues with ease
              </p>
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => navigate('/signup')} 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-10 rounded-lg shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1 w-64 sm:w-auto"
              >
                Get Started for Free
              </button>
              <button 
                onClick={() => navigate('/help')} 
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-blue-600 border-2 border-blue-600 font-semibold py-4 px-10 rounded-lg shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1 w-64 sm:w-auto"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Content Preview Section */}
        <section className="w-full py-24 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50  h-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-white/70 backdrop-blur-sm text-purple-800 rounded-full text-sm font-semibold mb-3 border border-white/30">EXPLORE CONTENT</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Featured Reports</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
               Browse highlighted grievances in your area. Login to access complete information and status updates              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Placeholder cards since no actual posts */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white/30 transition-all duration-300 hover:shadow-2xl hover:bg-white/80 transform hover:-translate-y-2 relative">
                  <div className="h-60 bg-gradient-to-r from-blue-200/60 to-indigo-200/60 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item === 1 ? "Road Damage and Pothole Report" : item === 2 ? "Water Supply Issue Report" : "Garbage and Sanitation Concern Report"}</h3>
                    <p className="text-gray-700 mb-4">{item === 1 ? "Roads with potholes and damage cause accidents making timely repair essential." : item === 2 ? "Interruptions  in water supply affect requiring prompt attention and resolution" : "Garbage buildup and poor sanitation cause health risks needing prompt action"}</p>
                    <div className="h-20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80"></div>
                      <p className="text-gray-600 text-sm">
                        {item === 1 ? "Road maintenance is a critical task that requires careful assessment and timely action. In this guide, we explore the causes of road damage and potholes, their impact on safety and traffic, and how to report them effectively" : 
                         item === 2 ? "Water supply management is essential for community health and daily life. In this guide, we explore common water supply issues, their impact on households, and how to report disruptions effectively" : 
                         "Proper street lighting is crucial for safety and urban functionality. This guide explores common streetlight issues, their impact on the community, and how to report malfunctions effectively."}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/30">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700 font-medium">{item === 1 ? "Sarah Johnson" : item === 2 ? "Michael Chen" : "Alex Rivera"}</span>
                      </div>
                      <span className="text-xs text-gray-600">{item === 1 ? "Aug 18" : item === 2 ? "Aug 15" : "Aug 12"}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-blue-600 font-semibold mb-4 text-center px-6">Login to read  full article</p>
                    <button 
                      onClick={() => navigate('/login')} 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Login Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <button 
                onClick={() => navigate('/login')} 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-10 rounded-lg shadow-xl transition-all duration-300 text-lg transform hover:-translate-y-1"
              >
                Login to Read Full reports
              </button>
            </div>
          </div>
        </section>

        {/* Dedicated Stats Section */}
        <section className="w-full py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white/70 backdrop-blur-sm text-blue-800 rounded-full text-sm font-semibold mb-3 border border-white/30">PLATFORM STATS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">A Powerful Civic Reporting Platform</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A powerful platform built for citizens to report, track, and resolve issues seamlessly              </p>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedCounter 
                end={100} 
                label="Active issues" 
                duration={2500}
              />
              <AnimatedCounter 
                end={50} 
                label="Issues Resolved" 
                duration={2300}
              />
              <AnimatedCounter 
                end={200} 
                label=" Registered Users" 
                duration={2700}
              />
              <AnimatedCounter 
                end={15} 
                label=" Pending Issues" 
                duration={2100}
              />
             
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-block bg-white/70 backdrop-blur-sm px-8 py-5 rounded-xl shadow-lg border border-white/30">
                <p className="text-gray-800 font-medium">
                  <span className="text-blue-600 font-semibold">Start today</span> and Report issues in just minutes
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>    
    );
  }
  return (
    <div className="w-full py-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
