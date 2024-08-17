const LocationCard = ({ location, address, city, phone }) => {
    return (
      <div className="flex flex-col justify-between h-48 p-6 m-4 bg-white border border-gray-300 rounded-lg w-80">
        <div>
          <h2 className="mb-2 text-lg font-semibold">{location}</h2>
          <p>{address}</p>
          <p>{city}</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="mr-2 text-purple-500">
            {/* Location icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 1C8.14 1 5 4.14 5 8c0 4.47 5 11 7 13 2-2 7-8.53 7-13 0-3.86-3.14-7-7-7z"
              />
            </svg>
          </span>
          <p>{phone}</p>
        </div>
      </div>
    );
  };
  
  export default LocationCard;
  