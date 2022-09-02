import "./ContractDetails.css";
import React from "react";
import { Row, Card, Col, Image } from "react-bootstrap";
import ContractCard from "../../components/CntractCard/ContractCard";
import Auth from "../../utils/auth";
import ResponseCard from "../../components/ResponseCard/ResponseCard"
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_CONTRACT, DELETE_RESPONSE } from "../../utils/mutations";
import { QUERY_CONTRACTS, } from "../../utils/queries";

export default function ContractDetails(props) {
  const { loading, data } = useQuery(QUERY_CONTRACTS);
  // , {
  //   variables: {contractId: contractId}
  // });

  const [deleteContract, { error }] = useMutation(DELETE_CONTRACT);



  const contracts = data?.contracts || [];

  console.log(data);
  console.log(contracts);

  const handleDeleteContract = async (contractId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { alldata } = await deleteContract({
        variables: { contractId },
      });

    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }


  function renderResponses () {
    const { responses } = this.state;
      if ( responses.length === 0 ) {
        return null;
      }
      return (
        <div>
          {responses.map((e) => <ResponseCard item={e}/>)}
        </div>
      )
  };

  
    return (
      <div className = "contractDetails">
        <ContractCard items={data} />
          <div>
              {renderResponses()}
          </div>
      </div>
    )
 }