import React from 'react';
import { useParams } from "react-router-dom";
import {Card} from 'react-bootstrap';
import './cafe.css';


const { useEffect, useState } = require("react");



function Cafe(props) {
  const params = useParams();
  const [cafe, setCafe] = useState([]);
  let url = "";

 url = `http://localhost:3001/cafes/`+props.cafeId ;

  useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("cafe") === null) {
                setCafe("Loading...")
            } else {
                setCafe(localStorage.getItem("cafe"));
            }
        } else {
            fetch(url)
                .then((data) => data.json())
                .then((data) => {
                    setCafe(data);

                    localStorage.setItem("cafe", data.value);
                })
        }
    }, []);
  
  return (
    <div className = "cafeCardDetail">
        <h1 className = "nombreCafe">{cafe.nombre}</h1>
        <p style={{textAlign:"center"}}>{cafe.fecha_cultivo}</p>
        <img className = "cafeImage" src={cafe.imagen} alt={cafe.nombre} />
        <p className = "notas">Notas</p>
        <p className = "notas">{cafe.notas}</p>
        <p className ="altura">Cultivado a una altura de {cafe.altura} msnm</p>
    </div>
  );
}

export default Cafe;