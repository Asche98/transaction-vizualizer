import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import data from './data.json';
import transactionTable from "./components/transactionTable";
import projectsTable from "./components/projectsTable";
import paymentRating from "./components/paymentRating";
import bars from "./components/bars"

class App extends React.Component{
    render()  {
    return  (
      <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top scrolling-navbar">
          <a className="navbar-brand" href="/"><strong>Transaction-vizualizer for Xsolla</strong></a>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/" className="nav-link">Таблица транзакций</Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link">Проекты</Link>
            </li>
            <li>
              <Link to="/payment-rating" className="nav-link">Рейтинг платёжных систем</Link>
            </li>
          </ul>
        </nav>
        <div className="main-route-place">
          <Route exact path="/" component={transactionTable} />
          <Route path="/projects" component={projectsTable} />
          <Route path="/payment-rating" component={paymentRating} />
        </div>
    </header>

      </BrowserRouter>
    );
  }
}


export default App;
