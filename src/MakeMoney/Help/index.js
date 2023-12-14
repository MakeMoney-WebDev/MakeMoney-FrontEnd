import HelpForm from "./helpform";
import "./index.css";
function Help() {
  return (
    <div className="content">
      <div className="container-fluid">
          <div>
            <h4>Welcome to the Help Center</h4>
          </div>
          <div className="infocard">

          <HelpForm />
          </div>
      </div>
    </div>
  );
}
export default Help;
