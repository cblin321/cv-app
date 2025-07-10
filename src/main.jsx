import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./fonts/Noto_Sans/NotoSans-VariableFont_wdth,wght.ttf"

//sidebar 
  // add general info
  // add educational info
  //add practical exp

//resume
  //general info section
  //educational section
    //educational info component
  //add practical exp
    //practical exp component
      //list of highlights from a particular exp, should crud

//props/state:
  //main holds resume obj as state, contains all entries
    //Resume just renders the obj
    //Sidebar takes setResume as props
      //Each resume entry sets properties appropriately


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
