import React from "react";
import FirstNameInput from "../common/FirstNameInput";
import LastNameInput from "../common/LastNameInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CustomerForm(props) {
  return (
    <main role="main" className="container">
      <div className="col-md-6">
        <h2>Manage Customer</h2>
        <div className="form-manage">
          <form onSubmit={props.onSubmit}>
            <FirstNameInput
              id="firsName"
              name="firsName"
              label="firsName"
              onChange={props.onChange}
              value={props.customer.firstName}
              error={props.errors.firstName}
            />

            <LastNameInput
              id="lastName"
              name="lastName"
              label="lastName"
              onChange={props.onChange}
              value={props.customer.lastName}
              error={props.errors.lastName}
            />

            <input type="submit" value="Save" className="btn btn-primary" />
            <Link to="/customers" className="btn btn-danger">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}

CustomerForm.propTypes = {
  customer: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default CustomerForm;
