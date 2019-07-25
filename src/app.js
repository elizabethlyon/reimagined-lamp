import React from 'react';

const Headline = () => {
  return (
    <h1 className="title">Hello, universe!</h1>
  )
}

const Greeting = (props) => {

  function TimeWrapper() {
    function timer() {
      let date = new Date().toLocaleTimeString();
    }
    setInterval(timer, 1000);
  }


  const {name, age} = props;

  return (
    <div>
      Greetings, {name}. You are {age} years old.
      <p>It is {new Date().toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"})}.</p>
    </div>
  )
}

const App = () => {
  return (
      <div>
        <Headline />
        <Greeting name="Liz" age={27}/>
      </div>
    )
}


export default App;
