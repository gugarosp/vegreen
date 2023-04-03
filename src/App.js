import Button from './elements/Button/Button';
import Tabs from './elements/Tabs/Tabs';
import Input from './elements/Input/Input';

function App() {
  const tabsContent = [
    'Item 1',
    'Item 2',
    'Item 3'
  ]

  return (
    <div className="App">

      <Input inputType="text" placeholder="Type Something"size="large" disabled=""></Input>
      <Input inputType="number" placeholder="123" size="small" disabled=""></Input>

      <Input inputType="password" size="large" disabled="disabled">Input</Input>
      <Input inputType="date" size="small" disabled="disabled">Input</Input>

      <br />

      <Tabs items={tabsContent} type="default" status="primary"></Tabs>
      <Tabs items={tabsContent} type="default" status="secondary"></Tabs>

      <Tabs items={tabsContent} type="alternative" status="primary"></Tabs>
      <Tabs items={tabsContent} type="alternative" status="secondary"></Tabs>

      <Tabs items={tabsContent} type="default" status="neutral"></Tabs>

      <br />

      <Button type="default" size="large" status="primary">Button</Button>
      <Button type="default" size="small" status="primary">Button</Button>
      <Button type="default" size="large" status="secondary">Button</Button>
      <Button type="default" size="small" status="secondary">Button</Button>
      <Button type="default" size="large" status="inactive">Button</Button>
      <Button type="default" size="small" status="inactive">Button</Button>

      <br />

      <Button type="alternative" size="large" status="primary">Button</Button>
      <Button type="alternative" size="small" status="primary">Button</Button>
      <Button type="alternative" size="large" status="secondary">Button</Button>
      <Button type="alternative" size="small" status="secondary">Button</Button>
      <Button type="alternative" size="large" status="inactive">Button</Button>
      <Button type="alternative" size="small" status="inactive">Button</Button>

      <br />

      <Button type="clean" size="large" status="primary">Button</Button>
      <Button type="clean" size="small" status="primary">Button</Button>
      <Button type="clean" size="large" status="secondary">Button</Button>
      <Button type="clean" size="small" status="secondary">Button</Button>
      <Button type="clean" size="large" status="inactive">Button</Button>
      <Button type="clean" size="small" status="inactive">Button</Button>

      

      {/* <Selecao itens={opcoes}  valores={valoresOpcoes} tamanho="grande" status="ativo"></Selecao> */}
    </div>
  );
}

export default App;
