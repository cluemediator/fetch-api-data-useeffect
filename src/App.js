import { useEffect, useState } from "react";

function App() {

  const [inputId, setInputId] = useState('');
  const [id, setId] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    if (id) {
      url += `/${id}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setPosts(Array.isArray(res) ? res : [res]);
      });
  }, [id]);

  // handle click evnet of the button
  const handleButtonClick = () => {
    setId(inputId);
  }

  return (
    <div className="App">
      <div className="form">
        <h3>Fetch API data using useEffect - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
        <input
          type="text"
          value={inputId}
          onChange={e => setInputId(e.target.value)}
          style={{ marginRight: 10 }} />
        <input
          type="button"
          value={inputId ? 'Fetch' : 'Fetch All'}
          onClick={handleButtonClick} />
      </div>
      <ul>
        {posts.map(x => <li>{`Id: ${x.id} | Title: ${x.title}`}</li>)}
      </ul>
    </div>
  );
}

export default App;
