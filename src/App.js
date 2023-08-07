import { useState } from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import { NewsList } from './components/newsList';

function App() {
  const [query, setQuery] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const handleCategorySelect = (category) => {
    setQuery(category);
    setSearchValue('');
  };

  const handleSearch = (searchValue) => {
    setSearchValue(searchValue);
    if (searchValue.trim() === "") {
      setQuery("all"); // Set the query to "all" when the search is empty
    } else {
      setQuery(searchValue);
    }
  };

  return (
    <div className="App">
      <Navbar
       onCategorySelect={handleCategorySelect}
       onSearch={handleSearch}
       />
      <NewsList query={query} />
    
    </div>
  );
}

export default App;
