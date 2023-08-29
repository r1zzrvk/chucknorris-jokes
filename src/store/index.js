import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from '../reducers/app'

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
})