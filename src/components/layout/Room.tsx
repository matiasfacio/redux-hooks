import React, { VFC } from "react";
import styled, { css } from "styled-components";
import {
  CalendarApi,
  CalendarDate,
  CalendarTime,
} from "../../app/api/calendarApi";

interface RoomProps {
  roomName: string;
  date: string;
  onChange: ({
    event,
    date,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    date: string;
  }) => void;
}

export const Room: VFC<RoomProps> = ({ roomName, date, onChange }) => {
  const findDate: CalendarDate[] = CalendarApi.getCalendarOfDay(date!);

  return (
    <StyledRoomContainer>
      <StyledRoom>Calendar for {roomName}</StyledRoom>
      <Date>Date: {date}</Date>
      <RoomCalendar>
        {findDate.length > 0 ? (
          <>
            {findDate[0].calendar.map((day) => {
              return (
                <CalendarLine key={day.time}>
                  <DateTime status={day.state}>{day.time}</DateTime>
                  <StatusOfTime status={day.state}>{day.state}</StatusOfTime>
                  {day.state === "available" && (
                    <input
                      type="checkbox"
                      onChange={(e) => onChange({ event: e, date })}
                      name={day.time}
                    />
                  )}
                </CalendarLine>
              );
            })}
          </>
        ) : (
          ""
        )}
      </RoomCalendar>
    </StyledRoomContainer>
  );
};

const StyledRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledRoom = styled.div`
  color: white;
`;

const RoomCalendar = styled.div`
  height: auto;
  width: 250px;
  background-color: var(--container-bg-color);
  border-radius: 40px;
  color: white;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;

  p {
    padding: 5px;
    display: inline-block;
  }
`;

const Date = styled.div`
  color: white;
`;

const CalendarLine = styled.div`
  display: flex;
  border-bottom: 1px #4d4c4c solid;
  padding: 10px 0;
  justify-content: space-between;
  input {
    margin-top: 8px;
  }
`;

const StatusOfTime = styled.p<{ status: CalendarTime["state"] }>`
    display: inline-block;
    ${({ status }) => {
      if (status === "pending") {
        return css`
          color: yellow;
        `;
      }
      if (status === "available") {
        return css`
          color: green;
        `;
      }
      if (status === "booked") {
        return css`
          color: red;
        `;
      }
    }}}
`;

const DateTime = styled.p<{ status: CalendarTime["state"] }>`
    display: inline-block;
    ${({ status }) => {
      if (status === "booked") {
        return css`
          text-decoration: line-through;
        `;
      }
    }}}
}}
`;
