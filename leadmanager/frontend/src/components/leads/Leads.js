import React, { Component } from "react";
import { connecect } from "react-redux";
import ProcTypes, { checkPropTypes } from "prop-types";
import { getLead } from "../../actions/leads";

export class Leads extends Component {
  static procTypes = {
    leads: checkPropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <h1>Leads List </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(mapStateToProps)(Leads);
