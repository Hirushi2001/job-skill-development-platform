

// import React, { createContext, useState } from 'react';

// export const AppContext = createContext();

// export const AppContextProvider = (props) => {

//   const [searchFilter,setSearchFilter] = useState({
//   title:'',
//   location:''
//   })


//   const value = {
//   setSearchFilter,searchFilter,
//   isSearched,setIsSearched,

//   };

//   return (
//     <AppContext.Provider value={value}>
//       {props.children}
//     </AppContext.Provider>
//   );
// };



import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    title: '',
    location: ''
  });

  const [isSearched, setIsSearched] = useState(false); // Add this line to initialize the state

  const value = {
    setSearchFilter,
    searchFilter,
    isSearched, // Ensure this is added to the context value
    setIsSearched, // And this too
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
