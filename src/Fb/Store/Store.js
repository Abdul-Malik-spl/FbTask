import {configureStore} from '@reduxjs/toolkit'
import fbUserList from './Slice.js'

export let globalState=configureStore(
    {
        reducer:{
            data:fbUserList,
        }
    }
)