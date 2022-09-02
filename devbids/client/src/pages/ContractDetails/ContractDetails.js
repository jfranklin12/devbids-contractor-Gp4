import "./ContractDetails.css";
import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import ContractCard from "../../components/ContractCard/ContractCard";
import ResponseCard from "../../components/ResponseCard/ResponseCard";
import { QUERY_CONTRACTS, QUERY_USER } from "../../utils/queries";
import { ADD_RESPONSE, DELETE_CONTRACT } from "../../utils/mutations";

export default function ContractDetails() {
  const { loading, data } = useQuery(QUERY_CONTRACTS);
  const [deleteContract, { error }] = useMutation(DELETE_CONTRACT);
  console.log(data);
  const userData = data?.contracts || {};
  console.log(userData);
  const handleDeleteContract = async (contractId) => {
    token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await deleteContract({
        variables: { contractId },
      });

    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  
  return (
  <div>
    <ContractCard />
  </div>
  );
}
