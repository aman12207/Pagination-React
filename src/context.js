import React,{ useState, useEffect,createContext, useContext } from 'react'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const Context = createContext();

export const ContextProvider = ({children}) =>{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [selectedData,setSelectedData] = useState([]);
    const [activeBtn, setActiveBtn] = useState(0);
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setSelectedData(data.slice(0,10));
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
    useEffect(() => {
      getProducts()
    }, [])
    
    useEffect(()=>{
      const arr = data.slice(activeBtn,parseInt(activeBtn)+10);
      setSelectedData(arr);
    },[activeBtn])
  return <Context.Provider value={{loading,data,selectedData,activeBtn,setActiveBtn}}>
    {children}
  </Context.Provider>
}

export const useGlobalContext = () =>{
  return useContext(Context);
}