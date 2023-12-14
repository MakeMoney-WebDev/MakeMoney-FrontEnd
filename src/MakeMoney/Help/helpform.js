function HelpForm() {
  return (
    <>
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
              placeholder="Enter Email"
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
              placeholder="Enter Full Name"
            />
          </div>
          <br />
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              type="text"
              class="form-control"
              id="message"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <br />
          <button type="submit" class="btn btn-custom-filled">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default HelpForm;
