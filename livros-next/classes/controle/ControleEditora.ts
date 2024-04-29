import { ReactNode } from 'react';
import Editora from '../modelo/Editora';

const editoras: Editora[] = [
    new Editora(1, "Alta Books"),
    new Editora(2, "Pearson"),
    new Editora(3, "Addison Wesley")
];

class ControleEditora {
    codEditora: string | number | readonly string[] | undefined;
  nome: ReactNode;
    getNomeEditora(codEditora: number): string {
        const editora = editoras.find(e => e.codEditora === codEditora);
        return editora ? editora.nome : "";
    }

    getEditoras(): Editora[] {
        return editoras;
    }
}

export default ControleEditora;
