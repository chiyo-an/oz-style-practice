//import "./App.scss";

import Content from "./components/Content";
import Header from "./components/Header";
import { contents } from "./assets/data/data";
import styled from 'styled-components';

const MainSection = styled.section`
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;
`;

function App() {
  return (
    <main>
      <Header />
      <MainSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </MainSection>
    </main>
  );
}

export default App;
