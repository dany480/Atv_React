import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Dependentes.css'

function Dependentes() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [placaVeiculo, setPlacaVeiculo] = useState("");
    const [modeloVeiculo, setModeloVeiculo] = useState("");
    const [corVeiculo, setCorVeiculo] = useState("");


    const handleEdicao = (event) => {
        event.preventDefault();

        // Validação dos campos para não enviar dados fora da conformidade
        if (!nome || !placaVeiculo || !modeloVeiculo || !corVeiculo) {
            alert("Preencha todos os campos");
            return;
        }

        // Recupera a reserva de vaga pelo ID através do localStorage
        const reservasCadastradas = JSON.parse(localStorage.getItem("reservas")) || [];
        const reservaEncontrada = reservasCadastradas.find((reserva, index) => index === Number(id));

        if (reservaEncontrada) {
            // Verifica se já existe uma lista de dependentes na reserva
            if (!reservaEncontrada.dependentes) {
                reservaEncontrada.dependentes = [];
            }

            // Adiciona o dependente à lista de dependentes na reserva
            reservaEncontrada.dependentes.push({
                nome,
                placaVeiculo,
                modeloVeiculo,
                corVeiculo,
            });

            // Atualiza o localStorage
            localStorage.setItem("reservas", JSON.stringify(reservasCadastradas));
            alert("Cadastro de dependente realizado com sucesso!");
            navigate(`/detalhes/${id}`);
        } else {
            alert("Reserva não encontrada");
            navigate(`/listar/${id}`);
        }
    };

    return (
        <div>
            <h1 className="tituloDependente">Cadastro de Dependente para Reserva de Vaga</h1>
            <form onSubmit={handleEdicao}>
                <label>Nome: </label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <label>Placa do Veículo: </label>
                <input
                    type="text"
                    value={placaVeiculo}
                    onChange={(e) => setPlacaVeiculo(e.target.value)}
                />

                <label>Modelo do Veículo: </label>
                <input
                    type="text"
                    value={modeloVeiculo}
                    onChange={(e) => setModeloVeiculo(e.target.value)}
                />

                <label>Cor do Veículo: </label>
                <input
                    type="text"
                    value={corVeiculo}
                    onChange={(e) => setCorVeiculo(e.target.value)}
                />
                <button type="submit">Cadastrar Dependente</button>
                
            </form>
        </div>
    );
}

export default Dependentes;