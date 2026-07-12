import { Children, createContext } from "react";

const backgroundColor = createContext();
const backgroundImages = 'linear-gradient(to right, #95CCDD, #4274D9, #293681)';



  <backgroundColor.Provider value={{ backgroundImages }}>
    {Children}
  </backgroundColor.Provider>


export default backgroundColor;
