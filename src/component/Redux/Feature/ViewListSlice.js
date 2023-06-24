import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  ViewList: []
}

export const ViewListSlice = createSlice({
  name: 'ViewList',
  initialState,
  reducers: {
    getViewList:(state,action)=>{
        state.ViewList = action.payload.data
    },
    filterViewList:(state,action)=>{
      state.ViewList=state.ViewList.filter(
        (el) =>
          el?.first_name
            .toLowerCase()
            .startsWith(action.payload.trim().toLowerCase())
    );
      }
  
  },
})

// Action creators are generated for each case reducer function
export const { getViewList ,filterViewList} = ViewListSlice.actions

export const ViewListAsync = () => async (dispatch,getState) =>{
   const res = await axios.get('https://reqres.in/api/users?page=2');
   dispatch(getViewList(res.data));

}


export default ViewListSlice.reducer