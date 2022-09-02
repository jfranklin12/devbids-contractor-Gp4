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
    username: Auth.getProfile().data.username,
    title: "",
    category: "",
    price:  0,
    description: "",
    contractDate: "",
  });

  const [newContract, { error }] = useMutation(ADD_CONTRACT);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContractData({...contractData, [name]: value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token){
      return false;
    } 

    const userData = JSON.parse(localStorage.getItem('user'));
    try {
      const { data } = await newContract({
        variables: { ...contractData, user_id: userData._id },
      });
      
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
              <h2>Job Information</h2>
              <label for="title">Username:</label>
              <input type="text" id="username" name="username" onChange={handleChange} value={Auth.getProfile().data.username} disabled={true}/>
              <label for="title">Job Title:</label>
              <input type="text" id="title" name="title" onChange={handleChange}/>
              <label for="category">Skill Required:</label>
              <input type="text" id="category" name="category" onChange={handleChange}/>
              <label for="price" >Price:</label>
              <input className="priceInput" type="number" id="price" name="price" onChange={handleChange}/>
              <label for="completion-date">Date to be completed by:</label>
              <input type="date" id="completion-date" name="contractDate" onChange={handleChange}/>
            </div>
            <div className="form-section">
              <h2>Job Description</h2>
              <textarea id="description" name="description" onChange={handleChange}/>
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