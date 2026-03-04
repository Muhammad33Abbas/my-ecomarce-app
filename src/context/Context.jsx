import React, {  useState } from 'react'
// import Box from '@mui/material'
import { createContext } from 'react'


export const CardContext = createContext();


const Context = ({children}) => {
    const [SelectedCard, SetSelectedCard] = useState([]);
    const [WishCard, setWishCard] = useState([])
    const [TotalPrice,setTotalPrice] = useState(0);
       const number = 10000000000;






const HandleCard = (cardData) => {
  SetSelectedCard((prev) => {
    const exist = prev.find((item) => item.Pname === cardData.Pname);

    if (exist) {
      console.log("Item already in cart");
      return prev;
    }

    console.log("Item added to cart");
    return [...prev, { ...cardData }];
  });
};

    const HandleWishCard = (cardData) => {

      setWishCard((prev) => {
        const avilableCard =  prev.find((item) => item.Pname === cardData.Pname);
        console.log("card alreday exists");
        if (avilableCard) return prev;
        console.log("card not exist")

        return [...prev, {...cardData, id: Date.now()}];
      })

      // const newItem = {
      //   ...cardData, 
      //   id : Date.now() //give the unique id to every card
      // }
      // setWishCard((prev) => [...prev , newItem]);
      // console.log(cardData);
    }

     const deleteTask =  (id) => {
    setWishCard((prev) => prev.filter((t) => t.id !== id));
    console.log("card Succeccfully deleted.")
  };









  return (
    <CardContext.Provider value={{HandleCard, number, SelectedCard, HandleWishCard, WishCard, deleteTask}}>
{children}
      
    </CardContext.Provider>
  )
}

export default Context;
