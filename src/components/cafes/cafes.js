import React, { useEffect, useState } from "react";
import Cafe from '../cafe/cafe';
import './cafes.css';
import { Row, Col } from 'react-bootstrap';

function Cafes() {
  const [cafes, setCafes] = useState([]);
  const [cafeId, setCafe] = useState(undefined);

  const handleDetail = (cafeid) => {
    if (cafeId === cafeid) {
      setCafe(undefined);
    } else {
      setCafe(cafeid);
    }
  }

  const displayDetail = () => {
    if (cafeId !== undefined) {
      return <Cafe cafeId={cafeId} />;
    } else {
      return null;
    }
  }

  const url = 'http://localhost:3001/cafes';

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("cafes") === null) {
        setCafes("Loading...");
      } else {
        setCafes(JSON.parse(localStorage.getItem("cafes")));
      }
    } else {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          setCafes(data);
          localStorage.setItem("cafes", JSON.stringify(data));
        });
    }
  }, []);

  return (
    <div>
      <h1 className="elAromaMagico">El aroma magico</h1>
      <img src="https://cdn.discordapp.com/attachments/1071192635752071168/1111641106610925648/image.png" />
      <Row>
        <Col>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Region</th>
              </tr>
            </thead>
            <tbody>
              {cafes.map((cafe) => (
                <tr key={cafe.id}>
                  <th scope="row">{cafe.id}</th>
                  <td onClick={() => handleDetail(cafe.id)}>{cafe.nombre}</td>
                  <td>{cafe.tipo}</td>
                  <td>{cafe.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col>
          {displayDetail()}
        </Col>
      </Row>
    </div>
  );
}

export default Cafes;
