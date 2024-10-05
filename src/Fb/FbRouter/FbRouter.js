import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../Home/Home.js'
import Post from '../Post/Post.js'
import Login from '../Login/Login.js'
import Message from '../Message/Message.js'
import Friends from '../Friends/Friends.js'
import {useSelector} from 'react-redux'

let FbRouter=()=>{
let state=useSelector((s)=>s.data)
    return(
        <Router basename="/FbTask">
       
            {state.isLog? <Routes>
                <Route path="*" element={<Message/>}/> 
                <Route path="/" element={<Home/>}/> 
            <Route path='/Post' element={<Post/>}/>
            <Route path='/Message' element={<Message/>}/>
            <Route path='/Friends' element={<Friends/>}/>
        </Routes>:<Routes>
        <Route path="/" element={<Login/>}/>
        </Routes>}
        
        
        </Router>
    )
}
export default FbRouter