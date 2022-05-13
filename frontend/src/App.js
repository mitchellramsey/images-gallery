import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_APP_KEY

function App() {
  const [word, setWord] = useState('')

  const handleSearchSubmit = async (e) => {
    try{
      e.preventDefault()
      const res = await fetch(`https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`)
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err)
    }
  }



  return (
    <div className="App">
      <Header title='Images Gallery'/>
      <Search handleSubmit={handleSearchSubmit} word={word} setWord={setWord}/>
    </div>
  );
}

export default App;
