import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './AlteracaoDependente.css'

function AlteracaoDependente() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dependente, setDependente] = useState({
    nome: '',
    placaVeiculo: '',
    modeloVeiculo: '',
    corVeiculo: ''
  });

  useEffect(() => {
    const dependentesCadastrados = JSON.parse(localStorage.getItem('reservas')) || [];
    const dependenteEncontrado = dependentesCadastrados[id].dependentes.find((dep, index) => index === Number(id));

    if (dependenteEncontrado) {
      setDependente(dependenteEncontrado);
    } else {
      alert('Dependente não encontrado.');
      navigate('/detalhes'); 
    }
  }, [id, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDependente({ ...dependente, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!dependente.nome || !dependente.placaVeiculo || !dependente.modeloVeiculo || !dependente.corVeiculo) {
      alert('Preencha todos os campos');
      return;
    }

    const dependentesCadastrados = JSON.parse(localStorage.getItem('reservas')) || [];
    const reservaIndex = dependentesCadastrados.findIndex((reserva, index) => index === Number(id));

    if (reservaIndex !== -1) {
      // Atualize os dados do dependente na lista de dependentes da reserva
      const novosDependentes = [...dependentesCadastrados[reservaIndex].dependentes];
      novosDependentes[id] = dependente;

      dependentesCadastrados[reservaIndex].dependentes = novosDependentes;

      // Atualize o localStorage com as alterações
      localStorage.setItem('reservas', JSON.stringify(dependentesCadastrados));
      alert('Dependente alterado com sucesso');
      navigate(`/detalhes/${id}`); // Redireciona para a página de detalhes da reserva
    } else {
      alert('Dependente não encontrado');
      navigate('/listar');
    }
  };

  return (
    <div>
      <h1>Alteração de Dependente</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome do Dependente:</label>
        <input type="text" name="nome" value={dependente.nome} onChange={handleInputChange} />

        <label>Placa do Veículo do Dependente:</label>
        <input type="text" name="placaVeiculo" value={dependente.placaVeiculo} onChange={handleInputChange} />

        <label>Modelo do Veículo do Dependente:</label>
        <input type="text" name="modeloVeiculo" value={dependente.modeloVeiculo} onChange={handleInputChange} />

        <label>Cor do Veículo do Dependente:</label>
        <input type="text" name="corVeiculo" value={dependente.corVeiculo} onChange={handleInputChange} />

        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default AlteracaoDependente;