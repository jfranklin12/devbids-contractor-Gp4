import './Contracts.css'
import ContractCard from '../../components/ContractCard/ContractCard'
import { useQuery } from '@apollo/client'
import React, {useState} from 'react'
import Auth from '../../utils/auth'

import { QUERY_CONTRACTS } from '../../utils/queries'

export default function Contracts() {
  const { loading, data } = useQuery(QUERY_CONTRACTS)

  // Contracts data pulled from database
  const contracts = data?.contracts || []

  // to create new page
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }
  function goToCreate() {
    const token = Auth.loggedIn() ? Auth.getToken() : null
    if (!token) {
      return handleShow()
    }
    // It redirects users to create contract when clicking on the button
    window.location.assign('/createContract')
  }

  return (
    <div>
      <div className="contacts-banner"></div>
      <div className="form-container">
        <div className="contracts-title">
          Contracts
        </div>
        <button className="btn-submit btn-margin" size="lg" onClick={goToCreate}>
              Create a Contract
            </button>
        {contracts.map((contract, index) => (
          // The contract details will each be mapped to its own contract card
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
  )
}
