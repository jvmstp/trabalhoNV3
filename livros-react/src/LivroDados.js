import React, { useState } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';
import { useNavigate } from 'react-router-dom';

function LivroDados() {
    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditora();

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    }

    const incluir = (event) => {
        event.preventDefault();
        const novoLivro = {
            codigo: 0,
            codEditora: codEditora,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n')
        };
        controleLivro.incluir(novoLivro);
        navigate('/');
    }

    return (
        <main>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1 "></span>
            </nav>
            <div className="container">
                <h1>Dados do Livro</h1>
                <form onSubmit={incluir}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título:</label>
                        <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resumo">Resumo:</label>
                        <textarea id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="autores">Autores:</label>
                        <textarea id="autores" value={autores} onChange={(e) => setAutores(e.target.value)} className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="codEditora">Editora:</label>
                        <select id="codEditora" value={codEditora} onChange={tratarCombo} className="form-control">
                            {opcoes.map(opcao => (
                                <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar Dados</button>
                </form>
            </div>
        </main>
    );
}

export default LivroDados;