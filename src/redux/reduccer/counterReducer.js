import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    DELETE__COMMENT: (state, action) => {
      let wishlist = state.wishlist;
      wishlist = wishlist.filter(item => item.id !== action.payload.id)
      return{
        wishlist
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
              wishlist
            }
          }else{
            return{
              ...state, wishlist:[...state.wishlist, chats]
            }
          }
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { ADD__COMMENT, DELETE__COMMENT } = counterSlice.actions

export default counterSlice.reducer