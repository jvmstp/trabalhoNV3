import { NextApiRequest, NextApiResponse } from "next"
import  ControleLivros  from "../../../classes/controle/ControleLivros"

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const codigoLivro = parseInt(req.query.codigo as string)
    ControleLivros.excluir(codigoLivro)
    res.status(200).json({ message: "Livro excluído com sucesso" })
  } else {
    res.status(405).json({ message: "Método não permitido" })
  }
}
