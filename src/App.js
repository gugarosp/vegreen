import Botao from './elementos/Botao/Botao';

function App() {
  return (
    <div className="App">
      <Botao cor="primario" tipo="padrao" tamanho="grande" />
      <Botao cor="primario" tipo="padrao" tamanho="pequeno" />
      <Botao cor="secundario" tipo="padrao" tamanho="grande" />
      <Botao cor="secundario" tipo="padrao" tamanho="pequeno" />
    </div>
  );
}

export default App;
