import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputData, setInputData] = useState('');
  const [lists, setLists] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const savedLists = JSON.parse(localStorage.getItem('todos') || "[]");

  useEffect(() => {
    if (savedLists) {
      setLists(savedLists);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(lists));
  }, [lists]);

  const setTodo = () => {
    if (!inputData) {
      alert("List will not be empty");
    } else {
      setLists([...lists, { text: inputData, isActive: false }]);
    }
    setInputData('');
  };

  const deleteItem = (id) => {
    let removeItem = lists.filter((item, index) => {
      return id !== index;
    });
    setLists(removeItem);
  };

  const toggleCompleted = (index) => {
    const updatedLists = [...lists];
    updatedLists[index].isActive = !updatedLists[index].isActive;
    setLists(updatedLists);
  };

  const removeAll = () => {
    if (window.confirm("Are you sure you want to delete all items")) {
      setLists([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setTodo();
    }
  };

  return (
    <>
      <div className="container">
        <div className="title"><h1>Simple ToDo List</h1></div>

        <div className="todo_wrapper">
          <div className="input_group">
            <input
              type="text"
              placeholder='Add your list here'
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className='additem' onClick={setTodo}></button>
          </div>

          <ul className="list_wrapper">
            {
              lists.map((item, index) => {
                return (
                  <li className={`list ${item.isActive ? 'active' : ''}`} key={index}>
                    <span className='checkbox' onClick={() => toggleCompleted(index)}></span>
                    <p>{item.text}</p>
                    <span className='itemremove' onClick={() => deleteItem(index)}>X</span>
                  </li>
                )
              })
            }
          </ul>

          <div className="main_btn">
            <button className='button' onClick={removeAll}>Remove All</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default App;
