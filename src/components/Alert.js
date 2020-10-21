import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AlertError from "@material-ui/lab/Alert";

const Alert = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <AlertError style={{ marginTop: "5px" }} severity="error" key={alert.id}>
        {alert.msg}
      </AlertError>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
