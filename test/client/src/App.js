import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import AddForms from './components/Forms/AddForms';
import Signin from './components/Login/AddLogin';
import Register from './components/Login/Register';
import Navigation from './components/Navigation';
import Admin from './components/Admin/Admin';
import ViewAdmin from './components/Admin/ViewAdmin';
import EditAdmin from './components/Admin/EditAdmin';
import AddProduct from './components/Product/AddProduct';
import ProductTable from './components/Product/ProductTable';
import { Route, Redirect } from 'react-router-dom';

class App extends Component {
  //   constructor() {
  //   super();
  //   this.state = {
  //     route: 'signin',
  //     isSignedIn: false,
  //   }
  
  // }


  // onRouteChange = (route) => {
  //   if (route === 'signout') {
  //     this.setState({isSignedIn: false})
  //   } else if (route === 'home') {
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route: route});
  // }
  


  
  
  render() {
    // const { isSignedIn, route } = this.state;
    
    return (
        <div>
          
        {/* <Header isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
        ?
        <div> */}
        <Header />
        <Sidebar />
        <Route path = "/" exact component = {Home} />
        <Route path = "/AddForms" exact = {true} component = {AddForms} />
        <Route path = "/Register" exact = {true} component = {Register} /> 
        <Route path = "/Admin" exact = {true} component = {Admin} />
        <Route path = "/ViewAdmin" exact = {true} component = {ViewAdmin} />
        <Route path = "/EditAdmin/edit/:id" exact = {true} component = {EditAdmin} />
        <Route path = "/AddProduct" exact = {true} component = {AddProduct} />
        <Route path = "/ProductTable" exact = {true} component = {ProductTable} />

        {/* </div>
        : (
             route === 'signin'
             ? <Signin  onRouteChange={this.onRouteChange}/>
             : <Register onRouteChange={this.onRouteChange}/>
            )
        } */}
        
        <Footer />
          
          </div>
     
    );
  }
}

export default App;
