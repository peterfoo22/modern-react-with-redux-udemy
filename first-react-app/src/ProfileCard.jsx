import React from 'react'

const ProfileCard = ({title, handle, image, description}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <div>Title is {title}</div>
          <div>Handle is {handle}</div>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard