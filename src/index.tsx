import React from 'react';
import { render } from 'react-dom'
import App from './App'

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
const here = document.querySelector('#super-apps-render-here')

render(app, here)


