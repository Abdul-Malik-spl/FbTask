import React,{useEffect,useState} from 'react'
import {useSelector}from 'react-redux'
import {FaSearch,FaList,FaFacebookMessenger,FaUsers,FaTv,FaHome,FaBell,FaImage} from 'react-icons/fa'
import './Nav.css';
import {useNavigate} from 'react-router-dom'


        // <div className=""></div>



const Nav = () => {
   let state =useSelector((s)=>s.data)
   useEffect(()=>{findState()},[])
   let [navState,setNavState]=useState({})
   let nav=useNavigate()
let goPost=()=>{
nav(`/Post?name=PostPage`)
   }
   let findState=()=>{
      let Ans=state.userList.find((a,b)=>{
         return a.showdetail==true
      })
      setNavState(Ans)
      // console.log(Ans)
   }
   let goMessage=()=>{
      nav(`/Message?name=Message`)
   }
   let goHome=()=>{
      nav(`/?name=home`)
   }
   let goFriend=()=>{
      nav('/Friends?name=Friends')
   }
    return (
        <div id="navbar">
          <div className="container">
             <div className="row">
                    <div className="col-6 col-md-6 col-lg-6 col-xlg-6 logo">
                          <h1>facebook</h1>
                    </div>
                       <div  className="col-6 col-md-6 col-lg-6 col-xlg-6  search-and-list">
                        
                         <div className="search-div col-3 col-md-2 col-lg-2 col-xlg-1 "><h3><FaSearch className="icons-nav"/></h3></div>
                            <div className="list-div col-3 col-md-2 col-lg-2 col-xlg-1 "><h3><FaList className="icons-nav"/></h3></div>

                         </div>
                     </div>
                     <div className="row" style={{marginTop:"5px",borderBottom:"1px solid gray"}}>
                        <span className="col-2 col-md-2 col-lg-2 col-xlg-2 second-nav-icons" onClick={goHome} title="home"><h3><FaHome/></h3></span>
                        <span className="col-2 col-md-2 col-lg-2 col-xlg-2 second-nav-icons"title="Friends details will update"><h3><FaUsers onClick={goFriend}/></h3></span>
                        <span className="col-2 col-md-2 col-lg-2 col-xlg-2 second-nav-icons"title="Message"><h3><FaFacebookMessenger onClick={goMessage}/></h3></span>
                        <span className="col-2 col-md-2 col-lg-2 col-xlg-2 second-nav-icons"title=" will update"><h3><FaTv/></h3></span>
                        <span className="col-2 col-md-2 col-lg-2 col-xlg-2 second-nav-icons" title="not update"><h3><FaBell/></h3></span>
                        <span className="col-2 col-md-2 col-lg-2 col-xlg-2 second-nav-icons" onClick={goHome}title="home"><h3><FaHome/></h3></span>
                     </div>
                     <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 col-xlg-12 row second-nav" style={{marginTop:"10px"}}>
                           <span className="nav-pic-circle col-3 col-md-3 col-lg-3 col-xlg-3"><span className="circle-pic">
                              <img alt="img"
                               src={navState.pic}
                              className="img-nav"/></span></span>
                           <span className="nav-text-inp col-6 col-md-6 col-lg-6 col-xlg-6"><input type="text" placeholder="write something hear" onClick={goPost}/></span>
                           <span className="nav-pic-add col-3 col-md-3 col-lg-3 col-xlg-3"><span><FaImage/></span></span>
                        </div>
                     </div>
             </div>
        </div>
    );
};

export default Nav;
