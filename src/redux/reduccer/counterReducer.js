import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    DELETE__COMMENT: (state, action) => {
      let chat = state.wishlist;
      chat = chat.filter(item => item.id !== action.payload.id)
      return{
          ...state, chat
      }
    },
    ADD__COMMENT: (state, action) => {
      let chats = {id: action.payload.id, img:action.payload.img, name: action.payload.name, rating: action.payload.rating, text: action.payload.text, menu: action.payload.menu, prId: action.payload.prId}
      return{
        ...state, wishlist:[...state.wishlist, chats]
    } 
    },
    defaultByState: (state) => {
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { DELETE__COMMENT, ADD__COMMENT, defaultByState } = counterSlice.actions

export default counterSlice.reducer