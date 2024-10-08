import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  EuiBadge,
  EuiBasicTable,
  EuiButtonIcon,
  EuiCopy,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
} from "@elastic/eui";
import { getDocs, query } from "firebase/firestore";
import moment from "moment";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import { useAppSelector } from "../app/hooks";
import { meetingsRef } from "../utils/firebaseConfig";
import { MeetingType } from "../utils/types";

export default function Meeting() {
  useAuth();
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const getMyMeetings = async () => {
      const firestoreQuery = query(meetingsRef);
      const fetchedMeetings = await getDocs(firestoreQuery);
      if (fetchedMeetings.docs.length) {
        const myMeetings = [];
        fetchedMeetings.forEach((meeting) => {
          const data = meeting.data();
          if (
            data.createdBy === userInfo?.uid ||
            data.meetingType === "anyone-can-join" ||
            data.invitedUsers.includes(userInfo?.uid)
          ) {
            myMeetings.push(data);
          }
        });
        setMeetings(myMeetings);
      }
    };
    if (userInfo) getMyMeetings();
  }, [userInfo]);

  const meetingColumns = [
    {
      field: "meetingName",
      name: "Meeting Name",
    },
    {
      field: "meetingType",
      name: "Meeting Type",
    },
    {
      field: "meetingDate",
      name: "Meeting Date",
    },
    {
      field: "status",
      name: "Status",
      render: (status, meeting) => {
        if (status) {
          if (meeting.meetingDate === moment().format("L")) {
            return (
              <EuiBadge color="success">
                <Link to={`/join/${meeting.meetingId}`} style={{ color: "black" }}>
                  Join Now
                </Link>
              </EuiBadge>
            );
          } else if (moment(meeting.meetingDate).isBefore(moment().format("L"))) {
            return <EuiBadge color="default">Ended</EuiBadge>;
          } else if (moment(meeting.meetingDate).isAfter()) {
            return <EuiBadge color="primary">Upcoming</EuiBadge>;
          }
        } else {
          return <EuiBadge color="danger">Cancelled</EuiBadge>;
        }
      },
    },
    {
      field: "meetingId",
      name: "Copy Link",
      width: "10%",
      render: (meetingId) => {
        return (
          <EuiCopy textToCopy={`${process.env.REACT_APP_HOST}/join/${meetingId}`}>
            {(copy) => (
              <EuiButtonIcon
                iconType="copy"
                onClick={copy}
                display="base"
                aria-label="meeting-copy"
              />
            )}
          </EuiCopy>
        );
      },
    },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />
      <EuiFlexGroup justifyContent="center" style={{ margin: "1rem" }}>
        <EuiFlexItem>
          <EuiPanel>
            <EuiBasicTable items={meetings} columns={meetingColumns} />
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}
