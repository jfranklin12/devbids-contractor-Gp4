import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import SearchBar from "../../components/SearchBar/SearchBar";
import Auth from "../../utils/auth";
import allCategories from "../../data/categories";
import { ADD_CONTRACT } from "../../utils/mutations";
import { QUERY_USER, QUERY_CONTRACTS } from "../../utils/queries";
import './CreateContract.css'

const CreateContract = () =>  {
  const [contractData, setContractData] = useState({
    contactName: "",
    email: "",
    title: "",
    category: "",
    price:  "",
    completionDate: "",
  });

  const [newContract, { error }] = useMutation(ADD_CONTRACT, {
    update(cache, {data: { newContract } }) {
      console.log(newContract);
      try { 
        const { contracts } = cache.readQuery({ query: QUERY_CONTRACTS });
        console.log(contracts);
        cache.writeQuery({
          query: QUERY_CONTRACTS,
          data: { contracts: [newContract, ...contracts] },
        });
      } catch(err) {
        console.error(err);
      }

      const { user } = cache.readQuery({ query: QUERY_USER });
      cache.writeQuery({
        query: QUERY_USER,
        data: { user: { ...user, contracts: [...user.contracts, newContract] } },
      });
    },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token){
      return false;
    }

    try {
      const { data } = await newContract({ variables: {
          contractData,
          username: Auth.getProfile().data.username,
        },
      });
      console.log(data);
      console.log(`^ is data`);
      setContractData('');
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div>
      <div className='create-new-contract-banner'></div>
      <div className="form-container">
        <h1>Create New Contract</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="input-section">
            <div className="form-section">
              <h2>Contact Information</h2>
              <label for="contact-name">Name:</label>
              <input type="text" id="contact-name" name="contactName" value="vince" />             
              <label for="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value="555-555-5555"
              />
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" value="vince@yang.com" />
            </div>
            <div className="form-section">
              <h2>Job Information</h2>
              <label for="title">Job Title:</label>
              <input type="text" id="title" name="title" value="do the thing"/>
              <label for="category">Skill Required:</label>
              <SearchBar items = {allCategories} id = "category" name="category" value="React"/>
              <label for="price" >Price:</label>
              <input className="priceInput" type="number" id="price" name="price" value="500"/>
              <label for="completion-date">Date to be completed by:</label>
              <input type="date" id="completion-date" name="completionDate" />
            </div>
            <div className="form-section">
              <h2>Job Description</h2>
              <textarea id="description" name="description" value="do the thing"/>
            </div>
          </div>
          <button className="btn-submit" type="submit" onSubmit={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateContract;