import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {
  Container  
} from 'semantic-ui-react'
import Footer from './components/footer';
import HeaderCom from './components/header';
import MoviesPage from './components/pages/moviesPage';
import NewMoviePage from './components/pages/newMoviePage';
import MouseTrack from './components/pages/testHooks';






export default class App extends Component {


  render() {  

    return (
      <div>    
        <style>
          {`
          html, body {
            background: #fff;
          }
        `}
        </style>  
        <HeaderCom/>
        <Container text style={{ marginTop: '2em' }}>         
          <Route path='/movies' component={MoviesPage} exact/>
          <Route path='/movies/new' component={NewMoviePage} exact/>
          <Route path='/movie/:_id' component={NewMoviePage} exact/>
          {/* <Route path='/' exact component={MouseTrack}/> */}
        </Container>
       <Footer/>
   
      </div>
    )
  }
}