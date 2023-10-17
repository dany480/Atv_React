import React, { useState } from "react";
import './CadastroReserva.css'


function CadastroReserva() {
  const [reserva, setReserva] = useState({
    placaVeiculo: '',
    nomeProprietario: '',
    numeroApartamento: '',
    blocoApartamento: '',
    modeloVeiculo: '',
    corVeiculo: '',
    numeroVagaEstacionamento: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReserva({ ...reserva, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação dos campos para envio
    if (!reserva.placaVeiculo || !reserva.nomeProprietario || !reserva.numeroApartamento || !reserva.blocoApartamento || !reserva.modeloVeiculo || !reserva.corVeiculo || !reserva.numeroVagaEstacionamento) {
      alert('Preencha todos os campos');
      return;
    }

    // Adiciona nova reserva
    const reservasCadastradas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservasCadastradas.push(reserva);

    // Atualiza o localStorage
    localStorage.setItem('reservas', JSON.stringify(reservasCadastradas));

    // Limpa os campos após o cadastro
    setReserva({
      placaVeiculo: '',
      nomeProprietario: '',
      numeroApartamento: '',
      blocoApartamento: '',
      modeloVeiculo: '',
      corVeiculo: '',
      numeroVagaEstacionamento: ''
    });

    alert('Reserva cadastrada com sucesso.');
  };

  return (
    <div>
      <h1 className="cadastro">Cadastro de Reserva de Vaga</h1>
      <form onSubmit={handleSubmit} className="formularioCadastro">
        <label>Placa do Veículo:</label>
        <input type="text" name="placaVeiculo" value={reserva.placaVeiculo} onChange={handleInputChange} />

        <label>Nome do Proprietário:</label>
        <input type="text" name="nomeProprietario" value={reserva.nomeProprietario} onChange={handleInputChange} />

        <label>Número do Apartamento:</label>
        <input type="text" name="numeroApartamento" value={reserva.numeroApartamento} onChange={handleInputChange} />

        <label>Bloco do Apartamento:</label>
        <input type="text" name="blocoApartamento" value={reserva.blocoApartamento} onChange={handleInputChange} />

        <label>Modelo do Veículo:</label>
        <input type="text" name="modeloVeiculo" value={reserva.modeloVeiculo} onChange={handleInputChange} />

        <label>Cor do Veículo:</label>
        <input type="text" name="corVeiculo" value={reserva.corVeiculo} onChange={handleInputChange} />

        <label>Número da Vaga de Estacionamento:</label>
        <input type="text" name="numeroVagaEstacionamento" value={reserva.numeroVagaEstacionamento} onChange={handleInputChange} />

        <button type="submit">Cadastrar Reserva</button>
      </form>
    </div>
  );
}

export default CadastroReserva;