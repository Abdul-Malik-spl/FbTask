import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages,faUserTag,faSmile,faMapMarkerAlt,faVideo,faPaintBrush,faCamera,faFileImage,faFlag,faMusic} from '@fortawesome/free-solid-svg-icons';
import './Bottom.css'
let BottomNav=()=>{
    

    return(
        <div id="BottomNav">
                <div className="add-category">
          {/* <div className="photo-add" style={{color:"green"}}><FontAwesomeIcon icon={faImages} size="2x" type="file" accept="image/*"onChange={handleFile}/><span className="add-photo-txt">Photo</span></div> */}
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

        </div>
    )
}
export default BottomNav