import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ADD__COMMENT: (state, action) => {
      let chats = {id: action.payload.id, img:action.payload.img, name: action.payload.name, rating: action.payload.rating, text: action.payload.text, menu: action.payload.menu}
      let chat = state.wishlist
      if(chat.length === 0){
        return{
          ...state, wishlist:[...state.wishlist, chats]
        }
      }else{
        for(let i = 0; i <= chat.length; i++){
          if(chats.id === chat[i].id){
            state.wishlist.filter(item => item.id !== action.payload.id)
          }else{
            return{
              ...state, wishlist:[...state.wishlist, chats]
            }
          }
        }
      }
    },
    defaultByState: (state) => {
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { ADD__COMMENT, defaultByState } = counterSlice.actions

export default counterSlice.reducer