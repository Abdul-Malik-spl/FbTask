import React,{useState} from 'react';
import './Login.css';
import {useSelector,useDispatch} from 'react-redux'
import {showupdate,isLogin} from '../Store/Slice.js'
const Login = () => {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let state=useSelector((s)=>s.data)
    let dispatch=useDispatch()
    //  console.log(state.userList)
    let handleLog=(e)=>{
        if(e.target.name=="email"){
            setEmail(e.target.value)
        }
        else if(e.target.name=="password"){
            setPassword(e.target.value)
        }

    }
    let login=(e)=>{
     e.preventDefault()
     let obj=state.userList.map((a,b)=>{
        return a.email==email&&a.password==password?{...a,showdetail:true}:a
     })
     dispatch(showupdate(obj))
    
   let logFind=state.userList.filter((a,b)=>{
    return a.email==email&&a.password==password
   })
   if(logFind.length!=0){
 
    dispatch(isLogin(true))
   }
   else{
    alert("userNot Found")
   }

    }
    
    return (
        <div className="Login">
            <div style={{background:"whitesmoke",height:"60vh"}}>
                <div className="img-div">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" width="250" alt="Logo" className="img-size-log" />
                </div>
                <div className="form-content">
                    <form>
                        <div className="form-header">Log in to Facebook</div>
                        <div className="form-d">
                            <div className="txt-btn-div">
                                <input type="email" placeholder="Enter your Email" className="txt-btn" onChange={handleLog} name="email" value={email}/>
                            </div>
                            <div className="txt-btn-div">
                                <input type="password" placeholder="Enter Password" className="txt-btn" onChange={handleLog} name="password" value={password}/>
                            </div>
                            <div className="txt-btn-div">
                                <button className="txt-btn login-btn" onClick={login}>Log in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
