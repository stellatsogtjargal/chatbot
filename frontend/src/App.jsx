import { useState, useRef, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [allMessages, setAllMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const listRef = useRef(null);
  useEffect(()=>{
    listRef.current?.lastElementChild?.scrollIntoView()
  },[allMessages])

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // setAllMessages([...allMessages, {role:"user",content:e.target.value}]);
      const response = await axios.post(`http://localhost:5000/message`, {messages:[...allMessages, {role:"user",content:e.target.value}]})
      setInputText("");
      setAllMessages([...allMessages, {role:"user",content:e.target.value},{role:"assistant",content:response.data}]);
    }
  };
  const handleSearchChange = (e) => {
    setInputText(e.target.value);
  };
  console.log(allMessages)
  return (
    <>
      <div className='main-container'>
        <div className='msgs' ref={listRef}>
          {allMessages.map((msg,idx)=>{
            return (
              <div key={idx}>
                {msg["role"]==="user"?<div className='user-msg'>{msg["content"]}</div>:<div className='ai-msg'>{msg["content"]}</div>}
              </div>
            )
          })}
        </div>
        <div className='input-container'>
          <form>
            <input
              value={inputText}
              onKeyDown = {handleKeyPress}
              onChange={handleSearchChange}
              placeholder='Message'
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default App
