import React from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from "react-router-dom";

const Badge = props => {
    return(
        <div>
            <h2 className="tituloBadge text-center">{props.badgeName}</h2>
            <Link to={props.href} style={{color: "#000", textDecoration: "none"}}><p>{props.parrafoUno}</p></Link>
            <Link to={props.href2} style={{color: "#000", textDecoration: "none"}}><p>{props.parrafoDos}</p></Link>
            <Link to={props.href3} style={{color: "#000", textDecoration: "none"}}><p>{props.parrafoTres}</p></Link>
            <Link to={props.href4} style={{color: "#000", textDecoration: "none"}}><p>{props.parrafoCuatro}</p></Link>
            <Link to={props.href5} style={{color: "#000", textDecoration: "none"}}><p>{props.parrafoCinco}</p></Link>
            <Link to={props.href6} style={{color: "#000", textDecoration: "none"}}><p>{props.parrafoSeis}</p></Link>
            <Link to={props.href7} style={{color: "#000", textDecoration: "none"}}><p>{props.parrafoSiete}</p></Link>
            <Link to={props.href8} style={{color: "#000", textDecoration: "none"}}><p>{props.parrafoOcho}</p></Link>
            <Link to={props.href9} style={{color: "#000", textDecoration: "none"}}><p>{props.parrafoNueve}</p></Link>
            <Link to={props.href10} style={{color: "#000", textDecoration: "none"}}><p>{props.parrafoDiez}</p></Link>
            <Link to={props.href11} style={{color: "#000", textDecoration: "none"}}><p>{props.parrafoOnce}</p></Link>
        </div>
    )
}

export default Badge;