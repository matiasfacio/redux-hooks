import React from "react";
import styled from "styled-components";
import { Title } from "../elements/Title";

interface Teacher {
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

const TeachersDB: Teacher[] = [
  {
    name: "Matias",
    lastName: "Facio",
    phone: "01774946117",
    email: "matiaspersonal@gmail.com",
  },
  {
    name: "Claudia",
    lastName: "Rogowski",
    phone: "01773123608",
    email: "claudiaytango@yahoo.de",
  },
  {
    name: "Janine",
    lastName: "Lange",
    phone: "01772432432",
    email: "janinelange@gmail.com",
  },
];

export const Teachers = () => {
  return (
    <TeachersContainer>
      <Title>Team</Title>
      {TeachersDB.map((teacher) => {
        return (
          <TeacherContainerCard key={teacher.lastName}>
            Teacher: {teacher.name} {teacher.lastName}
            <Email>Email: {teacher.email}</Email>
            <Phone>Phone: {teacher.phone}</Phone>
          </TeacherContainerCard>
        );
      })}
    </TeachersContainer>
  );
};

const TeachersContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const TeacherContainerCard = styled.article`
  margin-bottom: 20px;
  background-color: var(--container-bg-color);
  color: white;
  padding: 0.8rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  width: 300px;
  box-shadow: var(--container-shadow);
  font-size: 1rem;
`;

const Email = styled.div``;

const Phone = styled(Email)``;
