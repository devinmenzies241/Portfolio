import React from "react";

const Avatar = (props) => {
  return  (
    <img 
    className="pfp"
    src={props.img}
    alt='avatar_img'
    width='300'
    height='300'
  />
  )
}

export default Avatar; 