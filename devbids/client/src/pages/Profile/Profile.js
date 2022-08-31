import "./Profile.css";
import React from "react";
import ContractCard from "../../components/ContractCard/ContractCard";
import ResponseCard from "../../components/ResponseCard/ResponseCard";

export default function Profile() {
  return (
    <div className="form-container">
      <div className="profile-title">Profile</div>
      <div className="contracts-container">
        <div className="my-contracts">My Contracts</div>
        <div></div>
      </div>
    </div>
  );
}
