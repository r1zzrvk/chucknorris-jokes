import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { chuckNorrisAPI } from '../api'

export const fetchJokes= createAsyncThunk(
  'app/fetchJokes',
  async (searchValue) => {
    return chuckNorrisAPI.getJokes(searchValue).then(response => response.data)
  }
)

const initialState = {
  searchValue: '',
  jokes: [],
  totalItems: 0,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }) => {
      state.searchValue = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJokes.fulfilled, (state, {payload}) => {
      state.jokes = payload.result
      state.totalItems = payload.total
    })
  }
})

export const { setSearchValue } = appSlice.actions
