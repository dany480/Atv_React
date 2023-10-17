import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './DetalhesReserva.css';

function DetalhesReserva() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [reserva, setReserva] = useState(null);

    useEffect(() => {
        // Recupera a reserva pelo ID através do localStorage
        const reservasCadastradas = JSON.parse(localStorage.getItem('reservas')) || [];
        const reservaEncontrada = reservasCadastradas.find((reserva, index) => index === Number(id));
        if (reservaEncontrada) {
            setReserva(reservaEncontrada);
        } else {
            alert('Reserva não encontrada.');
            navigate('/listar');
        }
    }, [id, navigate]);

    const handleEdicao = () => {
        navigate(`/dependentes/${id}`);
    }

    const handleExclusaoDependente = (index) => {
        // Excluir o dependente com base no índice fornecido
        const novaListaDependentes = [...reserva.dependentes];
        novaListaDependentes.splice(index, 1);

        // Atualizar a reserva no localStorage
        const reservasCadastradas = JSON.parse(localStorage.getItem('reservas')) || [];
        reservasCadastradas[Number(id)].dependentes = novaListaDependentes;
        localStorage.setItem('reservas', JSON.stringify(reservasCadastradas));

        // Atualizar a reserva no estado local
        setReserva({ ...reserva, dependentes: novaListaDependentes });
    }

    const handleAlteracaoDependente = (index) => {
        navigate(`/alteracaoDependentes/${id}`)
    }

    return (
        <div>
            <h1>Detalhes da Reserva de Vaga</h1>
            <p className="texto">Se você possui um dependente ou mais de um veículo cadastre aqui os seus dados.</p>
            {reserva ? (
                <div>
                    <h2>Detalhes da Reserva</h2>
                    <p>Placa do Veículo: {reserva.placaVeiculo}</p>
                    <p>Nome do Proprietário: {reserva.nomeProprietario}</p>
                    <p>Número do Apartamento: {reserva.numeroApartamento}</p>
                    <p>Bloco do Apartamento: {reserva.blocoApartamento}</p>
                    <p>Modelo do Veículo: {reserva.modeloVeiculo}</p>
                    <p>Cor do Veículo: {reserva.corVeiculo}</p>
                    <p>Número da Vaga de Estacionamento: {reserva.numeroVagaEstacionamento}</p>
                </div>
            ) : null}
            
            <button onClick={handleEdicao}>Dependentes</button>
           
            <div className="dependetes">
                <h3>Dependentes</h3>
                {reserva &&
                        reserva.dependentes &&
                        reserva.dependentes.map((dependente, index) => (
                            <div key={index} className="dependente">
                                    <div>
                                        <p>Nome: {dependente.nome}</p>
                                        <p>Placa: {dependente.placaVeiculo}</p>
                                        <p>Modelo: {dependente.modeloVeiculo}</p>
                                        <p>Cor: {dependente.corVeiculo}</p>
                                    </div>
                                <button onClick={() => handleAlteracaoDependente(index)}>
                                    Editar Dependente
                                </button>
                                <button onClick={() => handleExclusaoDependente(index)}>
                                    Excluir Dependente
                                </button>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default DetalhesReserva;