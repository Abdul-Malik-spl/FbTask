import React,{useState,useEffect} from 'react'
import './Friends.css'
import Nav from '../Nav/Nav.js'
import {useSelector,useDispatch} from 'react-redux'

let Friends=()=>{
   
    let state=useSelector((s)=>s.data)
    let dispatch=useDispatch()
    let [userDetail,setUserDetail]=useState([])
    useEffect(()=>{filterDetails()},[])
    
    let filterDetails=()=>{
    let obj=state.userList.filter((a,b)=>{
        return a.showdetail==false
    })
    setUserDetail(obj)
    }
    return(
        <div>
            <Nav/>
            <div className="friends-head"><h3>Friends</h3></div>
            <div className="row message-boxes">
                {userDetail.map((a,b)=>{
                    return <div className="col-12 col-md-12 col-lg-12 col-xlg-12 row marginboxstyle">
                        <div className="col-2 col-md-1 col-lg-1 col-xlg-1">
                            <img src={a.pic} className="message-profile"/>
                        </div>
                        <div className="col-10 col-md-9 col-lg-9 col-xlg-9">
                            <h3>{a.Name}</h3>
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}
export default Friends