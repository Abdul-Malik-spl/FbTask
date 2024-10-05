import {createSlice} from '@reduxjs/toolkit'
import  userDetails from './Fb.json'

export let Slice=createSlice(
    {
        name:"abdul",
        initialState:{
            userList:userDetails.userDetail,
            isLog:false,
        },
        reducers:{
            showupdate:(state,action)=>{
                state.userList=action.payload
            },
            isLogin:(state,action)=>{
                state.isLog=action.payload
            }

        }
    }
)
export default Slice.reducer
export let {showupdate,isLogin} = Slice.actions