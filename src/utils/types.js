export const ToastType = {
    id: "",
    title: "",
    color: "success", // "success", "primary", "warning", "danger", or undefined
  };
  
  export const BreadCrumbsType = {
    text: "",
    href: "",
    onClick: () => {},
  };
  
  export const MeetingJoinType = "anyone-can-join" | "video-conference" | "1-on-1";
  
  export const MeetingType = {
    docId: "",
    createdBy: "",
    invitedUsers: [],
    maxUsers: 0,
    meetingDate: "",
    meetingId: "",
    meetingName: "",
    meetingType: "anyone-can-join",
    status: false,
  };
  
  export const UserType = {
    email: "",
    name: "",
    uid: "",
    label: "",
  };
  
  export const FieldErrorType = {
    show: false,
    message: [],
  };
  