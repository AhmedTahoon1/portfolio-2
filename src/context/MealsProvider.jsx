import React, { createContext, useContext, useState } from "react";

export const Context = createContext();

const todayMeals = ["Backed Beans", "Backed Sweet Potatoes", "Backed Potatoes"];

const MealsProvider = ({ children }) => {
  const [meals] = useState(todayMeals);

  return <Context.Provider value={{ meals }}>{children}</Context.Provider>;
};

export const useMealsListContext = () => useContext(Context);

export default MealsProvider;
