import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
  }
  _handleMudancaTitulo(event) {
    event.preventDefault();
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaTexto(event){
    event.preventDefault();
    event.stopPropagation();
    this.texto = event.target.value;
  }
  _handleMudancaCategoria(event){
    event.preventDefault();
    event.stopPropagation();
    this.categoria = event.target.value;
  }
  _criarNota(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo,this.texto,this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro " onSubmit={this._criarNota.bind(this)}>
        <select 
        onChange={this._handleMudancaCategoria.bind(this)}
        className="form-cadastro_input"
        >
        <option defaultChecked={true}>Sem categoria</option>
       {this.props.categorias.map((categorias, index) => {
         return <option key={index}>{categorias}</option>
       })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
