import HelpForm from "./helpform";
import "./index.css";
function Help() {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="infocard">
          <div>
            <h4>Welcome to the Help Center</h4>
          </div>

          <HelpForm />
          </div>
      </div>
    </div>
  );
}
export default Help;
