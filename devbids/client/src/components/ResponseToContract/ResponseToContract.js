import './ResponseToContract.css'

export default function ResponseToContract() {
  return (
    <div className="response-container">
      <h3>Enter Your Response</h3>
      <form className="contract-form">
        <div className="response-divider">
          <div className="response-section left-response">
            <label for="price-bid">Price Bid</label>
            <input type="number" id="price-bid" name="price-bid" />
          </div>
          <div className="response-section right-response">
            <label for="completion-bid">Completed by Date Bid</label>
            <input type="text" id="completion-bid" name="completion-bid" />
          </div>
        </div>
        <div className="response-section">
          <label for="linkedin-bid">LinkedIn</label>
          <input type="text" id="linkedin-bid" name="linkedin-bid" />
        </div>
        <div className="response-section">
          <label for="description-bid">Message to User</label>
          <textarea id="description-bid" name="description-bid" />
        </div>
        <button className="btn-submit">Submit Your Response Bid</button>
      </form>
    </div>
  )
}
