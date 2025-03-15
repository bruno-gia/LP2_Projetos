import Pedido from "./Pedido";
import Cartao from "./Cartao";
import Feedback from "./feedback";

const App = () => {

  const textoOK = "Já Chegou"
  const textoNOK = "Não chegou ainda"
  const funcaoOK = () => alert("Agradecemos o feedback")
  const funcaoNOK = () => alert("Verificaremos o ocorrido")
  
  const componentFeedback = (
    <Feedback
      textoOK = {textoOK}
      textoNOK = {textoNOK}
      funcaoOK = {funcaoOK}
      funcaoNOK = {funcaoNOK}
    />

  )
  return (
    <div className="container border mt-2">
      <div className="row">
        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data="22/02/2024"
              titulo="SSD"
              descricao="Um SSD de 512GB"
              icone="hdd" />
              {componentFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data="22/02/2024"
              titulo="Boneco de neve"
              descricao="Um boneco de neve que balança sozinho"
              icone="snowman fa-shake"
            />
            {componentFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data="22/02/2024"
              titulo="Livro"
              descricao="Harry Potter"
              icone="book"
            />
            {componentFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data="22/02/2024"
              titulo="Hipopótamo"
              descricao="Não avisa o IBAMA"
              icone="hippo"
            />
            {componentFeedback}
          </Cartao>
        </div>
      </div>

      <div className="row"></div>
    </div>
  );
};

export default App;
