import React from 'react';
import "./Postimage.css"
import Avatar from "@material-ui/core/Avatar";
function Post({username,caption,imageUrl}) {
  return( 
  <div className="post">
  {/* 1st post   */}
    <div className="post_header">
      <Avatar className="post_avatar" alt='souvik' src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258__340.png"/>
      <h3 className="username">{username}</h3>
    </div>
      {/* header -> username+avatar */}
      {/* image */}
      <img className="post_image" src={imageUrl} alt="" />
      {/* username+caption */}
          <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
  </div>
)
}
export default Post;
