import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lab3 from './Components/Lab3'
import Lab4 from './Components/Lab4'
import Lab5 from './Components/Lab5'
import Lab6 from './Components/Lab6'
import Lab7 from './Components/Lab7'
import MyApiCRUD from './Components/MyApiCRUD'
import {Link} from 'react-router-dom'
import IP from './Components/IP'
import Lab12 from './Components/Lab12'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to Lab Experiments- Section 7</h1>
      <table border="2" width="70%">
        <tr>
              <td>S.No</td>
              <td>Lab</td>
              <td>Description</td>
        </tr>
        <tr>
        <td>1</td>
              <td><Link to="/lab1">Lab1</Link></td>
              <td>Alignment and CSS</td>
        </tr>
        <tr>
        <td>2</td>
              <td><Link to="/lab2">Lab2</Link></td>
              <td>DOM-Tree, media class,flex</td>
        </tr>
        <tr>
        <td>3</td>
              <td><Link to="/lab3">Lab3</Link></td>
              <td>Working with React props, state</td>
        </tr>
        <tr>
        <td>4</td>
        <td><Link to="/lab4">Lab4</Link></td>
              <td>“Single Page React App” with Redux
              State Management for Routing</td>
        </tr>
        <tr>
        <td>5</td>
        <td><Link to="/lab5">Lab5</Link></td>
              <td> Utilizing the predefined responsive design elements with Bootstrap / Material-UI
              for designing</td>
        </tr>
        <tr>
        <td>6</td>
        <td><Link to="/lab6">Lab6</Link></td>
              <td>Transferring data with Axios / Fetch API in React</td>
        </tr>
        <tr>
        <td>7</td>
        <td><Link to="/lab7">Lab7</Link></td>
              <td>Spring Boot Web MVC Demo & Annotations</td>
        </tr>
        <tr>
        <td>8</td>
        <td><Link to="/lab8">Lab8</Link></td>
              <td>Spring Boot with Rest API and CRUD Operations</td>
        </tr>
        <tr>
        <td>9</td>
        <td><Link to="/MyApiCRUD">CRUD</Link></td>
              <td>CRUD Operations</td>
        </tr>
        <tr>
        <td>10</td>
        <td><Link to="/IP">IP</Link></td>
              <td>IP</td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            <Link to="/Lab10a">Lab 10a</Link>
          </td>
          <td>
            Role based navigation
          </td>
        </tr>
        <tr>
        <td>11</td>
        <td><Link to="/Lab11">Lab11</Link></td>
              <td>JSON Web Token</td>
        </tr>
        
        <tr>
        <td>12</td>
        <td><Link to="/Lab12">Lab12</Link></td>
              <td>ChatApp</td>
        </tr>
      </table>
    </>

  )
}

export default App
