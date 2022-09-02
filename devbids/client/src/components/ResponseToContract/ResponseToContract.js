import React, { useState } from 'react'
import './ResponseToContract.css'

export default function ResponseToContract() {
  const [formSubmit, setFormSubmit] = useState('incomplete')
  return (
    <div>
      {formSubmit === 'incomplete' && (
        <div className="response-container">
          <h3>Enter Your Response</h3>
          <form
            onSubmit={() => setFormSubmit('complete')}
            className="contract-form"
          >
            <div className="response-divider">
              <div className="response-section left-response">
                <label for="price-bid">Price Bid</label>
                <input type="number" id="price-bid" name="price-bid" required />
              </div>
              <div className="response-section right-response">
                <label for="completion-bid">Completed by Date Bid</label>
                <input
                  type="date"
                  id="completion-bid"
                  name="completion-bid"
                  required
                />
              </div>
            </div>
            <div className="response-section">
              <label for="linkedin-bid">LinkedIn</label>
              <input
                type="text"
                id="linkedin-bid"
                name="linkedin-bid"
                required
              />
            </div>
            <div className="response-section">
              <label for="description-bid">Message to User</label>
              <textarea id="description-bid" name="description-bid" required />
            </div>
            <button className="btn-submit">Submit Your Response Bid</button>
          </form>
        </div>
      )}
      {formSubmit === 'complete' && (
        <div>
          <h3>
            Thank you for submitting your bid. The author of this post will be
            in contact with you shortly if he/she wishes to accept your offer.
          </h3>
        </div>
      )}
    </div>
  )
}
