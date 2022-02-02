import React from "react";
import styled from "styled-components";
import { Title } from "../elements/Title";
import Matias from "../images/Matias.jpg";
import Janine from "../images/Janine.png";
import Claudia from "../images/Claudia.jpg";

interface Teacher {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  snippet: string;
}

const TeachersDB: Teacher[] = [
  {
    name: "Matias",
    lastName: "Facio",
    phone: "+49 (0) 1774946117",
    email: "matiaspersonal@gmail.com",
    snippet: "Learn the basics well and become a hero",
  },
  {
    name: "Claudia",
    lastName: "Rogowski",
    phone: "+49 (0) 1773123608",
    email: "claudiaytango@yahoo.de",
    snippet: "How to follow and dance and at the same time look perfect",
  },
  {
    name: "Janine",
    lastName: "Lange",
    phone: "+49 (0) 1772432432",
    email: "janinelange@gmail.com",
    snippet: "Leading and following is a must for every dancer. ",
  },
];

export const Teachers = () => {
  return (
    <TeachersContainer>
      <Title>Team</Title>
      {TeachersDB.map((teacher) => {
        return (
          <TeacherContainerCard key={teacher.lastName}>
            <PictureContainer pic={teacher.name} />
            <TeacherInfoContainer>
              <TeacherNames beforeText="name">
                {teacher.name} {teacher.lastName}
              </TeacherNames>
              <Email beforeText="email">{teacher.email}</Email>
              <Phone beforeText="phone">{teacher.phone}</Phone>
              <q>{teacher.snippet}</q>
            </TeacherInfoContainer>
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
  border: 3px var(--container-bg-color) solid;
  background-color: var(--main-color);
  color: var(--container-bg-color);
  padding: 0.8rem;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 190px;
  width: 100%;
  box-shadow: var(--container-shadow);
  font-size: 1rem;
  transition: all 250ms ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Email = styled.div<{ beforeText: string }>`
  margin-bottom: 15px;
  margin-left: 50px;
  position: relative;
  font-size: 0.9rem;
  :before {
    ${({ beforeText }) => beforeText && `content: "${beforeText}"`};
    color: red;
    position: absolute;
    left: -45px;
    font-size: 0.8rem;
  }
`;

const TeacherNames = styled(Email)``;

const Phone = styled(Email)``;

const PictureContainer = styled.div<{ pic: string }>`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  ${({ pic }) => {
    switch (pic) {
      case "Matias":
        return `background-image: url(${Matias}); background-size: cover`;
      case "Janine":
        return `background-image: url(${Janine}); background-size: cover`;
      case "Claudia":
        return `background-image: url(${Claudia}); background-size: cover`;
    }
  }}
`;

const TeacherInfoContainer = styled.div`
  margin: 10px;
  height: 100%;
  width: 300px;
  display: flex,
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
`;
