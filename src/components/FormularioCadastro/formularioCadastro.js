import React from "react";

export default function FormularioCadastro() {
  return (
    <form>
      <input type="text" placeholder="titulo" />
      <textarea placeholder="Escreva sua nota"></textarea>
      <button>Criar nota</button>
    </form>
  );
}
