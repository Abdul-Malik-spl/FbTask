import React from 'react'
import Nav from '../Nav/Nav.js'
import Stories from '../Stories/Stories.js'
import {useSelector} from 'react-redux'
import Contents from '../Contents/Contents.js'
let Home=()=>{
let state=useSelector((s)=>s.data)
// console.log(state)
    return(
        <div id="home" style={{background:"whitesmoke",height:"100vh"}}>
            <Nav/>
            <Stories/>
            <Contents/>
        </div>
    )
}
export default Home