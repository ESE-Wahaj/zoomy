import React from "react";
import { EuiFieldText, EuiFormRow } from "@elastic/eui";
import ThemeSelector from "../ThemeSelector";

function MeetingNameField({
  label,
  isInvalid,
  error,
  placeholder,
  value,
  setMeetingName,
}) {
  return (
    <ThemeSelector>
      <EuiFormRow label={label} isInvalid={isInvalid} error={error}>
        <EuiFieldText
          placeholder={placeholder}
          value={value}
          onChange={(e) => setMeetingName(e.target.value)}
          isInvalid={isInvalid}
        />
      </EuiFormRow>
    </ThemeSelector>
  );
}

export default MeetingNameField;
