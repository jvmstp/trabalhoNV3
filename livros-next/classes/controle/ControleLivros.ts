import Livro from "../modelo/Livro";

// Lista de livros
const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: "Use a Cabeça: Java",
    resumo:
      "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orienta a objetos (OO) e Java.",
    autores: ["Bert Bates", "Kathy Sierra"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "Java, como Programar",
    resumo:
      "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel",
    autores: ["Paul Deitel", "Harvey Deitel"],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: "Core Java for the Impatient",
    resumo:
      "Readers familiar with Horstmann's original, two-volume Core Java books who are looking for a comprehensive, but condensed guide to all of the new features and functions os Java SE 9 will learn how these new features impact the language and core libraries.",
    autores: ["Cay Horstmann"],
  },
];

export default class ControleLivro {
  static excluir(codigo: number) {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    } else {
      throw new Error(`Livro com código ${codigo} não encontrado.`);
    }
  }

  static obterLivros() {
    return livros;
  }

  static incluir(novoLivro: Livro) {
    novoLivro.codigo = livros.length > 0 ? livros.at(-1)!.codigo + 1 : 1;
    livros.push(novoLivro);
  }
}

// Teste dos métodos
const livrosDisponiveis = ControleLivro.obterLivros();
console.log(livrosDisponiveis);

// Inclui um novo livro
ControleLivro.incluir({
  codigo: 4, // Este código será sobrescrito pelo método incluir
  codEditora: 4,
  titulo: "Novo Livro de Teste",
  resumo: "Resumo do novo livro de teste.",
  autores: ["Autor Teste"],
});
console.log(ControleLivro.obterLivros());

// Exclui um livro
ControleLivro.excluir(1);
console.log(ControleLivro.obterLivros());
