import React, { useState, useEffect } from "react";
import { MapPin, Car, Hotel, Calendar, Users, FileText, Check } from "lucide-react";
import "./CustomPackages.css";

const destinations = [
  { 
    id: 1, 
    name: "Sigiriya", 
    avgTime: "5h", 
    timeHours: 5, 
    cost: 2500, 
    description: "Ancient rock fortress",
    hotels: [
      { id: 1, name: "Sigiriya Budget Inn", stars: 2, price: 3000 },
      { id: 2, name: "Sigiriya Garden Hotel", stars: 3, price: 5000 },
      { id: 3, name: "Sigiriya Luxury Resort", stars: 4, price: 8500 },
      { id: 4, name: "Sigiriya Palace Hotel", stars: 5, price: 15000 }
    ]
  },
  { 
    id: 2, 
    name: "Kandy", 
    avgTime: "6h", 
    timeHours: 6, 
    cost: 2000, 
    description: "Cultural capital",
    hotels: [
      { id: 1, name: "Kandy Guest House", stars: 2, price: 2800 },
      { id: 2, name: "Kandy City Hotel", stars: 3, price: 4500 },
      { id: 3, name: "Earl's Regency Hotel", stars: 4, price: 7000 },
      { id: 4, name: "Cinnamon Citadel", stars: 5, price: 12000 }
    ]
  },
  { 
    id: 3, 
    name: "Ella", 
    avgTime: "4h", 
    timeHours: 4, 
    cost: 1800, 
    description: "Mountain paradise",
    hotels: [
      { id: 1, name: "Ella Backpackers", stars: 2, price: 2500 },
      { id: 2, name: "Ella Mount View Hotel", stars: 3, price: 4000 },
      { id: 3, name: "98 Acres Resort", stars: 4, price: 9000 },
      { id: 4, name: "Nine Skies Hotel", stars: 5, price: 16000 }
    ]
  },
  { 
    id: 4, 
    name: "Galle", 
    avgTime: "3.5h", 
    timeHours: 3.5, 
    cost: 1500, 
    description: "Historic fort city",
    hotels: [
      { id: 1, name: "Galle Fort Inn", stars: 2, price: 3500 },
      { id: 2, name: "Galle Heritage Hotel", stars: 3, price: 5500 },
      { id: 3, name: "Jetwing Lighthouse", stars: 4, price: 10000 },
      { id: 4, name: "Amangalla Resort", stars: 5, price: 20000 }
    ]
  },
  { 
    id: 5, 
    name: "Nuwara Eliya", 
    avgTime: "5h", 
    timeHours: 5, 
    cost: 2200, 
    description: "Tea country",
    hotels: [
      { id: 1, name: "Tea Bush Hotel", stars: 2, price: 2700 },
      { id: 2, name: "Hill Club Hotel", stars: 3, price: 4800 },
      { id: 3, name: "Grand Hotel", stars: 4, price: 7500 },
      { id: 4, name: "Heritance Tea Factory", stars: 5, price: 14000 }
    ]
  },
  { 
    id: 6, 
    name: "Yala National Park", 
    avgTime: "7h", 
    timeHours: 7, 
    cost: 3000, 
    description: "Wildlife safari",
    hotels: [
      { id: 1, name: "Yala Budget Camp", stars: 2, price: 4000 },
      { id: 2, name: "Yala Safari Hotel", stars: 3, price: 6000 },
      { id: 3, name: "Cinnamon Wild", stars: 4, price: 11000 },
      { id: 4, name: "Wild Coast Tented Lodge", stars: 5, price: 25000 }
    ]
  },
  { 
    id: 7, 
    name: "Mirissa", 
    avgTime: "4h", 
    timeHours: 4, 
    cost: 2000, 
    description: "Beach & whales",
    hotels: [
      { id: 1, name: "Mirissa Beach Inn", stars: 2, price: 3200 },
      { id: 2, name: "Ocean View Hotel", stars: 3, price: 5000 },
      { id: 3, name: "Paradise Beach Club", stars: 4, price: 8000 },
      { id: 4, name: "Cape Weligama", stars: 5, price: 18000 }
    ]
  },
  { 
    id: 8, 
    name: "Polonnaruwa", 
    avgTime: "6h", 
    timeHours: 6, 
    cost: 2300, 
    description: "Ancient ruins",
    hotels: [
      { id: 1, name: "Polonnaruwa Rest House", stars: 2, price: 2900 },
      { id: 2, name: "Hotel Sudu Araliya", stars: 3, price: 4200 },
      { id: 3, name: "Deer Park Hotel", stars: 4, price: 6500 },
      { id: 4, name: "Vil Uyana Resort", stars: 5, price: 13000 }
    ]
  },
  { 
    id: 9, 
    name: "Anuradhapura", 
    avgTime: "6h", 
    timeHours: 6, 
    cost: 2400, 
    description: "Sacred city",
    hotels: [
      { id: 1, name: "Milano Tourist Rest", stars: 2, price: 2600 },
      { id: 2, name: "Palm Garden Village", stars: 3, price: 4300 },
      { id: 3, name: "Ulagalla Resort", stars: 4, price: 7800 },
      { id: 4, name: "Heritage Hotel", stars: 5, price: 12500 }
    ]
  },
  { 
    id: 10, 
    name: "Arugam Bay", 
    avgTime: "8h", 
    timeHours: 8, 
    cost: 3200, 
    description: "Surf paradise",
    hotels: [
      { id: 1, name: "Surf Hostel", stars: 2, price: 3000 },
      { id: 2, name: "Arugam Bay Hotel", stars: 3, price: 5200 },
      { id: 3, name: "Kottukal Beach House", stars: 4, price: 9500 },
      { id: 4, name: "Jetwing Surf Resort", stars: 5, price: 17000 }
    ]
  },
];

