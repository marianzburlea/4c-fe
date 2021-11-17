import React from 'react';
import { render } from 'react-dom'
import App from './App'

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

export const start = () => {
  const here = document.querySelector('#super-apps-render-here')

  if (here) {
    render(app, here)
  }
}

start()

