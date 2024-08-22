import React from "react";
import { EuiDatePicker, EuiFormRow } from "@elastic/eui";
import PropTypes from "prop-types";
import moment from "moment";

const MeetingDateField = ({ selected, setStartDate }) => {
  return (
    <EuiFormRow label="Set Meeting Date">
      <EuiDatePicker
        selected={selected}
        onChange={(date) => date && setStartDate(date)}
      />
    </EuiFormRow>
  );
};

MeetingDateField.propTypes = {
  selected: PropTypes.instanceOf(moment).isRequired,
  setStartDate: PropTypes.func.isRequired,
};

export default MeetingDateField;
// Path: zoomy/src/components/FormComponents/MeetingDurationField.js