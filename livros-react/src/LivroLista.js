import React, { useState, useEffect } from 'react';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';
import './LivroLista.css'; // Importando o arquivo CSS para estilos

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    // Verificar se há campos vazios
    const camposVazios = Object.values(livro).some(value => !value);

    return (
        <tr className={camposVazios ? 'linha-vazia' : ''}>
            <td className="col-titulo">
                <div>{livro.titulo}</div>
                <button onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td className="col-resumo">{livro.resumo}</td>
            <td className="col-editora">{nomeEditora}</td>
            <td className="col-autores">
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        setLivros(controleLivro.obterLivros());
        setCarregado(true);
    }, [carregado]);

    const handleExcluir = (codigo) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    };

    return (
        <main>
            <div>
                <h1>Catálogo de Livros</h1>
            </div>
            <div className="detalhes-container">
                <div className="container">
                    <div className="quadro">
                        <div className="barra-titulo">
                            <div className="categoria-titulo">Título</div>
                            <div className="categoria-resumo">Resumo</div>
                            <div className="categoria-editora">Editora</div>
                            <div className="categoria-autores">Autores</div>
                        </div>
                        <div className="tabela-container">
                            <table>
                                <tbody>
                                    {livros.map(livro => (
                                        <LinhaLivro key={livro.codigo} livro={livro} excluir={handleExcluir}/>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LivroLista;
