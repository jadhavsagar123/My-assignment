import { configureStore } from '@reduxjs/toolkit'
import  fileSlice  from '../slices/file'

export const store = configureStore({
  reducer: {
    authSlice:fileSlice
  },
})