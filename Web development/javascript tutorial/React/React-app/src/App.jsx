import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './button/Button.jsx'
import Inline from './Inline.jsx'
import CardProps from './CardProps.jsx'
import List from './list.jsx'
import Buttonc from './Buttonc.jsx'
import Pfp from './pfp.jsx'
import Component from './component.jsx'
import Check from './onChange.jsx'
import Color from './colorpicker.jsx'
import ComponentUp from "./componentw'updater.jsx"
import Objectupdate from './Objectupdate.jsx'
import Arrayup from './Arrayupdate.jsx'
import Cars from './ArrayObjectUpdate.jsx'
import Todo from './Todo.jsx'
import Effect from './useeffect.jsx'
import Clock from './clock.jsx'
import A from './components/CompA.jsx'
import Ref from './ref.jsx'
import Stopwatch from './stopwatch.jsx'

function App() {
  const fruits=[
    {id:1,name:'apple',cal:200},
    {id:2,name:'pineapple',cal:250},
    {id:3,name:'tomato',cal:2321},
    {id:4 ,name:'pizza',cal:180},
  ]
  return(
    <>
      <Header/>
      <Food/>
      <Card />
      <Card />
      <Button/>
      <Inline/>
      <Footer/>
      <CardProps name="mimimi" title="Mimimi" age= {30} />
      <CardProps name="le potato" title="Mimi the II" age = {27} />
      <CardProps />
      <br></br>
      {fruits.length>0? <List items={fruits} category="Fruits"/> : null}
      <Buttonc/>
      <br></br>
      <Pfp/>
      <Component/>
      <Check/>
      <Color/>
      <ComponentUp/>
      <Objectupdate/>
      <Arrayup/>
      <Cars/>
      <Todo/>
      <Effect/>
      <Clock/>
      <A/>
      <Ref/>
      <Stopwatch/>
    </>
  );
}

export default App
