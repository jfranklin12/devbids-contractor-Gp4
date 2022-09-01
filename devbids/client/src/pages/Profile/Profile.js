import "./Profile.css";
import React from "react";
import ContractCard from "../../components/ContractCard/ContractCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

export default function Profile() {
  return (
    <div>
      <div className="profile-banner"></div>
      <div className="form-container">
        <div className="profile-title">Profile</div>
        <div>
          <ProfileCard />
        </div>
        <div className="contracts-container">
          <div className="my-contracts">My Contracts</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
