import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    
      const response = await axios.get("http://localhost:3000/data");
      setData(response.data.data);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};
export { DataProvider, DataContext, useData };
