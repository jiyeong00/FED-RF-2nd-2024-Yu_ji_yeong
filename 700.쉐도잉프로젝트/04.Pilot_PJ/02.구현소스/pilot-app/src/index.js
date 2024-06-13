import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

// 공통css
import "./css/index.scss";
import TopArea from './components/layout/TopArea';
import MainArea from './components/layout/MainArea';
import FooterArea from './components/layout/FooterArea';

function MainComponent(props) {
  return (
    <div>
      <TopArea/>
      <MainArea/>
      <FooterArea/>
    </div>
  );
}

// 출력하기 //////
const root = createRoot(document.querySelector("#root"))
root.render(<MainComponent />);
