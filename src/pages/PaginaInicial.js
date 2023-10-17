import React from "react";

function PaginaInicial() {
  return (
    <div>
      <h1>Bem-vindo ao Controle de Estacionamento RentMonitor</h1>
      <p>
        Esta é a página inicial da sua aplicação de controle de estacionamento.
        Aqui você pode cadastrar reservas de vagas de estacionamento e listar as vagas cadastradas.
      </p>
      <p>
        Para começar, vá para a página de <a href="/cadastro">Cadastro de Reserva</a> e comece a cadastrar as reservas das vagas de estacionamento.
      </p>
      <p>
        Para visualizar as vagas cadastradas, vá para a página de <a href="/listar">Listar Vagas</a>.
      </p>
      <p>
        Dentro da aba Detalhes na página Listar Vagas, você encontrará a opção Dependentes, nela encontrará a opção de colocar algum dependente 
        que possa usar a sua vaga ou no caso de possuir mais de um veículo poderá igualmente cadastrar os seus dados.
      </p>
    </div>
  );
}

export default PaginaInicial;