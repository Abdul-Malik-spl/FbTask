import React,{useState,useEffect} from 'react'
import './Contents.css'
import {useSelector,useDispatch} from 'react-redux'
import {showupdate} from '../Store/Slice.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp,faComment,faShare,faEllipsisH, faEllipsisV, faTimes, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

let Contents=()=>{
let state=useSelector((s)=>s.data)
let dispatch=useDispatch()
useEffect(()=>{findPost()},[state.userList])
let [content,setContent]=useState({})
let [userComment,setUserComment]=useState("")
// let [liked,setLiked]=useState(false)
let findPost=()=>{
    let obj=state.userList.find((a,b)=>{
        return a.showdetail==true
    })
    setContent(obj)
}
// console.log(content)
let like=(index)=>{

    let obj=state.userList.map((a,b)=>{
        return a.showdetail?{...a,posts:a.posts.map((a,b)=>{
            return  b==index?{...a,like:true}:a})}:a
    })
    let objAns=obj.map((a,b)=>{
        return a.showdetail?{...a,posts:a.posts.map((a,b)=>{
            return b==index?{...a,likecount:a.likecount+1}:a
        })}:a
    })
    dispatch(showupdate(objAns))
//  console.log(objAns)

}
let dislike=(index)=>{
let obj=state.userList.map((a,b)=>{
    return a.showdetail?{...a,posts:a.posts.map((a,b)=>{
        return b==index?{...a,like:false}:a
    })}:a
})
let objAns=obj.map((a,b)=>{
    return a.showdetail?{...a,posts:a.posts.map((a,b)=>{
        return b==index?{...a,likecount:a.likecount-1}:a
    })}:a
})
dispatch(showupdate(objAns))
// console.log(objAns)
}
let comment=(index)=>{
let obj=state.userList.map((a,b)=>{
    return a.showdetail?{...a,posts:a.posts.map((a,b)=>{
        return b==index?{...a,comment:true}:a
    })}:a
})
// console.log(obj)
dispatch(showupdate(obj))
}
let share=()=>{

}
let clearPost=(index)=>{
    let obj=state.userList.map((a,b)=>{
        return a.showdetail==true?{...a,posts:a.posts.filter((c,d)=>{
            return d!=index
        })}:a
    })
    // console.log(obj)
    dispatch(showupdate(obj))

}
let cmtcancel=(index)=>{
let obj=state.userList.map((a,b)=>{
    return a.showdetail?{...a,posts:a.posts.map((a,b)=>{
        return b==index?{...a,comment:false}:a
    })}:a
})
dispatch(showupdate(obj))
}
let handle=(e)=>{
setUserComment(e.target.value)
}
let addComment=(index)=>{
    if(userComment!=""){
         let obj={userComment}
         let setobj=state.userList.map((a,b)=>{
            return a.showdetail?{...a,posts:a.posts.map((a,b)=>{
                return a.comment?{...a,commentList:[...a.commentList,obj]}:a
            })}:a
         })
         console.log(setobj)
         dispatch(showupdate(setobj))
         setUserComment("")
         
    }
    else{
        alert("add somthing")
    }
    console.log(state.userList)
}

    return(
        <div id="Contents">
            <div className="container">
                
                <div className="row">
                {content.posts?.length!=0?
                <div className="col-12 col-md-9 col-lg-7 col-xlg-6 row">

                    {content.posts?.map((a,b)=>{
                        return(
                            <div className="col-12 col-md-12 col-lg-12 col-xlg-12"key={b}>
                                <div className="feedboxstyle">
                                    <div className="feedhead row">
                                        <div className="col-5 col-md-5 col-lg-5 col-xlg-4 feedpichead">
                                            <img src={content.pic} className="feedProfileImg"/>
                                            <span><h5>{content.Name}</h5></span>
                                        </div>
                                        <div className="col-7 col-md-7 col-lg-7 col-xlg-8 dot-close-icon row">
                                            <div className="dot-con row col-5 col-md-5 col-lg-5 col-xlg-5">
                                            <div className=" col-3 col-md-3 col-lg-3 col-xlg-3">
                                        <FontAwesomeIcon icon={faEllipsisH} /></div>
                                        <div className=" col-3 col-md-3 col-lg-3 col-xlg-3"> <FontAwesomeIcon icon={faTimes} onClick={()=>clearPost(b)} /> 
                                        </div></div>
                                        </div>
                                    </div>
                                    {a.txtAreaC.stype=="default"? <div className="feedtxtbody">
                                    <h4>{a.PostText}</h4>
                                    </div>:<div className="feedtxtbodytemplate" style={a.txtAreaC.type=="normal"?{background:`${a.txtAreaC.color}`,color:`${a.txtAreaC.txtColor}`}:
                                    {background:`linear-gradient(${a.txtAreaC.fcolor},${a.txtAreaC.scolor},${a.txtAreaC.tcolor})`,color:`${a.txtAreaC.txtColor}`}}>
                                        {a.PostText}</div>}
                                   <div className="feedfoot row">
                                      <div className="col-4 col-md-4 col-lg-4 col-xlg-4 cmnsylff">
                                         {a.like==true?<span className="cmnsylicons">
                                                 <FontAwesomeIcon icon={faThumbsUp} onClick={()=>dislike(b)} className="likedclr"/><span> {a.likecount}</span>
                                            </span>:<span className="cmnsylicons">
                                                 <FontAwesomeIcon icon={faThumbsUp} onClick={()=>like(b)}/><span> like</span>
                                            </span>}  
                                        </div>
                                                 <div className="col-4 col-md-4 col-lg-4 col-xlg-4 cmnsylff">
                                                 <span className="cmnsylicons"onClick={()=>comment(b)}>
                                                      <FontAwesomeIcon icon={faComment} /><span> comment</span>
                                                       </span>
                                                     
                                            </div>
                                                     <div className="col-4 col-md-4 col-lg-4 col-xlg-4 cmnsylff">
                                                        <span className="cmnsylicons">
                                                          <FontAwesomeIcon icon={faShare} onClick={share}/><span> share</span>
                                                          </span>
                                                         
                                                    </div>
                                                    <div className="col-12 col-md-12 col-lg-12 col-xlg-12 commonton-div">
                                                    {a.comment==true?<div className="commenton">
                                                        <div className="row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xlg-12 row commentHead">
                                                                <span>Comments</span>
                                                                <span><FontAwesomeIcon icon={faTimes}  onClick={()=>cmtcancel(b)}/></span>
                                                            </div>
                                                            <div className="col-8 col-md-8 col-lg-8 col-xlg-8">
                                                                <div className="cmtbox-btn-style"><input type="text" placeholder="comment" onChange={handle} name="userComment" value={userComment}/></div>
                                                            </div>
                                                            <div className="col-4 col-md-4 col-lg-4 col-xlg-4">
                                                                <div className="cmtbox-btn-style cmtbtn"><button onClick={()=>addComment(b)}>send</button></div>
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="col-12 col-md-12 col-lg-12 col-xlg-12">
                                                        <div>{a.commentList.map((a,b)=>{
                                                            return <div className="col-12 col-md-12 col-lg-12 col-xlg-12 r">
                                                                <div className='commentinnerstyle '>
                                                                    <div className="container">
                                                                    <div className="row">
                                                                    <div className="comment-top col-2 col-md-1 col-lg-1 col-xlg-1"><img src={content.pic} className='comment-img'/></div>
                                                                    <div className='commentName col-8 col-md-8 col-lg-8 col-xlg-8'>{content.Name}</div>

                                                                    </div>
                                                                    <div className="container">
                                                                   <div className="row">
                                                                   <div className="commentUser col-12 col-md-12 col-lg-12 col-xlg-12">{a.userComment }</div>

                                                                   </div></div>
                                                                    </div></div>
                                                                </div>
                                                        })}</div></div>
                                                       </div>:""}
                                                    </div>
                                   </div>
                                </div>
                                 
                            </div>
                           
                           
                            
                        )
                    })}
                    
                 </div>
                 :<div  className="col-12 col-md-9 col-lg-7 col-xlg-6 "><p className="paraformsg">First  Add the post then next you will see it on the home page,  click nav write somthing</p></div>}

                 <div className="col-md-3 col-lg-5 col-xlg-6 bigscreen-right">
                    {/* {console.log(content.posts?.length)} */}
                              {content.posts?.length !=0? <div className="msgforlap">SuccessFully You Added Post</div>:<div className="msgforlap"> first  add the post then next you will see it on the home page</div>}  
                            </div>
                     </div>
                     
            </div>
       
        </div>
    )
}
export default Contents