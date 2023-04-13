import { useState } from "react"
import "./App.css"
import { Warning } from "phosphor-react"

function App() {
  const palavras = ["porra", "puta"]

  const filtro = (palavras: string[], comentario: string) => {
    const palavras_ofensivas = palavras.map((element) => {
      return comentario.includes(element)
    })

    setComentarioOfensivo(palavras_ofensivas.includes(true))
  }

  const [comentario, setComentario] = useState("")
  const [comentarioOfensivo, setComentarioOfensivo] = useState(false)

  return (
    <section className="container">
      <h2>Teste de Palavras Ofensivas</h2>
      <form
        onSubmit={(e) => {
          alert("Comentario Enviado!")
        }}
        className="form"
      >
        <textarea
          placeholder="Digite seu comentário"
          value={comentario}
          onChange={(e) => {
            setComentario(e.target.value)
            filtro(palavras, e.target.value)
          }}
          className="comentario"
        />
        {!comentarioOfensivo && (
          <button
            type="submit"
            className="botao-comentario"
            disabled={comentario.length == 0 ? true : false}
          >
            Enviar
          </button>
        )}
      </form>
      {comentarioOfensivo && (
        <div className="aviso-diretriz">
          <span className="icon">
            <Warning size={32} />
          </span>
          <span className="aviso">
            Seu comentário fere as diretrizes, por favor comente novamente!!
          </span>
        </div>
      )}
    </section>
  )
}

export default App
