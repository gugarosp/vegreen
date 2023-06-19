import Button from './elements/Button/Button';
import Tabs from './elements/Tabs/Tabs';
import Input from './elements/Input/Input';
import Chip from './elements/Chip/Chip';
import Textarea from './elements/Textarea/Textarea';
import Checkbox from './elements/Checkbox/Checkbox';

function App() {
  const tabsContent = [
    'Item 1',
    'Item 2',
    'Item 3'
  ];

  return (
    <div className="App">

      <Checkbox spacing="far" labelPosition="left">Texto</Checkbox>
      <Checkbox spacing="far" labelPosition="right">Texto</Checkbox>
      <Checkbox spacing="together" labelPosition="left">Texto</Checkbox><br />
      <Checkbox spacing="together" labelPosition="right">Texto</Checkbox>

      <br />

      <Textarea inputType="text" placeholder="Type Something" size="large" disabled=""></Textarea>
      <Textarea inputType="number" placeholder="123" size="small" disabled=""></Textarea>

      <Textarea inputType="password" size="large" disabled="disabled">Textarea</Textarea>
      <Textarea inputType="date" size="small" disabled="disabled">Textarea</Textarea>

      <br />

      <Chip type="active" size="large" status="primary">Chip</Chip>
      <Chip type="active" size="medium" status="primary">Chip</Chip>
      <Chip type="active" size="small" status="primary">Chip</Chip>
      <Chip type="inactive" size="large" status="primary">Chip</Chip>
      <Chip type="inactive" size="medium" status="primary">Chip</Chip>
      <Chip type="inactive" size="small" status="primary">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="secondary">Chip</Chip>
      <Chip type="active" size="medium" status="secondary">Chip</Chip>
      <Chip type="active" size="small" status="secondary">Chip</Chip>
      <Chip type="inactive" size="large" status="secondary">Chip</Chip>
      <Chip type="inactive" size="medium" status="secondary">Chip</Chip>
      <Chip type="inactive" size="small" status="secondary">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="warning">Chip</Chip>
      <Chip type="active" size="medium" status="warning">Chip</Chip>
      <Chip type="active" size="small" status="warning">Chip</Chip>
      <Chip type="inactive" size="large" status="warning">Chip</Chip>
      <Chip type="inactive" size="medium" status="warning">Chip</Chip>
      <Chip type="inactive" size="small" status="warning">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="danger">Chip</Chip>
      <Chip type="active" size="medium" status="danger">Chip</Chip>
      <Chip type="active" size="small" status="danger">Chip</Chip>
      <Chip type="inactive" size="large" status="danger">Chip</Chip>
      <Chip type="inactive" size="medium" status="danger">Chip</Chip>
      <Chip type="inactive" size="small" status="danger">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="info">Chip</Chip>
      <Chip type="active" size="medium" status="info">Chip</Chip>
      <Chip type="active" size="small" status="info">Chip</Chip>
      <Chip type="inactive" size="large" status="info">Chip</Chip>
      <Chip type="inactive" size="medium" status="info">Chip</Chip>
      <Chip type="inactive" size="small" status="info">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="neutral">Chip</Chip>
      <Chip type="active" size="medium" status="neutral">Chip</Chip>
      <Chip type="active" size="small" status="neutral">Chip</Chip>
      <Chip type="inactive" size="large" status="neutral">Chip</Chip>
      <Chip type="inactive" size="medium" status="neutral">Chip</Chip>
      <Chip type="inactive" size="small" status="neutral">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="murky">Chip</Chip>
      <Chip type="active" size="medium" status="murky">Chip</Chip>
      <Chip type="active" size="small" status="murky">Chip</Chip>
      <Chip type="inactive" size="large" status="murky">Chip</Chip>
      <Chip type="inactive" size="medium" status="murky">Chip</Chip>
      <Chip type="inactive" size="small" status="murky">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="clear">Chip</Chip>
      <Chip type="active" size="medium" status="clear">Chip</Chip>
      <Chip type="active" size="small" status="clear">Chip</Chip>
      <Chip type="inactive" size="large" status="clear">Chip</Chip>
      <Chip type="inactive" size="medium" status="clear">Chip</Chip>
      <Chip type="inactive" size="small" status="clear">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="black">Chip</Chip>
      <Chip type="active" size="medium" status="black">Chip</Chip>
      <Chip type="active" size="small" status="black">Chip</Chip>
      <Chip type="inactive" size="large" status="black">Chip</Chip>
      <Chip type="inactive" size="medium" status="black">Chip</Chip>
      <Chip type="inactive" size="small" status="black">Chip</Chip>
      <br />
      <Chip type="active" size="large" status="white">Chip</Chip>
      <Chip type="active" size="medium" status="white">Chip</Chip>
      <Chip type="active" size="small" status="white">Chip</Chip>
      <Chip type="inactive" size="large" status="white">Chip</Chip>
      <Chip type="inactive" size="medium" status="white">Chip</Chip>
      <Chip type="inactive" size="small" status="white">Chip</Chip>

      <br />

      <Input inputType="text" placeholder="Type Something" size="large" disabled=""></Input>
      <Input inputType="number" placeholder="123" size="small" disabled=""></Input>

      <Input inputType="password" size="large" disabled="disabled">Input</Input>
      <Input inputType="date" size="small" disabled="disabled">1999-01-01</Input>

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
