import React, {useState, useContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)



window.addEventListener("scroll", () =>{
  const nombre = document.getElementById("NombreHeader")
  const header = document.getElementById("header")
  const navBar = document.getElementById("NavBar__Container")
  if (window.scrollY > header.clientHeight - 300) {
    navBar.classList.add("NavBarSticky")
    nombre.classList.add("NavBarSticky")
  } 
  else if (navBar.classList.contains("NavBarSticky") && nombre.classList.contains("NavBarSticky") 
    && window.scrollY < header.clientHeight - 300) {
      navBar.classList.remove("NavBarSticky")
      nombre.classList.remove("NavBarSticky")
    }
})





