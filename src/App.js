import Button from './elements/Button/Button';
import Tabs from './elements/Tabs/Tabs';
import Input from './elements/Input/Input';
import Chip from './elements/Chip/Chip';

function App() {
  const tabsContent = [
    'Item 1',
    'Item 2',
    'Item 3'
  ]

  return (
    <div className="App">
      <Chip type="active" size="large" status="primary">Chip</Chip>
      <Chip type="active" size="medium" status="primary">Chip</Chip>
      <Chip type="active" size="small" status="primary">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="secondary">Chip</Chip>
      <Chip type="active" size="medium" status="secondary">Chip</Chip>
      <Chip type="active" size="small" status="secondary">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="alert">Chip</Chip>
      <Chip type="active" size="medium" status="alert">Chip</Chip>
      <Chip type="active" size="small" status="alert">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="danger">Chip</Chip>
      <Chip type="active" size="medium" status="danger">Chip</Chip>
      <Chip type="active" size="small" status="danger">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="info">Chip</Chip>
      <Chip type="active" size="medium" status="info">Chip</Chip>
      <Chip type="active" size="small" status="info">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="neutral">Chip</Chip>
      <Chip type="active" size="medium" status="neutral">Chip</Chip>
      <Chip type="active" size="small" status="neutral">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="murky">Chip</Chip>
      <Chip type="active" size="medium" status="murky">Chip</Chip>
      <Chip type="active" size="small" status="murky">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="clear">Chip</Chip>
      <Chip type="active" size="medium" status="clear">Chip</Chip>
      <Chip type="active" size="small" status="clear">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="blak">Chip</Chip>
      <Chip type="active" size="medium" status="blak">Chip</Chip>
      <Chip type="active" size="small" status="blak">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="white">Chip</Chip>
      <Chip type="active" size="medium" status="white">Chip</Chip>
      <Chip type="active" size="small" status="white">Chip</Chip>

      <br />

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
