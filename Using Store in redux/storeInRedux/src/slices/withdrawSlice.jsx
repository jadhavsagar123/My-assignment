import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:  2490701,
  
}

export const withdrawSlice = createSlice({
  name: 'withdraw',
  initialState,
  reducers: {
    decrementByTenThousand: (state) => {
      state.value -= 10000
    },
    decrementByFiveThousand: (state) => {
      state.value -= 5000
    }
  },
})

// Action creators are generated for each case reducer function
export const { decrementByTenThousand, decrementByFiveThousand } = withdrawSlice.actions

export default withdrawSlice.reducer