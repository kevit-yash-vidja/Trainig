import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../../components/DataItemSlice'

export default configureStore({
  reducer: {
    counter : counterSlice.reducer
  }
})