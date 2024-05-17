import React from "react";
import ControleEditora from "../classes/controle/ControleEditora";
import Livro from "../classes/modelo/Livro";

// const controleEditora = new ControleEditora(); // Não é necessário instanciar aqui

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora); // Acessando como membro estático

  return (
    <tr>
      <td>
        {livro.titulo}
        <button
          className="btn btn-danger d-flex"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};
