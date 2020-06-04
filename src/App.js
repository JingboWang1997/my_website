import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import resume from './resumeData.json';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: resume
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
    console.log(resume)

  }

  getResumeData(){
    // $.ajax({
    //   url:'/resumeData.json',
    //   dataType:'json',
    //   cache: false,
    //   success: function(data){
    //     this.setState({resumeData: data});
    //     // console.log(data)
    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.log("error", err);
    //     alert(err);
    //   }
    // });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <Header data={this.state.resumeData.main}/>
        </header> */}
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
          <Resume data={this.state.resumeData.resume}/>
          <Portfolio data={this.state.resumeData.portfolio}/>
          {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
          <Contact data={this.state.resumeData.main}/>
          <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
