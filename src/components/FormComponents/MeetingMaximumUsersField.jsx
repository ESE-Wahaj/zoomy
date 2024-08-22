import React from "react";
import { EuiFieldNumber, EuiFormRow } from "@elastic/eui";

function MeetingMaximumUsersField({
  value,
  setSize,
}) {
  return (
    <EuiFormRow label="Maximum People">
      <EuiFieldNumber
        min={1}
        max={50}
        placeholder="Maximum People"
        value={value}
        onChange={(e) => {
          const parsedValue = parseInt(e.target.value);
          if (!isNaN(parsedValue)) {
            if (parsedValue < 1) {
              setSize(1);
            } else if (parsedValue > 50) {
              setSize(50);
            } else {
              setSize(parsedValue);
            }
          }
        }}
      />
    </EuiFormRow>
  );
}

export default MeetingMaximumUsersField;
// Path: zoomy/src/components/FormComponents/MeetingMaximumUsersField.jsx