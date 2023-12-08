function HelpForm() {
  return (
    <div className="content">
      <div className="container-fluid">
        <div>
          <h4>Contact Us</h4>
        </div>
        <br />
        <form id="contactForm">
          <div className="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <br />
          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="number"
              class="form-control"
              id="phone"
              placeholder="Enter Phone Number"
            />
          </div>
          <br />
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter Phone Number"
            />
          </div>
          <br />
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              type="text"
              class="form-control"
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default HelpForm;
