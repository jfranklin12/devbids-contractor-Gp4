import './Profile.css'
import React from 'react'
import ContractCard from '../../components/ContractCard/ContractCard'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

// Profile page
export default function Profile() {
  return (
    <div>
      <div className="profile-banner"></div>
      <div className="form-container">
        <div className="profile-title">Profile</div>
        <div className='profile-container'>
          {/* Details of user signed in */}
          <ProfileCard />
        </div>
        <div className="contracts-container">
          {/* All contracts the user has */}
          <div className="my-contracts">My Contracts</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
