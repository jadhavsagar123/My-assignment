import { configureStore } from '@reduxjs/toolkit'

import withdrawReducer from '../slices/withdrawSlice'

export const store = configureStore({
  reducer: {
    withdraw:withdrawReducer
  },
})