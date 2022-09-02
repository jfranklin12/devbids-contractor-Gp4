import "./Profile.css";
import React from "react";
import ContractCard from "../../components/ContractCard/ContractCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useQuery } from "@apollo/client";

import { QUERY_USER_CONTRACTS } from "../../utils/queries";

export default function Profile() {
  const { loading, data } = useQuery(QUERY_USER_CONTRACTS);

  const contracts = data?.contracts || [];
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
          <div>
            {contracts.map((contract, index) => (
              <ContractCard
                title={contract.title}
                price={contract.price}
                contractDate={contract.contractDate}
                description={contract.description}
                username={contract.username}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
