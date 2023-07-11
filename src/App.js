import Button from './elements/Button/Button';
import Tabs from './elements/Tabs/Tabs';
import Input from './elements/Input/Input';
import Chip from './elements/Chip/Chip';
import Textarea from './elements/Textarea/Textarea';
import Checkbox from './elements/Checkbox/Checkbox';
import Radio from './elements/Radio/Radio';
import Switch from './elements/Switch/Switch';
import Icon from './elements/Icon/Icon';
import ChatMessage from './elements/ChatMessage/ChatMessage';

function App() {
  const tabsContent = [
    'Item 1',
    'Item 2',
    'Item 3'
  ];

  return (
    <div className="App">

      <ChatMessage type="received" dateHour="2:25PM">Texto</ChatMessage>
      <ChatMessage type="sent" dateHour="2:27PM">Texto</ChatMessage>
      
      <br />

      <Icon icon="fas fa-heart" type="no-background" size="mini" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="mini" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="mini" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="mini" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="mini" status="info"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="mini" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="mini" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="mini" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="mini" status="black"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="mini" status="white"></Icon><br />
      <Icon icon="fas fa-heart" type="no-background" size="small" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="small" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="small" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="small" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="small" status="info"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="small" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="small" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="small" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="small" status="black"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="small" status="white"></Icon><br />
      <Icon icon="fas fa-heart" type="no-background" size="medium" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="medium" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="medium" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="medium" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="medium" status="info"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="medium" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="medium" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="medium" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="medium" status="black"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="medium" status="white"></Icon><br />
      <Icon icon="fas fa-heart" type="no-background" size="large" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="large" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="large" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="large" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="large" status="info"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="large" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="large" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="large" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="large" status="black"></Icon>
      <Icon icon="fas fa-heart" type="no-background" size="large" status="white"></Icon><br />

      <Icon icon="fas fa-heart" type="faux-background" size="mini" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="mini" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="mini" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="mini" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="mini" status="info"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="mini" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="mini" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="mini" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="mini" status="black"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="mini" status="white"></Icon><br />
      <Icon icon="fas fa-heart" type="faux-background" size="small" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="small" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="small" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="small" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="small" status="info"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="small" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="small" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="small" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="small" status="black"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="small" status="white"></Icon><br />
      <Icon icon="fas fa-heart" type="faux-background" size="medium" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="medium" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="medium" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="medium" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="medium" status="info"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="medium" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="medium" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="medium" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="medium" status="black"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="medium" status="white"></Icon><br />
      <Icon icon="fas fa-heart" type="faux-background" size="large" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="large" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="large" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="large" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="large" status="info"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="large" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="large" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="large" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="large" status="black"></Icon>
      <Icon icon="fas fa-heart" type="faux-background" size="large" status="white"></Icon><br />

      <Icon icon="fas fa-heart" type="background" size="mini" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="background" size="mini" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="background" size="mini" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="background" size="mini" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="background" size="mini" status="info"></Icon>
      <Icon icon="fas fa-heart" type="background" size="mini" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="background" size="mini" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="background" size="mini" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="background" size="mini" status="black"></Icon>
      <Icon icon="fas fa-heart" type="background" size="mini" status="white"></Icon><br />
      <Icon icon="fas fa-heart" type="background" size="small" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="background" size="small" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="background" size="small" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="background" size="small" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="background" size="small" status="info"></Icon>
      <Icon icon="fas fa-heart" type="background" size="small" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="background" size="small" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="background" size="small" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="background" size="small" status="black"></Icon>
      <Icon icon="fas fa-heart" type="background" size="small" status="white"></Icon><br />
      <Icon icon="fas fa-heart" type="background" size="medium" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="background" size="medium" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="background" size="medium" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="background" size="medium" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="background" size="medium" status="info"></Icon>
      <Icon icon="fas fa-heart" type="background" size="medium" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="background" size="medium" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="background" size="medium" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="background" size="medium" status="black"></Icon>
      <Icon icon="fas fa-heart" type="background" size="medium" status="white"></Icon><br />
      <Icon icon="fas fa-heart" type="background" size="large" status="primary"></Icon>
      <Icon icon="fas fa-heart" type="background" size="large" status="secondary"></Icon>
      <Icon icon="fas fa-heart" type="background" size="large" status="warning"></Icon>
      <Icon icon="fas fa-heart" type="background" size="large" status="danger"></Icon>
      <Icon icon="fas fa-heart" type="background" size="large" status="info"></Icon>
      <Icon icon="fas fa-heart" type="background" size="large" status="neutral"></Icon>
      <Icon icon="fas fa-heart" type="background" size="large" status="murky"></Icon>
      <Icon icon="fas fa-heart" type="background" size="large" status="clear"></Icon>
      <Icon icon="fas fa-heart" type="background" size="large" status="black"></Icon>
      <Icon icon="fas fa-heart" type="background" size="large" status="white"></Icon><br />
      

      <br /><br />

      <Switch spacing="far" labelPosition="left">Texto</Switch>
      <Switch spacing="far" labelPosition="right">Texto</Switch>
      <Switch spacing="together" labelPosition="left">Texto</Switch><br />
      <Switch spacing="together" labelPosition="right">Texto</Switch><br />
      <Switch spacing="none" labelPosition="none"></Switch>

      <br /><br />

      <Radio name="radio-input" spacing="far" labelPosition="left">Texto</Radio>
      <Radio name="radio-input" spacing="far" labelPosition="right">Texto</Radio>
      <Radio name="radio-input" spacing="together" labelPosition="left">Texto</Radio><br />
      <Radio name="radio-input" spacing="together" labelPosition="right">Texto</Radio><br />
      <Radio name="radio-input" spacing="none" labelPosition="none"></Radio>

      <br /><br />

      <Checkbox spacing="far" labelPosition="left">Texto</Checkbox>
      <Checkbox spacing="far" labelPosition="right">Texto</Checkbox>
      <Checkbox spacing="together" labelPosition="left">Texto</Checkbox><br />
      <Checkbox spacing="together" labelPosition="right">Texto</Checkbox><br />
      <Checkbox spacing="none" labelPosition="none"></Checkbox>

      <br />

      <Textarea placeholder="Type Something" size="large" disabled=""></Textarea>
      <Textarea placeholder="123" size="small" disabled=""></Textarea>

      <Textarea size="large" disabled="disabled">Textarea</Textarea>
      <Textarea size="small" disabled="disabled">Textarea</Textarea>

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
