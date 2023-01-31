import React from "react";

const Avatar = (props) => {
  return  (
    <img 
    className="pfp img-fluid mx-auto d-block"
    src={props.img}
    alt='avatar_img'
  />
  )
}

export default Avatar; 