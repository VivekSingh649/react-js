import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Myname from './index.jsx'

function customRender(e, c) {
  const createElement = document.createElement(e.type);
  createElement.innerText = e.innerText;
  createElement.setAttribute("href", e.props.herf);
  createElement.setAttribute("target", e.props.targrt);
  c.appendChild(createElement);
}

const reactElement = {
  type: "a",
  props: {
    herf: "https://www.google.com/",
    targrt: "_blank",
  },
  innerText: "Click me for visit",
};

const root = document.querySelector("#root"); 

customRender(reactElement, root);

root.customRender(reactElement)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     <Myname />
//   </React.StrictMode>,
// )
 