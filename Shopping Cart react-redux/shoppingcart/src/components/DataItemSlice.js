import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    totalQuantity : 0
  },
  reducers: {
    
    addValueHandler: (state, action) => {
      state.value.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, addValueHandler } = counterSlice.actions

export default counterSlice.reducer