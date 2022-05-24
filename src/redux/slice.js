import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  
  products:[
    {
      id: 1,
          image:"https://www.cookwithmanali.com/wp-content/uploads/2020/03/Roti-Recipe-Indian-flatbread.jpg",
      name: "Chapati",
      category: "breakfast",
      price: "20",
          description: "Your diet is a bank account.healthy food choices like chapati are good investments. "
      },
  
    {
      id: 2,
        image: "https://www.onmanorama.com/content/dam/mm/en/food/kerala-kitchen/images/2019/9/14/beef-pickle.jpg.transform/onm-articleimage/image.jpg",
      name: "Pickle",
      category: "evening",
      price: "25",
      description: "  "
       },
    {
      id: 3,
        image: "https://image.shutterstock.com/image-photo/stock-photo-indian-sweets-served-600w-725230546.jpg",
      name: "Sweets",
      category: "breakfast",
      price: "70",
      description: " "
          },
    {
      id: 4,
        image: "https://www.daringgourmet.com/wp-content/uploads/2013/06/Masoor-Dal-4-square-scaled.jpg",
      name: "Daal",
      category: "lunch",
      price: "150",
      description: "  "
       },
    {
      id: 5,
        image: "https://mytastycurry.com/wp-content/uploads/2018/05/Paneer-Balti.jpg",
      name: "Paneer Dish",
      category: "evening",
      price: "250",
      description: " "
        },
  ],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer