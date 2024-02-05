import {useState} from 'react';

function SearchOrder() {
  const [query, setQuery] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleSubmit} />
    </form>
  );
}

export default SearchOrder;
