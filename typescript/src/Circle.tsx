import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Continer = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "기본텍스트" }: CircleProps) {
  return (
    <Continer bgColor={bgColor} borderColor={borderColor ?? "black"}>
      {text}
    </Continer>
  );
}

export default Circle;

// practice interface -------------------------------------
// interface PlayerShape {
//   name: string;
//   age: number;
// }

// const sayHello = (playerObj: PlayerShape) =>
//   `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

// sayHello({ name: "nico", age: 12 });
// sayHello({ name: "ryung", age: 26 });
