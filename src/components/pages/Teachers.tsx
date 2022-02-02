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
    snippet:
      "<q>Learn the basics well and become a hero.</q><br /><br />I started dancing tango at the age of 16 in ARG (1995). In the year 2002 I moved to Buenos Aires where I became professional. I have danced and studied many of the known Tango styles. My style? It is my own style. Improvisation, musicality, analysis of the tango structure, styling and conexion are my strong points. Through a deep understanding of Tango as a whole, I will help you to develop your own style.",
  },
  {
    name: "Claudia",
    lastName: "Rogowski",
    phone: "+49 (0) 1773123608",
    email: "claudiaytango@yahoo.de",
    snippet:
      "<q>How to follow and dance and at the same time look perfect.</q><br /><br />I started dancing ballet when I was 10 years old. I discovered tango more than 15 years ago and have since embraced it completely. Being a physiotherapist has given me the capacity to understand different tango body techniques, and helped me to develop a specific system of teaching using: easy exercises, easy movement, clear directives... ∑I invite you to join me to take your first steps or to polish your technique in advanced level.",
  },
  {
    name: "Janine",
    lastName: "Lange",
    phone: "+49 (0) 1772432432",
    email: "janinelange@gmail.com",
    snippet:
      "<q>Leading and Following is a must for both dancers.</q><br /><br />Since my early childhood I have been dancing various dances with great enthusiasm.I fell for the tango in 2004. 3 years later I started to make it my profession. My physiotherapy and acting education helped me to develop my own dance and teaching style. My focus is on dancing tango from the inside out, with presence, good connection and musicality. Feel warmly invited to explore tango with me.",
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
              <div dangerouslySetInnerHTML={{ __html: teacher.snippet }} />
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
  background-color: var(--container-bg-color);
  color: var(--white);
  padding: 0.8rem;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 70%;
  box-shadow: var(--container-shadow);
  font-size: 0.9rem;
  transition: all 250ms ease-in-out;
  line-height: 1.5;
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
    color: #36d8d8;
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
  flex-shrink: 0;
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
  display: flex,
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
`;
