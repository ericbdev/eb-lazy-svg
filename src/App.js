import React, { useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-auto-columns: true;
  gap: 2em;
  place-items: center;
`;

const Item = styled.div``;
const Input = styled.input``;

const App = () => {
  const [value, setValue] = useState("grid");

  return (
    <Wrapper>
      <Item>
        <Input
          value={value}
          type="text"
          onChange={(event) => setValue(event.target.value)}
        />
      </Item>
      <Item>
        <Icon name={value} />
        <br />
        {value}
      </Item>
    </Wrapper>
  );
};

export default App;
