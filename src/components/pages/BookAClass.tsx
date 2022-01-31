import React from "react";
import styled from "styled-components";
import { Title } from "../elements/Title";
import { Modal } from "../elements/Modal";
import { Room } from "../layout/Room";

const today = new Date();
const twoWeeks = new Date(today.setDate(today.getDate() + 14));

const getTodaysDate = () => {
  let dateObj = new Date();
  let month2 = String(dateObj.getMonth() + 1).padStart(2, "0");
  let year2 = dateObj.getFullYear();
  let day2 = String(dateObj.getDate()).padStart(2, "0");

  const todayYYMMDD = year2.toString() + "-" + month2 + "-" + day2;

  return todayYYMMDD;
};

interface TimeProps {
  date: string;
  time: string;
}

export const BookAClass = () => {
  const [error, setError] = React.useState<{ date: boolean }>({ date: false });
  const [correctDate, setCorrectDate] = React.useState<boolean>(true);
  const [modalErrorVisibility, setModalErrorVisibility] =
    React.useState<boolean>(false);
  const [formInput, setFormInput] = React.useState({
    date: getTodaysDate(),
    time: [] as TimeProps[],
    room: "",
    name: "",
    lastName: "",
    partnerFullName: "",
    email: "",
    phone: "",
  });

  const checkDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const booking = new Date(e.target.value);
    if (booking > twoWeeks) {
      setError({ date: true });
      setCorrectDate(false);
    } else {
      setError({ date: false });
      onUpdateInput(e);
      setCorrectDate(true);
    }
  };

  const onUpdateInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onTimeUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    date: string
  ) => {
    if (e.target.checked) {
      const newTime = [...formInput.time, { date: date, time: e.target.name }];
      setFormInput((prev) => ({ ...prev, time: newTime }));
    } else {
      setFormInput((prev) => ({
        ...prev,
        time: prev.time.filter(
          (item) => item.date !== date || item.time !== e.target.name
        ),
      }));
    }
  };

  const onSubmit = () => {
    console.log(formInput);
  };

  return (
    <>
      <div>
        <Title>Book a class</Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (error.date) {
              setModalErrorVisibility(true);
            } else {
              alert(
                "Your request will be processed soon. You will get a confirmation email in the specified email address. Thank you for playing with us!"
              );
            }
            onSubmit();
          }}
        >
          <FormItem>
            <label>
              Choose date and time{" "}
              {error.date && (
                <ErrorOnItem>
                  You can only book for the next 14 days
                </ErrorOnItem>
              )}
            </label>
            <input
              name="date"
              type={"date"}
              placeholder="choose a date"
              required
              defaultValue={getTodaysDate()}
              onChange={(e) => checkDate(e)}
            ></input>
          </FormItem>
          <FormItem>
            <label>Choose a room</label>
            <select name="room" required onChange={(e) => onUpdateInput(e)}>
              <option value="Room 1" defaultChecked>
                Room 1
              </option>
              <option value="Room 2">Room 2</option>
              <option value="Room 3">Room 3</option>
              <option value="Room 4">Room 4</option>
              <option value="Room 5">Room 5</option>
              <option value="Room 6">Room 6</option>
            </select>
          </FormItem>
          <FormItem>
            {formInput.time.length > 0 && (
              <>
                <label>Your booking</label>
                <DisplayBooking>
                  {formInput.time.map((timeSlot) => {
                    return (
                      <p>
                        {timeSlot.date}: {timeSlot.time}
                      </p>
                    );
                  })}
                </DisplayBooking>
              </>
            )}
          </FormItem>
          <FormItem>
            <label>
              Name <pre>(required)</pre>
            </label>
            <input
              name="name"
              type="text"
              required
              minLength={3}
              onChange={(e) => onUpdateInput(e)}
            />
          </FormItem>
          <FormItem>
            <label>
              Last Name <pre>(required)</pre>
            </label>
            <input
              name="lastName"
              type="text"
              required
              minLength={3}
              onChange={(e) => onUpdateInput(e)}
            />
          </FormItem>
          <FormItem>
            <label>Partner Full Name</label>
            <input
              type="text"
              minLength={3}
              name="partnerFullName"
              onChange={(e) => onUpdateInput(e)}
            />
          </FormItem>
          <FormItem>
            <label>
              Email <pre>(required)</pre>
            </label>
            <input
              type="email"
              required
              name="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onUpdateInput(e)
              }
            />
          </FormItem>
          <FormItem>
            <label>
              Phone <pre>(required)</pre>
            </label>
            <input
              type="text"
              required
              minLength={7}
              name="phone"
              onChange={(e) => onUpdateInput(e)}
            />
          </FormItem>
          <button type="submit" style={{ alignSelf: "flex-end" }}>
            Submit
          </button>
        </Form>
      </div>
      {modalErrorVisibility && (
        <Modal
          visible={modalErrorVisibility}
          onClose={() => setModalErrorVisibility(false)}
        >
          You can only book a class within the next 14 days.
        </Modal>
      )}
      {correctDate && (
        <Room
          roomName={formInput.room || "Room 1"}
          date={formInput.date}
          onChange={({ event, date }) => onTimeUpdate(event, date)}
        />
      )}
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--container-bg-color);
  padding: 10px;
  border-radius: 40px;
  box-shadow: var(--container-shadow);
`;

const FormItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  align-items: center;
  color: white;
  label {
    width: 240px;
  }
  input {
    border: 2px #7aaefc solid;
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 20px;
    background-color: #ffffff;
    color: black;
    font-family: monospace;
    position: relative;
    &:required {
      &:after {
        content: "*";
        position: absolute;
        color: red;
        height: 5px;
        width: 5px;
        top: 30%;
        right: 10px;
      }
    }
  }
  &:nth-of-type(1) {
    border-bottom: 1px #7aaefc dotted;
    padding-bottom: 20px;
  }
  select {
    border: 2px #7aaefc solid;
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 20px;
    background-color: #ffffff;
    color: black;
  }
`;

const ErrorOnItem = styled.div`
  display: block;
  color: red;
  font-size: 0.8rem;
`;

const DisplayBooking = styled.div`
  display: flex;
  flex-direction: column;
  p {
    padding-bottom: 10px;
  }
`;
