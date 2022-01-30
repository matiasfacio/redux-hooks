import React from "react";

export const Profil = ({ active }) => {
  const [color, setColor] = React.useState("white");

  return (
    <svg
      width="21"
      height="27"
      viewBox="0 0 21 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseOver={() => setColor("white")}
      onMouseLeave={() => setColor("white")}
      style={{ transform: "scale(0.7)" }}
    >
      <path
        d="M0.5 26.5C0.5 23.8478 1.55357 21.3043 3.42893 19.4289C5.3043 17.5536 7.84784 16.5 10.5 16.5C13.1522 16.5 15.6957 17.5536 17.5711 19.4289C19.4464 21.3043 20.5 23.8478 20.5 26.5H0.5ZM10.5 15.25C6.35625 15.25 3 11.8938 3 7.75C3 3.60625 6.35625 0.25 10.5 0.25C14.6438 0.25 18 3.60625 18 7.75C18 11.8938 14.6438 15.25 10.5 15.25Z"
        fill={active ? "white" : color}
      />
    </svg>
  );
};
