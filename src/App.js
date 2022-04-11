import Header from './components/ui/Header'
import Search from './components/ui/Search';
import {useState,useEffect} from 'react'
import axios from 'axios';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  
  useEffect(()=>{
    //invoke fetch function
    const fetchItems = async () =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  },[query])


  return (
    <div className="App">
      <Header/>
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
