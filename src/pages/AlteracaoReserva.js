import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './AlteracaoReserva.css';

function AlteracaoReserva() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [reserva, setReserva] = useState({
    placaVeiculo: '',
    nomeProprietario: '',
    numeroApartamento: '',
    blocoApartamento: '',
    modeloVeiculo: '',
    corVeiculo: '',
    numeroVagaEstacionamento: ''
  });

  useEffect(() => {
    const reservasCadastradas = JSON.parse(localStorage.getItem('reservas')) || [];
    const reservaEncontrada = reservasCadastradas.find((reserva, index) => index === Number(id));

    if (reservaEncontrada) {
      setReserva(reservaEncontrada);
    } else {
      alert('Reserva não encontrada.');
      navigate('/listar'); // Redireciona para a página de listagem de vagas
    }
  }, [id, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReserva({ ...reserva, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!reserva.placaVeiculo || !reserva.nomeProprietario || !reserva.numeroApartamento || !reserva.blocoApartamento || !reserva.modeloVeiculo || !reserva.corVeiculo || !reserva.numeroVagaEstacionamento) {
      alert('Preencha todos os campos');
      return;
    }

    const reservasCadastradas = JSON.parse(localStorage.getItem('reservas')) || [];
    const reservaIndex = reservasCadastradas.findIndex((reserva, index) => index === Number(id));

    if (reservaIndex !== -1) {
      reservasCadastradas[reservaIndex] = reserva;
      localStorage.setItem('reservas', JSON.stringify(reservasCadastradas));
      alert('Reserva alterada com sucesso');
      navigate('/listar'); // Redireciona para a página de listagem de vagas
    } else {
      alert('Reserva não encontrada');
      navigate('/listar');
    }
  };

  return (
    <div>
      <h1>Alteração de Reserva de Vaga</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default AlteracaoReserva;