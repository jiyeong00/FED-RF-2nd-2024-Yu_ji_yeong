import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import TopArea from './components/pages/TopArea';
import MainArea from './components/pages/MainArea';
import FooterArea from './components/pages/FooterArea';

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
