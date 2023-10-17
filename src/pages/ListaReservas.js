import React from "react";
import { useNavigate } from "react-router-dom";
import './ListaReserva.css'


function ListaReservas() {
    const navigate = useNavigate();
    // Recupera as reservas do LocalStorage.
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    const handleDetalhes = (id) => {
        navigate(`/detalhes/${id}`);
    };

    const handleAlteracao = (id) => {
        navigate(`/alteracao/${id}`);
    };

    const handleExclusao = (id) => {
        // Filtra a reserva para excluí-la com o ID especificado
        const reservasAtualizadas = reservas.filter((reserva, index) => index !== id);

        // Atualiza o LocalStorage
        localStorage.setItem("reservas", JSON.stringify(reservasAtualizadas));

        alert("Reserva excluída com sucesso!");
        // Atualiza a página
        window.location.reload();
    }

    return (
        <div>
            <h1 className="tituloLista">Lista de Reservas de Vagas de Estacionamento</h1>
            <ul className="formularioLista">
                {reservas.map((reserva, index) => (
                    <li key={index}>
                        <strong>Placa do Veículo: {reserva.placaVeiculo}</strong>
                        <p>Nome do Proprietário: {reserva.nomeProprietario}</p>
                        <p>Número do Apartamento: {reserva.numeroApartamento}</p>
                        <p>Bloco do Apartamento: {reserva.blocoApartamento}</p>
                        <p>Modelo do Veículo: {reserva.modeloVeiculo}</p>
                        <p>Cor do Veículo: {reserva.corVeiculo}</p>
                        <p>Número da Vaga de Estacionamento: {reserva.numeroVagaEstacionamento}</p>
                        <button onClick={() => handleDetalhes(index)}>Detalhes</button>
                        <button onClick={() => handleAlteracao(index)}>Alteração</button>
                        <button onClick={() => handleExclusao(index)}>Exclusão</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaReservas;