import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reduccer/counterReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})