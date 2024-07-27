import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist: [],
  page: [
    {id: 0, number: 1},
    {id: 1, number: 1},
    {id: 2, number: 1},
    {id: 3, number: 1},
  ],
  sort: "&_sort=id&_order=desc",
  list: ""
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
      return{
        ...state, wishlist:[...state.wishlist, chats]
      }
    },
    EDIT__PAGE: (state, action) => {
      let page = state.page;
      page = page.filter(item => item.id === action.payload.id ? item.number = action.payload.number : item.number)
      state.page = page
    },
    EDIT__SORT: (state, action) => {
      let sort = state.sort;
      sort = sort !== action.payload ? sort = action.payload : sort
      state.sort = sort
    },
    EDIT__LIST: (state, action) => {
      let list = state.list;
      list = list !== action.payload ? list = action.payload : list
      state.list = list
    }
  },
})

// Action creators are generated for each case reducer function
export const { ADD__COMMENT, DELETE__COMMENT, EDIT__PAGE, EDIT__SORT, EDIT__LIST } = counterSlice.actions

export default counterSlice.reducer