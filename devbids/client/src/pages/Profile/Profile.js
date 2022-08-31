import "./Profile.css";
import ContractCard from "../../components/ContractCard/ContractCard";

export default function Profile() {
  return (
    <div className="form-container">
      <div className="profile-title">Profile</div>
      <div className="contracts-container">
        <div className="my-contracts">My Contracts</div>
        <div>
          <ContractCard />
        </div>
      </div>
    </div>
  );
}