const vehicles = [
  { id: 1, name: "Private Car", costPerDay: 8000, capacity: 4 },
  { id: 2, name: "Van", costPerDay: 12000, capacity: 8 },
  { id: 3, name: "Luxury SUV", costPerDay: 15000, capacity: 6 },
  { id: 4, name: "Mini Bus", costPerDay: 18000, capacity: 15 },
];

const hotels = [
  { id: 1, name: "Budget Hotel", costPerNight: 3500, stars: 2 },
  { id: 2, name: "Standard Hotel", costPerNight: 4500, stars: 3 },
  { id: 3, name: "Deluxe Hotel", costPerNight: 7500, stars: 4 },
  { id: 4, name: "Luxury Resort", costPerNight: 12000, stars: 5 },
];

const CustomTripPlanner = () => {
  const [startDate, setStartDate] = useState("");
  const [tripDuration, setTripDuration] = useState(3);
  const [travelers, setTravelers] = useState(2);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [selectedHotel, setSelectedHotel] = useState(hotels[1]);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [destinationHotels, setDestinationHotels] = useState({});
  const [notes, setNotes] = useState("");

  // Calculate end date based on start date and duration
  const calculateEndDate = () => {
    if (!startDate || !tripDuration) return "";
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + tripDuration);
    return end.toISOString().split('T')[0];
  };

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const toggleDestination = (destination) => {
    setSelectedDestinations(prev => {
      const exists = prev.find(d => d.id === destination.id);
      if (exists) {
        // Remove destination and its hotel selection
        const newHotels = {...destinationHotels};
        delete newHotels[destination.id];
        setDestinationHotels(newHotels);
        return prev.filter(d => d.id !== destination.id);
      } else {
        // Add destination with default hotel (first one)
        setDestinationHotels(prev => ({
          ...prev,
          [destination.id]: destination.hotels[1] // Default to 3-star hotel
        }));
        return [...prev, destination];
      }
    });
  };

  const selectHotelForDestination = (destinationId, hotel) => {
    setDestinationHotels(prev => ({
      ...prev,
      [destinationId]: hotel
    }));
  };

  const calculateCosts = () => {
    const vehicleCost = selectedVehicle.costPerDay * tripDuration;
    const destinationCost = selectedDestinations.reduce((sum, d) => sum + d.cost, 0);
    
    // Calculate hotel costs based on selected hotels for each destination
    let hotelCost = 0;
    selectedDestinations.forEach(dest => {
      const hotel = destinationHotels[dest.id];
      if (hotel) {
        hotelCost += hotel.price * Math.ceil(travelers / 2);
      }
    });
    
    const totalCost = vehicleCost + destinationCost + hotelCost;
    
    return { vehicleCost, destinationCost, hotelCost, totalCost };
  };

  const costs = calculateCosts();

  const generateItinerary = () => {
    if (!startDate) return [];
    
    const daysArray = [];
    const HOURS_PER_DAY = 24;
    let currentDate = new Date(startDate);
    let remainingHoursInDay = HOURS_PER_DAY;
    let currentDayDestinations = [];
    let dayNumber = 1;
    
    selectedDestinations.forEach((dest, index) => {
      const destHours = dest.timeHours;
      
      // If this destination fits in current day
      if (destHours <= remainingHoursInDay) {
        currentDayDestinations.push(dest);
        remainingHoursInDay -= destHours;
      } else {
        // Save current day if it has destinations
        if (currentDayDestinations.length > 0) {
          daysArray.push({
            day: dayNumber,
            date: new Date(currentDate),
            destinations: [...currentDayDestinations],
            totalHours: HOURS_PER_DAY - remainingHoursInDay
          });
          dayNumber++;
          currentDate.setDate(currentDate.getDate() + 1);
        }
        
        // Start new day with this destination
        currentDayDestinations = [dest];
        remainingHoursInDay = HOURS_PER_DAY - destHours;
      }
      
      // If last destination, add the day
      if (index === selectedDestinations.length - 1 && currentDayDestinations.length > 0) {
        daysArray.push({
          day: dayNumber,
          date: new Date(currentDate),
          destinations: [...currentDayDestinations],
          totalHours: HOURS_PER_DAY - remainingHoursInDay
        });
      }
    });
    
    // Update trip duration based on calculated days
    if (daysArray.length > 0 && daysArray.length !== tripDuration) {
      setTripDuration(daysArray.length);
    }
    
    return daysArray;
  };

  const itinerary = generateItinerary();

  const formatDateShort = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleSaveTrip = () => {
    if (!startDate) {
      alert("Please select a starting date for your trip!");
      return;
    }
    if (selectedDestinations.length === 0) {
      alert("Please select at least one destination!");
      return;
    }
    
    const tripData = {
      startDate,
      endDate: calculateEndDate(),
      duration: tripDuration,
      travelers,
      vehicle: selectedVehicle.name,
      destinations: selectedDestinations.map(d => ({
        name: d.name,
        hotel: destinationHotels[d.id]?.name || 'Not selected'
      })),
      costs,
      notes
    };
    console.log("Trip Saved:", tripData);
    alert("Trip plan saved successfully! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Create Your <span className="text-blue-600">Dream Trip</span>
        </h1>
        <p className="text-gray-600 text-center mb-10">Design your perfect Sri Lankan adventure</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Form Inputs */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="text-blue-600" size={24} />
                Trip Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Trip Starting Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    min={getTodayDate()}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Trip Duration (days)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={tripDuration}
                    onChange={(e) => setTripDuration(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                {startDate && tripDuration && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Trip Ending Date
                    </label>
                    <div className="w-full px-4 py-3 rounded-lg border-2 border-blue-500 bg-blue-50 font-semibold text-gray-800">
                      {formatDate(calculateEndDate())}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Vehicle Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Car className="text-blue-600" size={24} />
                Select Vehicle
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vehicles.map(vehicle => (
                  <div
                    key={vehicle.id}
                    onClick={() => setSelectedVehicle(vehicle)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedVehicle.id === vehicle.id
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-800">{vehicle.name}</h3>
                        <p className="text-sm text-gray-600">Up to {vehicle.capacity} people</p>
                      </div>
                      {selectedVehicle.id === vehicle.id && (
                        <Check className="text-blue-600" size={20} />
                      )}
                    </div>
                    <p className="text-blue-600 font-bold mt-2">Rs {vehicle.costPerDay.toLocaleString()}/day</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel Selection - Remove this section */}
            {/* <div className="bg-white rounded-2xl shadow-lg p-6">
              ... old hotel selection code ...
            </div> */}

            {/* Destinations Selection with Hotels */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="text-blue-600" size={24} />
                Select Destinations & Hotels
              </h2>
              
              <div className="space-y-4">
                {destinations.map(dest => {
                  const isSelected = selectedDestinations.find(d => d.id === dest.id);
                  const selectedHotel = destinationHotels[dest.id];
                  
                  return (
                    <div key={dest.id} className="border-2 rounded-xl overflow-hidden transition-all">
                      {/* Destination Header */}
                      <div
                        onClick={() => toggleDestination(dest)}
                        className={`p-4 cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-green-50 border-green-500'
                            : 'bg-gray-50 border-gray-200 hover:bg-blue-50'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-800">{dest.name}</h3>
                            <p className="text-xs text-gray-600">{dest.description}</p>
                            <p className="text-sm text-gray-500 mt-1">
                              Visit time: {dest.avgTime} • Entry: Rs {dest.cost.toLocaleString()}
                            </p>
                          </div>
                          {isSelected && (
                            <Check className="text-green-600 flex-shrink-0" size={24} />
                          )}
                        </div>
                      </div>

                      {/* Hotel Selection for Selected Destination */}
                      {isSelected && (
                        <div className="p-4 bg-white border-t-2">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <Hotel size={16} className="text-blue-600" />
                            Choose Hotel in {dest.name}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {dest.hotels.map(hotel => (
                              <div
                                key={hotel.id}
                                onClick={() => selectHotelForDestination(dest.id, hotel)}
                                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                  selectedHotel?.id === hotel.id
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-blue-300'
                                }`}
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-sm text-gray-800">{hotel.name}</h5>
                                    <div className="flex gap-0.5 mt-1">
                                      {[...Array(hotel.stars)].map((_, i) => (
                                        <span key={i} className="text-yellow-500 text-xs">★</span>
                                      ))}
                                    </div>
                                    <p className="text-blue-600 font-bold text-sm mt-1">
                                      Rs {hotel.price.toLocaleString()}/night
                                    </p>
                                  </div>
                                  {selectedHotel?.id === hotel.id && (
                                    <Check className="text-blue-600" size={18} />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="text-blue-600" size={24} />
                Additional Notes (Optional)
              </h2>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special requests or preferences..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>

          {/* Right Section - Summary */}
          <div className="lg:col-span-1 space-y-6">
            {/* Cost Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Cost Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Vehicle</span>
                  <span className="font-semibold">Rs {costs.vehicleCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Destinations</span>
                  <span className="font-semibold">Rs {costs.destinationCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Hotel</span>
                  <span className="font-semibold">Rs {costs.hotelCost.toLocaleString()}</span>
                </div>
                <div className="border-t-2 pt-3 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total Estimated Cost</span>
                  <span className="text-blue-600">Rs {costs.totalCost.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleSaveTrip}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Save / Confirm Plan
              </button>
            </div>

            {/* Suggested Itinerary */}
            {selectedDestinations.length > 0 && startDate && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Suggested Itinerary</h2>
                
                <div className="space-y-4">
                  {itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 rounded-r-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-gray-800">Day {day.day}</h3>
                        <span className="text-xs text-gray-500">{formatDateShort(day.date)}</span>
                      </div>
                      {day.destinations.length > 0 ? (
                        <>
                          {day.destinations.map((dest, idx) => {
                            const hotel = destinationHotels[dest.id];
                            return (
                              <div key={idx} className="text-sm text-gray-600 mb-2 pl-2">
                                <div className="flex items-start gap-2">
                                  <MapPin size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                  <div className="flex-1">
                                    <span className="font-semibold text-blue-600">{dest.name}</span>
                                    <span className="text-gray-500"> — {dest.avgTime} • Rs {dest.cost.toLocaleString()}</span>
                                    {hotel && (
                                      <div className="flex items-center gap-1 mt-1">
                                        <Hotel size={12} className="text-gray-500" />
                                        <span className="text-xs text-gray-600">
                                          {hotel.name} ({hotel.stars}★) - Rs {hotel.price.toLocaleString()}/night
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          <div className="text-xs text-gray-500 mt-2 pl-2 font-semibold">
                            Total: {day.totalHours.toFixed(1)} hours
                          </div>
                        </>
                      ) : (
                        <p className="text-sm text-gray-400 italic">No destinations assigned</p>
                      )}
                    </div>
                  ))}
                </div>
                
                {itinerary.length > 0 && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Trip automatically adjusted to {itinerary.length} days</span> based on destination time requirements (24h per day)
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Quick Preview */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Preview</h2>
              
              <div className="space-y-2 text-sm">
                {startDate && (
                  <>
                    <p><span className="font-semibold">Start Date:</span> {formatDate(startDate)}</p>
                    <p><span className="font-semibold">End Date:</span> {formatDate(calculateEndDate())}</p>
                  </>
                )}
                <p><span className="font-semibold">Days:</span> {tripDuration}</p>
                <p><span className="font-semibold">Travelers:</span> {travelers}</p>
                <p><span className="font-semibold">Vehicle:</span> {selectedVehicle.name}</p>
                <p><span className="font-semibold">Destinations:</span> {selectedDestinations.length}</p>
                {selectedDestinations.length > 0 && (
                  <div className="mt-2 pt-2 border-t">
                    <p className="font-semibold mb-1">Hotels Selected:</p>
                    {selectedDestinations.map(dest => {
                      const hotel = destinationHotels[dest.id];
                      return (
                        <p key={dest.id} className="text-xs text-gray-600 ml-2">
                          • {dest.name}: {hotel ? `${hotel.name} (${hotel.stars}★)` : 'Not selected'}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTripPlanner;