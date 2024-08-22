import React from "react";
import { EuiButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { useNavigate } from "react-router-dom";

function CreateMeetingButtons({
  createMeeting,
  isEdit = false,
  closeFlyout,
}) {
  const navigate = useNavigate();

  const handleCancel = () => {
    if (isEdit && closeFlyout) {
      closeFlyout();
    } else {
      navigate("/");
    }
  };

  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiButton color="danger" onClick={handleCancel} fill>
          Cancel
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton type="submit" onClick={createMeeting} fill>
          {isEdit ? "Edit Meeting" : "Create Meeting"}
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}

export default CreateMeetingButtons;
