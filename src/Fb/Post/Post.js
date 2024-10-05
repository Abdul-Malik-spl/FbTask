import React,{useState,useEffect} from 'react'
import {FaUsers,FaCamera} from 'react-icons/fa'
import './Post.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate}  from 'react-router-dom';
import { faImages,faUserTag,faSmile,faMapMarkerAlt,faVideo,faPaintBrush,faCamera,faFileImage,faFlag,faMusic} from '@fortawesome/free-solid-svg-icons';
import {useSelector,useDispatch} from 'react-redux'
import BottomNav from '../BottomNav/BottomNav.js'
import {showupdate} from '../Store/Slice.js'
let Post=()=>{
    let state=useSelector((s)=>s.data)
   let dispatch=useDispatch()
    
    useEffect(()=>{findPostPage()},[])
    let [postState,setPostState]=useState({})
    let [PostText,setPostText]=useState("")
    // let [photo,setPhoto]=useState(null)
    let [txtAreaC,settxtAreaC]=useState({color:"white",
        type:"normal",
        txtColor:"black",
        display:"block",
        stype:"default"
        })
        // let handlefile=(e)=>{
        //     let file=e.target.files[0]
        //     if(file){
        //         setPhoto(URL.createObjectURL(file))
        //     }
        // }
    let nav=useNavigate()
    // useEffect(() => { console.log(txtAreaC.color)
    //     },[txtAreaC])
    let findPostPage=()=>{
        let Ans=state.userList.find((a,b)=>{
            return a.showdetail==true
        })
        setPostState(Ans)
    }
    
    let handle=(e)=>{
setPostText(e.target.value)
    }
    let post=()=>{
        let creatObj={PostText,txtAreaC,likecount:0,like:false,comment:false,commentList:[]}
        // console.log(creatObj)
        let obj=state.userList.map((a,b)=>{
            return a.showdetail ? {...a,posts : [...a.posts,creatObj] } : a
        })
    //    console.log(obj)
       dispatch(showupdate(obj))
       setPostText("")
       defaultCh()
       
    }

    let colorsList=[{type:"normal",
        color:"red",
        txtColor:"white",
        display:"flex",
        stype:"nonDefault"
    },
        {type:"normal",
        color:"blue",
        txtColor:"white",
        display:"flex",
        stype:"nonDefault"
        },{
            type:"linear",
            deg:10,
            fcolor:"orange",
            scolor:"white",
            tcolor:"green",
            txtColor:"black",
        display:"flex",
        stype:"nonDefault"
        },{
            type:"linear",
            deg:45,
            fcolor:"violet",
            scolor:"yellow",
            tcolor:"skyblue",
            txtColor:"black",
        display:"flex",
        stype:"nonDefault"
        },{
            type:"normal",
        color:"green",
        txtColor:"white",
        display:"flex",
        stype:"nonDefault"
        }]

     let colorCh=(index)=>{
        // console.log(index)
        settxtAreaC(colorsList[index])
        
    }
    let goHome=()=>{
     nav(`/?name=Home`)
    }
    let defaultCh=()=>{
        settxtAreaC({color:"white",
            type:"normal",
            txtColor:"black",
            display:"block",
            stype:"default"
            })
    }
    // console.log(state.userList)
  
    return(<div id="Post">
    <div className="content" style={{background:"whitesmoke"}}>
        <div className="content-top" style={{padding:"10px"}}>
        <div className="class-top-post row">
            <div className="col-6 col-md-6 col-lg-6 col-xlg-6">
            <FontAwesomeIcon icon={faArrowLeft} onClick={goHome}/><span> create post</span>
            </div>
            <div className="col-6 col-md-6 col-lg-6 col-xlg-6 post-nav-btn">
                {PostText!=""?<button className="post-btn post-btn-color" onClick={post}>Post</button>:<button className="post-btn" disabled>Post</button>}
            
            </div></div>
        </div>
        <div className="row" style={{marginTop:"10px"}}>
            <div className="col-4 col-md-4 col-lg-4 col-xlg-4">
                <div className="Post-Userimg">
                <img src={postState.pic} className="ProfileImage"/>
            </div></div>
            <div className="col-8 col-md-8 col-lg-8 col-xlg-8 row">
                <div className="col-12 col-md-12 col-lg-12 col-xlg-12 "><h3>{postState.Name}</h3></div>
                
                <div className="four-column-list">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-6 col-xlg-6">
                            <div className="post-fourcolumn-style">
                             <FaUsers/> Friends
                            </div>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4 col-xlg-4">
                            <div className="post-fourcolumn-style">
                           + Album
                            </div>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4 col-xlg-4">
                            <div className="post-fourcolumn-style">
                            <FaCamera/> Off
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6 col-xlg-6">
                            <div className="post-fourcolumn-style">
                             <FaUsers/> Al label off
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
          </div>
          <div className="container" style={{marginTop:"10px"}}>
            {txtAreaC.type != "linear"?<textarea rows="10" cols="9" style={{ width: '100%',background:`${txtAreaC.color}`,color:`${txtAreaC.txtColor}`,display:`${txtAreaC.display}`}} placeholder="Write something"  className="txt-area" onChange={handle} value={PostText}/>:
            <textarea rows="10" cols="9" style={{ width: '100%',background: `linear-gradient(${txtAreaC.fcolor},${txtAreaC.scolor},${txtAreaC.tcolor})`,color:`${txtAreaC.txtColor}`,display:`${txtAreaC.display}`}} placeholder="Write something"  className="txt-area" onChange={handle} value={PostText}/>}
         </div>

{/* <div className="container" style={{marginTop:"10px"}}>
            {txtAreaC.type != "linear"?<input style={{ height:"40vh",width: '100%',background:`${txtAreaC.color}`,color:`${txtAreaC.txtColor}`,display:`${txtAreaC.display}`}} placeholder="Write something"  className="txt-area"/>:
            <input   style={{ height:"30vh",width: '100%',background: `linear-gradient(${txtAreaC.fcolor},${txtAreaC.scolor},${txtAreaC.tcolor})`,color:`${txtAreaC.txtColor}`,display:`${txtAreaC.display}`}} placeholder="Write something"  className="txt-area"/>}
         </div> */}

         <div className="container">
         <div className="colors-select row">
         <div className="col-2 col-md-2 col-lg-2 col-xlg-2" >
                <div className="color-box default"style={{background:"white",border:"1px solid gray"}} onClick={defaultCh}></div>
            </div>
          
            {colorsList.map((a,b)=>{
                return a.type !== "linear"?<div className="col-2 col-md-2 col-lg-2 col-xlg-2" key={b}>
                <div className="color-box" style={{background:`${a.color}`,border:"1px solid gray"}} onClick={()=>{colorCh(b)}} ></div>
            </div>: 
           <div className="col-2 col-md-2 col-lg-2 col-xlg-2" key={b}>
    <div className="color-box" style={{ background: `linear-gradient(${a.fcolor},${a.scolor},${a.tcolor})`,border:"1px solid gray"}} onClick={()=>{colorCh(b)}}></div>
           </div>

                
            })}
           
         </div></div>
       
      
    </div>
    <div className="add-category">
          <div className="photo-add" style={{color:"green"}}><FontAwesomeIcon icon={faImages} size="2x"/><span className="add-photo-txt">Photo</span></div>
          <div className="tag-icon photo-add"><FontAwesomeIcon icon={faUserTag} size="2x"/><span className="tag-txt add-photo-txt">Tag People</span></div>
          <div className="feeling-icon photo-add"><FontAwesomeIcon icon={faSmile} size="2x"/><span className="tag-txt add-photo-txt">Feeling/activity</span></div>
          <div className="location-icon photo-add"><FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/><span className="tag-txt add-photo-txt">Check in</span></div>
          <div className="live-icon photo-add"><FontAwesomeIcon icon={faVideo} size="2x"/><span className="tag-txt add-photo-txt">Live videos</span></div>
          <div className="backgrpound-icon photo-add"><FontAwesomeIcon icon={faPaintBrush} size="2x"/><span className="tag-txt add-photo-txt">Background color</span></div>
          <div className="Camera-icon photo-add"><FontAwesomeIcon icon={faCamera} size="2x"/><span className="tag-txt add-photo-txt">Camera</span></div>
          <div className="gif-icon photo-add"><FontAwesomeIcon icon={faFileImage} size="2x"/><span className="tag-txt add-photo-txt">GIF</span></div>
          <div className="flag-icon photo-add"><FontAwesomeIcon icon={faFlag} size="2x"/><span className="tag-txt add-photo-txt">Life event</span></div>
          <div className="music-icon photo-add"><FontAwesomeIcon icon={faMusic} size="2x"/><span className="tag-txt add-photo-txt">Music</span></div>
           
         
      
         </div>
         {/* <BottomNav/> */}
    </div>)
}
export default Post
