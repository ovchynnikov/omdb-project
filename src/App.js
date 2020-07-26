import React, { Component } from 'react';
import Spinner from './components/Spinner/Spinner';
import './App.css';
import MovieCard from './components/MovieCard';
import Carousel from 'react-bootstrap/Carousel';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';

const DEFAULT_QUERY = '&i=tt3896198&apikey=922a3dac';




class App extends Component {
    constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
      fetchedButtonClicked: false,
      isLoading: false,
      error: null,
      value: ''
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    
  }
 
  checkIfEnterPressed = (e) => {
    if (e.keyCode === 13) {
      document.getElementById('submitButton').click();
  }
}

  inputChangeHandler = (e) => {
    this.setState({value: e.target.value})
  }

  cleanMovieCard = () => {
    this.setState({fetchedButtonClicked: false})
  }

  renderMovieCard = () => {
    this.setState({isLoading: true})
    this.setState({fetchedButtonClicked: true})

    fetch(`http://www.omdbapi.com/?t=${this.state.value}` + DEFAULT_QUERY)
      .then(response => {
        if (response.ok){ 
         return response.json();
         
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => this.setState({ hits: data, isLoading: false, value: null }))
      
      .catch(error => this.setState({ error, isLoading: false}));
  }
 
  render() {
    const { hits, isLoading, error, fetchedButtonClicked } = this.state;
    if (isLoading){ 
      return <Spinner />
    }
      if (error){
        return <p>{error.message}</p>
      }
      if (fetchedButtonClicked ){
        return (
          <React.Fragment>
            <Navbar className="navbar-expand-sm bg-dark navbar-dark justify-content-between p-3"> 
        <Nav>
                <li className="nav-item active">
                  <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
                </li>
                <li className="nav-item">
                   <Nav.Link href="http://www.omdbapi.com/">OMDb API</Nav.Link>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="https://www.linkedin.com/in/oleksii-ovchynnikov-159675129/">My LinkedIn</a>
                </li>
                <li className="nav-item">
                   <Nav.Link className="disabled" href="http://localhost:3000/">Disabled</Nav.Link>
                </li>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit" onClick={this.renderMovieCard}>Submit</Button>
        </Form>
        </Navbar>
            <div className="container">
              <div className="row">
              <div className="col-12 d-flex mt-1">
              <h3> Make new request</h3>
              </div>
              <button className='fetch-button mt-1 ml-3' onClick={this.cleanMovieCard}>Go Back</button>
                </div>
                <div className="row">
                <div className="col-12 d-flex">
              <MovieCard props={hits}/>
               </div>
               </div>
            </div>
            </React.Fragment>     
        )}
      
    
    return (
      <React.Fragment>
      <Navbar className="navbar-expand-sm bg-dark navbar-dark justify-content-between p-3"> 
        
      <Nav>
              <li className="nav-item active">
                <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
              </li>
              <li className="nav-item">
                 <Nav.Link href="http://www.omdbapi.com/">OMDb API</Nav.Link>
              </li>
              <li className="nav-item">
                 <a className="nav-link" href="https://www.linkedin.com/in/oleksii-ovchynnikov-159675129/">My LinkedIn</a>
              </li>
              <li className="nav-item">
                 <Nav.Link className="disabled" href="http://localhost:3000/">Disabled</Nav.Link>
              </li>
      </Nav>
      <Form inline>
          <FormControl onChange={this.inputChangeHandler}
                       type="text" 
                       name="name" 
                       placeholder="Search" 
                       className=" mr-sm-2" 
                       value={this.state.value} 
                       onKeyDown={this.checkIfEnterPressed}/>
          <Button type="submit" onClick={this.renderMovieCard} >Submit</Button>
      </Form>
      </Navbar>
      <div class="jumbotron jumbotron-fluid mb-0">
       {/* <div className="container">
        <div className="row">
           <div className="col-6 align-self-center d-flex mx-auto">
           <div className="card card-body">
             <h1 >Hello! I use IMDb API.</h1>
            <h2>Type movie and Click the button to see details</h2>
            <form onChange={this.inputChangeHandler} >
              <input type="text" name="name" value={this.state.value} onKeyDown={this.checkIfEnterPressed}></input>
           </form>
            <button id="submitButton" 
                    type="submit"
                    value="Submit" 
                    className='fetch-button mt-2' 
                    onClick={this.renderMovieCard} 
                    data-toggle="tooltip" 
                    title="Click to Submit!">
                      Magic button
            </button>
           </div>   
           </div> 
        </div>    
        </div> */}


        <div className='container-fluid mt-5 p-0'> 
     <Carousel interval={5000} keyboard={false} pause={false} indicators={false} controls={false}>  
       <Carousel.Item>  
             <img style={{'height':"100%"}} className="d-block w-100" src={require('./img/movie1.jpg')} alt="movie posters one"/>  
          <Carousel.Caption>  
               
          </Carousel.Caption>  
       </Carousel.Item>  
       <Carousel.Item>  
             <img style={{'height':"100%"}} className="d-block w-100"  
              src={require('./img/movie2.jpg')} alt="movie posters two"/>  
          <Carousel.Caption>  
                
          </Carousel.Caption>  
       </Carousel.Item>  
       <Carousel.Item>  
              <img style={{'height':"100%"}} className="d-block w-100"  
                   src={require('./img/movie3.jpg')} alt="movie posters tree"/>  
          <Carousel.Caption>  
               
          </Carousel.Caption>  
       </Carousel.Item>
       <Carousel.Item style={{'height':"100%"}}>  
              <img style={{'height':"100%"}} className="d-block w-100"  
                   src={require('./img/movie4.jpg')} alt="movie posters four"/>  
          <Carousel.Caption>  
                 
          </Carousel.Caption>  
       </Carousel.Item> 
       <Carousel.Item style={{'height':"100%"}}>  
              <img style={{'height':"100%"}} className="d-block w-100"  
                   src={require('./img/movie5.jpg')} alt="movie posters five"/>  
          <Carousel.Caption>  
                 
          </Carousel.Caption>  
       </Carousel.Item>
       <Carousel.Item style={{'height':"100%"}}>  
              <img style={{'height':"100%"}} className="d-block w-100"  
                   src={require('./img/movie6.jpg')} alt="movie posters six"/>  
          <Carousel.Caption>  
                 
          </Carousel.Caption>  
       </Carousel.Item>  
     </Carousel>
          </div>
          
      </div>
      <div>
      <Navbar className="navbar-expand-sm bg-dark navbar-dark pt-5 pb-5"> 
          <Nav>
                <li className="nav-item active">
                  <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
                </li>
                <li className="nav-item">
                   <Nav.Link href="http://www.omdbapi.com/">OMDb API</Nav.Link>
                </li>
                <li className="nav-item">
                   <Nav.Link href="https://www.linkedin.com/in/oleksii-ovchynnikov-159675129/">My LinkedIn</Nav.Link>
                </li>
          </Nav>
        </Navbar>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;