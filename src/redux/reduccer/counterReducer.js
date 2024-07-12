import { createSlice } from '@reduxjs/toolkit'
import { number } from 'yup';

const initialState = {
  wishlist: [],
  page: [
    {id: 0, number: 1},
    {id: 1, number: 1},
    {id: 2, number: 1},
    {id: 3, number: 1},
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    DELETE__COMMENT: (state, action) => {
      let wishlist = state.wishlist;
      wishlist = wishlist.filter(item => item.id !== action.payload.id)
      return{
        ...state, wishlist
      }
    },
    ADD__COMMENT: (state, action) => {
      let chats = {id: action.payload.id, img: action.payload.img, name: action.payload.name, rating: action.payload.rating, text: action.payload.text, menu: action.payload.menu}
      let wishlist = state.wishlist
      if(wishlist.length === 0){
        return{
          ...state, wishlist:[...state.wishlist, chats]
        }
      }else{
        for(let i = 0; i <= wishlist.length; i++){
          if(chats.id === wishlist[i].id){
            wishlist = wishlist.filter(item => item.id !== action.payload.id)
            return{
              ...state, wishlist
            }
          }else{
            return{
              ...state, wishlist:[...state.wishlist, chats]
            }
          }
        }
      }
    },
    EDIT__PAGE: (state, action) => {
      let page = state.page;
      page = page.filter(item => item.id === action.payload.id ? item.number = action.payload.number : item.number)
      state.page = page
    }
  },
})

// Action creators are generated for each case reducer function
export const { ADD__COMMENT, DELETE__COMMENT, EDIT__PAGE } = counterSlice.actions

export default counterSlice.reducer