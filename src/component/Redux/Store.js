import { configureStore } from '@reduxjs/toolkit'
import ViewListSlice from './Feature/ViewListSlice'

export const store = configureStore({
  reducer: {
    list : ViewListSlice,
  },
})