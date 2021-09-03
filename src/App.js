import styled from "styled-components/"

const Title = styled.h1`
  font-size: 2em;
  text-align:center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
  <Wrapper>
    <Title>
     This is the Library Management Project!
   </Title>
  </Wrapper>
   
  );
}

export default App;
