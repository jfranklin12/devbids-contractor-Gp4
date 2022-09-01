import "./ContractDetails.css";
import React from "react";
import { Row, Card, Col, Image } from "react-bootstrap";
import ContractCard from "../../components/CntractCard/ContractCard";

import Auth from "../../utils/auth";
import { QUERY_USER, QUERY_CONTRACTS, } from "../../utils/queries";

export default function ContractDetails(props) {
  constructor (props) {
    super (props);
    this.state = {
      responses: []
    }
  }
  const { contractId } = useParams();

  const { loading, data } = useQuery(QUERY_CONTRACTS, {
    variables: {contractId: contractId}
  });

  function renderResponses () {
    const { responses } = this.state;
      if ( responses.length === 0 ) {
        return null;
      }
      return (
        <div>
          {responses.map((e) => <ResponseCard />)}
        </div>
      )
  };

  
    return (
      <div className = "contractDetails">
        <ContractCard items={propshere} />
          <div>
              {renderResponses()}
          </div>
      </div>
    )
}
