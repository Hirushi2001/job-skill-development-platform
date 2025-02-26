import React, { useContext, useRef } from 'react';
import location from '../../../assets/location.jpg';
import search from '../../../assets/search.jpg';
import bgImage from '../../../assets/bgim.jpg';
import { AppContext } from '../../context/AppContext';

function Hero() {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null); 

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value, 
    });
    setIsSearched(true);
  };

  return (
    <div className="relative h-[600px] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-center relative">
        <div className="w-full max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight pointer-events-none">
            Your dream job awaits!
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto pointer-events-none">
            Search, learn, and connect with opportunities that match your expertise
          </p>
          <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 sm:mx-auto mb-6">
            <div className="flex items-center">
              <img className="h-4 sm:h-5 w-5" src={search} alt="Search Icon" />
              <input
                type="text"
                placeholder="search for jobs"
                className="max-sm:text-xs p-2 rounded outline-non w-full"
                ref={titleRef}
              />
            </div>
            <div className="flex items-center">
              <img className="h-4 sm:h-5 w-5" src={location} alt="Search Icon" />
              <input
                type="text"
                placeholder="location"
                className="max-sm:text-xs p-2 rounded outline-non w-full"
                ref={locationRef} // Ensure you are using 'locationRef' here
              />
            </div>
            <button onClick={onSearch} className="bg-blue-900 px-6 py-2 rounded text-white mb-1 mx-1 mt-1">
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
