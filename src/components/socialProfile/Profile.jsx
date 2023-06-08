import React from 'react';
import './profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className="avatar"
        />
        <p className="name secondaryDescription">Petra Marica</p>
        <p className="tag secondaryDescription">@pmarica</p>
        <p className="location secondaryDescription">Salvador, Brasil</p>
      </div>

      <ul className="stats">
        <li className="secondaryDescription">
          <span className="label">Followers</span>
          <span className="quantity">1000</span>
        </li>
        <li className="secondaryDescription">
          <span className="label">Views</span>
          <span className="quantity">2000</span>
        </li>
        <li className="secondaryDescription">
          <span className="label">Likes</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
