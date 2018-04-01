import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import HelpPage from './components/HelpPage';
import NotFoundPge from './components/NotFoundPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<AppRouter />, document.getElementById('app'));