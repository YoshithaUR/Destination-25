import React from "react";
import { useParams } from "react-router-dom";

const PackageTemplate = () => {
  // In a real app, this data would come from an API or context
  const { id } = useParams();
  
  // Sample package data
  const packages = {
    "silver-adventure": {
      id: 1,
      name: "Silver Adventure",
      description: "Perfect for budget travelers seeking essential experiences",
      longDescription: "Our Silver Adventure package is designed for travelers who want to experience the best of Sri Lanka without breaking the bank. This package includes essential accommodations, transportation, and guided tours to the most iconic destinations.",
      detailedInfo: [
        {
          title: "Accommodation & Comfort",
          content: "Stay in carefully selected 3-star hotels that offer comfort and convenience at affordable rates. All accommodations are located in prime areas with easy access to attractions and dining options. Rooms are equipped with modern amenities including air conditioning, Wi-Fi, and private bathrooms.",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          title: "Transportation & Logistics",
          content: "Enjoy hassle-free travel with our modern fleet of air-conditioned vehicles. Our experienced drivers ensure your safety and comfort throughout your journey. All transfers between airports, hotels, and sightseeing locations are included in the package.",
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          title: "Guided Experiences",
          content: "Explore Sri Lanka with our knowledgeable local guides who will share insights into the country's rich history, culture, and traditions. All major attractions are covered with expert commentary to enhance your understanding and appreciation of each site.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
      ],
      image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ],
      price: "$899",
      duration: "5 days",
      rating: 4.3,
      bestTime: "December to March",
      inclusions: [
        "3-star accommodation for 4 nights",
        "Daily breakfast",
        "Airport transfers",
        "Guided city tour",
        "Sigiriya & Dambulla tour",
        "Kandy city tour",
        "24/7 customer support"
      ],
      exclusions: [
        "International flights",
        "Lunch and dinner",
        "Personal expenses",
        "Travel insurance",
        "Tips and gratuities"
      ],
      facts: [
        "Budget-friendly option",
        "Essential experiences covered",
        "Comfortable 3-star hotels",
        "Expert local guides",
        "Hassle-free transportation"
      ],
      color: "gray"
    },
    "golden-experience": {
      id: 2,
      name: "Golden Experience",
      description: "Ideal for travelers wanting a balanced mix of comfort and adventure",
      longDescription: "Our Golden Experience package offers the perfect balance between comfort and adventure. With 4-star accommodations, daily meals, and premium experiences, this package provides an excellent introduction to Sri Lanka's diverse attractions while ensuring a comfortable stay.",
      detailedInfo: [
        {
          title: "Premium Accommodations",
          content: "Stay in handpicked 4-star hotels that blend modern comfort with local charm. Each property offers excellent service, comfortable rooms with premium amenities, and convenient locations near major attractions. Enjoy daily breakfast and dinner at quality restaurants.",
          image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          title: "Comprehensive Tours",
          content: "Experience Sri Lanka's highlights with our expertly planned tours that cover cultural sites, scenic landscapes, and wildlife reserves. Our professional guides provide in-depth knowledge about each destination, ensuring you gain a deeper understanding of the country's rich heritage.",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          title: "Luxury Transportation",
          content: "Travel in comfort with our premium fleet of air-conditioned vehicles. Our experienced chauffeurs ensure smooth transfers between destinations, and all ground transportation is included in the package. Enjoy the scenic routes with panoramic windows for optimal views.",
          image: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
      ],
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ],
      price: "$1,499",
      duration: "7 days",
      rating: 4.7,
      bestTime: "December to March",
      inclusions: [
        "4-star accommodation for 6 nights",
        "Daily breakfast & dinner",
        "All major attractions visit",
        "Private transportation",
        "Professional tour guide",
        "Airport transfers",
        "Welcome dinner",
        "Cultural show tickets"
      ],
      exclusions: [
        "International flights",
        "Lunch",
        "Personal expenses",
        "Travel insurance",
        "Tips and gratuities",
        "Optional activities"
      ],
      facts: [
        "Balanced comfort and adventure",
        "4-star hotel accommodations",
        "Daily meals included",
        "Professional tour guide",
        "Private transportation"
      ],
      color: "yellow"
    },
    "premium-luxury": {
      id: 3,
      name: "Premium Luxury",
      description: "Ultimate experience with top-tier services and exclusive access",
      longDescription: "Our Premium Luxury package offers the ultimate Sri Lankan experience with 5-star accommodations, exclusive access to premium attractions, and personalized services. This package is designed for discerning travelers who seek the finest in comfort, service, and unique experiences.",
      detailedInfo: [
        {
          title: "Luxury Accommodations",
          content: "Indulge in the finest 5-star luxury hotels and resorts that exemplify elegance and sophistication. Each property offers world-class amenities including spas, fine dining restaurants, infinity pools, and impeccable service. Rooms feature premium furnishings, panoramic views, and all modern conveniences.",
          image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          title: "Exclusive Experiences",
          content: "Gain access to exclusive experiences unavailable to regular tourists, including private tours of historical sites, VIP treatment at attractions, and special cultural performances. Enjoy personalized itineraries crafted by our luxury travel specialists to match your interests.",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          title: "Personalized Services",
          content: "Benefit from dedicated personal concierge services throughout your stay. Our luxury travel specialists handle all arrangements, from restaurant reservations to special requests. Enjoy 24/7 assistance from multilingual butlers and access to our network of premium partners.",
          image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
      ],
      image: "https://images.unsplash.com/photo-1505228395891-9a51e7f86e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1505228395891-9a51e7f86e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ],
      price: "$2,799",
      duration: "10 days",
      rating: 4.9,
      bestTime: "December to March",
      inclusions: [
        "5-star luxury hotels for 9 nights",
        "All meals included",
        "VIP access to attractions",
        "Private chauffeur service",
        "Personal tour guide",
        "Spa & wellness treatments",
        "Airport VIP transfers",
        "24/7 concierge service",
        "Welcome champagne",
        "Special cultural performances",
        "Luxury gift package"
      ],
      exclusions: [
        "International flights",
        "Personal expenses",
        "Travel insurance",
        "Tips and gratuities over 15%",
        "Optional premium activities"
      ],
      facts: [
        "5-star luxury accommodations",
        "All meals included",
        "VIP access to attractions",
        "Personal concierge service",
        "Spa & wellness treatments"
      ],
      color: "blue"
    },
    "cultural-heritage": {
      id: 4,
      name: "Cultural Heritage",
      description: "Deep dive into Sri Lanka's rich history and traditions",
      longDescription: "Our Cultural Heritage package is perfect for travelers who wish to immerse themselves in Sri Lanka's fascinating history, ancient traditions, and vibrant culture. This carefully curated experience takes you through centuries of civilization, from ancient kingdoms to colonial influences, all while staying in comfortable accommodations.",
      detailedInfo: [
        {
          title: "Historical Exploration",
          content: "Journey through Sri Lanka's rich historical sites including the ancient cities of Anuradhapura and Polonnaruwa, the rock fortress of Sigiriya, and the sacred city of Kandy. Each destination offers unique insights into the island's ancient civilizations and architectural marvels.",
          image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          title: "Cultural Immersion",
          content: "Experience authentic Sri Lankan culture through traditional dance performances, cooking classes with local families, and visits to artisan workshops. Learn about ancient crafts like pottery, wood carving, and batik painting directly from skilled craftspeople who have preserved these traditions for generations.",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          title: "Spiritual Journey",
          content: "Discover the spiritual side of Sri Lanka through visits to sacred Buddhist temples, Hindu shrines, and colonial churches. Participate in Buddhist meditation sessions, witness traditional religious ceremonies, and learn about the island's diverse religious practices that have coexisted for centuries.",
          image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
      ],
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ],
      price: "$1,299",
      duration: "7 days",
      rating: 4.6,
      bestTime: "December to March",
      inclusions: [
        "4-star accommodation for 6 nights",
        "Traditional Sri Lankan meals",
        "Temple visits with monks",
        "Cooking class experience",
        "Cultural dance performances",
        "Historical site tours",
        "Local artisan workshops",
        "Airport transfers",
        "Professional cultural guide"
      ],
      exclusions: [
        "International flights",
        "Personal expenses",
        "Travel insurance",
        "Tips and gratuities",
        "Optional activities"
      ],
      facts: [
        "Ancient civilization exploration",
        "Traditional cultural experiences",
        "Authentic local interactions",
        "Historical site visits",
        "Spiritual journey opportunities"
      ],
      color: "green"
    },
    "beach-paradise": {
      id: 5,
      name: "Beach Paradise",
      description: "Relaxing coastal getaway with water sports and beach activities",
      longDescription: "Our Beach Paradise package is perfect for travelers seeking relaxation and adventure on Sri Lanka's stunning coastline. With luxurious beachfront accommodations, exciting water sports, and leisurely beach activities, this package offers the ultimate tropical getaway experience.",
      detailedInfo: [
        {
          title: "Luxurious Beach Accommodations",
          content: "Stay at premium beachfront resorts with direct access to pristine sandy beaches. Enjoy spacious rooms with ocean views, private balconies, and all modern amenities. Most properties feature multiple swimming pools, beachside dining options, and luxurious spa facilities.",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          title: "Exciting Water Sports",
          content: "Experience the thrill of various water sports including snorkeling, scuba diving, surfing, jet skiing, and sailing. Our expert instructors ensure your safety while helping you make the most of these exciting activities. All equipment is included in the package.",
          image: "https://images.unsplash.com/photo-1505228395891-9a51e7f86e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          title: "Leisurely Beach Activities",
          content: "Unwind with relaxing beach activities such as yoga sessions, beach volleyball, sunset cruises, and fishing trips. Enjoy beachside dining experiences with fresh seafood and local cuisine while watching the sunset over the Indian Ocean.",
          image: "https://images.unsplash.com/photo-1505228395891-9a51e7f86e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
      ],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1505228395891-9a51e7f86e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1505228395891-9a51e7f86e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ],
      price: "$1,799",
      duration: "6 days",
      rating: 4.8,
      bestTime: "November to April",
      inclusions: [
        "Beachfront resort stay for 5 nights",
        "Daily breakfast & dinner",
        "Water sports activities",
        "Snorkeling & diving",
        "Beach volleyball & games",
        "Sunset cruise",
        "Spa treatments",
        "24/7 beach service",
        "Airport transfers"
      ],
      exclusions: [
        "International flights",
        "Lunch",
        "Personal expenses",
        "Travel insurance",
        "Tips and gratuities",
        "Additional spa treatments"
      ],
      facts: [
        "Luxurious beachfront accommodations",
        "Exciting water sports included",
        "Relaxing beach activities",
        "Spa & wellness treatments",
        "Sunset cruise experience"
      ],
      color: "teal"
    }
  };

  const packageData = packages[id] || packages["silver-adventure"];

  // Determine color classes based on package
  const getColorClasses = (type) => {
    switch (packageData.color) {
      case 'yellow':
        return type === 'rating' ? 'bg-yellow-500/20 text-yellow-500' :
               type === 'price' ? 'bg-yellow-500/20 text-yellow-500' :
               type === 'heading' ? 'text-yellow-500' :
               type === 'fact' ? 'bg-yellow-500 rounded-full' :
               type === 'cta' ? 'from-yellow-600 to-yellow-800' :
               type === 'button' ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' :
               'bg-gray-800/50';
      case 'blue':
        return type === 'rating' ? 'bg-blue-500/20 text-blue-400' :
               type === 'price' ? 'bg-blue-500/20 text-blue-400' :
               type === 'heading' ? 'text-blue-400' :
               type === 'fact' ? 'bg-blue-400 rounded-full' :
               type === 'cta' ? 'from-blue-700 to-blue-900' :
               type === 'button' ? 'bg-blue-500 hover:bg-blue-600 text-white' :
               'bg-gray-800/50';
      case 'green':
        return type === 'rating' ? 'bg-green-500/20 text-green-400' :
               type === 'price' ? 'bg-green-500/20 text-green-400' :
               type === 'heading' ? 'text-green-400' :
               type === 'fact' ? 'bg-green-400 rounded-full' :
               type === 'cta' ? 'from-green-700 to-green-900' :
               type === 'button' ? 'bg-green-500 hover:bg-green-600 text-white' :
               'bg-gray-800/50';
      case 'teal':
        return type === 'rating' ? 'bg-teal-500/20 text-teal-400' :
               type === 'price' ? 'bg-teal-500/20 text-teal-400' :
               type === 'heading' ? 'text-teal-400' :
               type === 'fact' ? 'bg-teal-400 rounded-full' :
               type === 'cta' ? 'from-teal-700 to-teal-900' :
               type === 'button' ? 'bg-teal-500 hover:bg-teal-600 text-white' :
               'bg-gray-800/50';
      default: // gray
        return type === 'rating' ? 'bg-gray-500/20 text-gray-300' :
               type === 'price' ? 'bg-gray-500/20 text-gray-300' :
               type === 'heading' ? 'text-gray-300' :
               type === 'fact' ? 'bg-gray-400 rounded-full' :
               type === 'cta' ? 'from-gray-700 to-gray-900' :
               type === 'button' ? 'bg-gray-500 hover:bg-gray-600 text-white' :
               'bg-gray-800/50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${packageData.image}')`
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{packageData.name}</h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">{packageData.description}</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className={`flex items-center px-4 py-2 rounded-full ${getColorClasses('rating')}`}>
              <span className="mr-2">★</span>
              <span className="font-bold">{packageData.rating}/5.0</span>
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span>{packageData.duration}</span>
            </div>
            <div className={`px-4 py-2 rounded-full ${getColorClasses('price')}`}>
              <span className="font-bold">{packageData.price}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-4xl font-bold mb-6 ${getColorClasses('heading')}`}>Discover {packageData.name}</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {packageData.longDescription}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {packageData.facts.map((fact, index) => (
                <div key={index} className="flex items-center bg-gray-800/50 p-3 rounded-lg">
                  <div className={`w-2 h-2 mr-3 ${getColorClasses('fact')}`}></div>
                  <span className="text-gray-300">{fact}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={packageData.image} 
              alt={packageData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 ${getColorClasses('heading')}`}>What's Included in {packageData.name}</h2>
          
          <div className="space-y-20">
            {packageData.detailedInfo.map((info, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-3xl font-bold mb-6 text-white">{info.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {info.content}
                  </p>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={info.image} 
                    alt={info.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 ${getColorClasses('heading')}`}>Package Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-green-400">What's Included</h3>
            <ul className="space-y-3">
              {packageData.inclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-400">What's Not Included</h3>
            <ul className="space-y-3">
              {packageData.exclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 bg-gray-900/50">
        <h2 className={`text-4xl font-bold text-center mb-16 ${getColorClasses('heading')}`}>Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packageData.gallery.map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-64">
                <img 
                  src={img} 
                  alt={`${packageData.name} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">View Image</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-6">
        <div className={`max-w-4xl mx-auto text-center rounded-3xl p-12 bg-gradient-to-r ${getColorClasses('cta')}`}>
          <h2 className="text-4xl font-bold mb-6">Ready for Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your {packageData.name} package with Smile Sri Lanka and experience the magic of Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className={`font-bold py-4 px-8 rounded-full transition duration-300 transform hover:-translate-y-1 ${getColorClasses('button')}`}>
              Book Now - {packageData.price}
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition duration-300 backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageTemplate;