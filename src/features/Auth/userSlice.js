
import { createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../../api/userAPI';

const { createSlice } = require('@reduxjs/toolkit');

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        //payload là data truyền vào
        //call API to register
        const data = await userAPI.register(payload);
      
      //save data to local storage
      localStorage.setItem('access_token',data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user));


      //return user data
      return data.user;
    }
  )

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        setting: {},
    },
    reducers: {

    },
    extraReducers:{
        [register.fulfilled]:(state,action)=>{
            state.current = action.payload;
        }
    }
});

const { reducer } = userSlice;
export default reducer;
