import React from "react";
import CardNota from '../CardNota/CardNota.js';

export default function ListaDeNotas() {
  return (
    <ul>
      {Array.of("Trabalho", "Trabalho", "Estudos").map((categorias,index) => {
        return (
          <li key={index}>
              <div>{categorias}</div>
            <CardNota />
          </li>
        );
      })}
    </ul>
  );
}
