import React from 'react';
import '../App.css';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
  } from "reactstrap";
 
function MovieCard({props}) {
    if(props.Error){
        return <div>
            <h1 style={{marginLeft: "250px"}}>Oh, Sorry! {props.Error}</h1></div>
    }
    if(props.Poster !== "N/A") {
    return ( 
        <React.Fragment>
        <div className="col-md-5 mt--5 d-flex mx-auto">
            <Card>
            <CardImg src={props.Poster} alt="Poster"/>
            <CardBody>
                <CardTitle>Title: {props.Title}</CardTitle>
                <CardSubtitle>
                    Year: {props.Year} <br/>
                    Genre: {props.Genre} <br/>
                    Director: {props.Director} <br/>
                    IMDb rating: {props.imdbRating}
                    </CardSubtitle>
                <CardText> Actors: <span role="img" aria-label="emodji man">👨</span> {props.Actors}</CardText>
            </CardBody> 
          </Card>
        </div>
        </React.Fragment>
           )
        }
        return ( 
            <React.Fragment>
            <div className="col-md-5 mt--5 d-flex mx-auto">
                <Card>
                <CardImg src={'https://lh3.googleusercontent.com/proxy/f4cq6in4umd8sZXgqHi4_Vpw-tXb3C6X6TwBm1Xv18J2o5tF0tr5YEFefsD7uY8dpmyc6203iXwVorjVxTRcFqXoM0Q-2LW4zQY6ENoehvTWlayiXr44OdCwGKOqQ_npsmPptrsQ'} alt="Poster"/>
                <CardBody>
                    <CardTitle>Title: {props.Title}</CardTitle>
                    <CardSubtitle>
                        Year: {props.Year} <br/>
                        Genre: {props.Genre} <br/>
                        IMDb rating: {props.imdbRating}
                        </CardSubtitle>
                    <CardText> 
                        Actors: <span role="img" aria-label="emodji man">👨</span> {props.Actors}</CardText>
                </CardBody> 
              </Card>
            </div>
            </React.Fragment>
               )
    };

export default MovieCard;