import 'bootstrap/dist/css/bootstrap.min.css';
import InputArea from './components/InputArea';
import LineItems from './components/LineItems';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [items, setItems] = useState([]);
  const [listItem, setListItem] = useState('');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [editedItem, setEditedItem] = useState('');
  const [editId, setEditId] = useState(null);
  // Search functionality
  useEffect(()=>{
    const searchedResults = items.filter((item)=> ((item.name).toLowerCase()).includes(search.toLowerCase()))
    setSearchResults(searchedResults);
  }, [items,search]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    listItem && addItem(listItem)
  }

  // Add functionality
  const addItem = (name)=>{
    const id = items.length ? items[items.length-1].id + 1 : 1;
    const value = {id,name};
    const newListItems = [...items, value];
    setItems(newListItems);
    localStorage.setItem('newListItems', JSON.stringify(newListItems));
    setListItem('');
  }

  // Deleting for each item
  const handleDelete = (id)=>{
    const selectedItem = items.filter((item)=> item.id !== id );
    setItems(selectedItem);
  }

  const handleEdit  = (id)=>{
    const selectedEditItem = items.map((item)=> item.id === id )
    setEditId(id);
    setEditedItem(selectedEditItem.name);
  }

  
  const handleUpdate =(e)=>{
    e.preventDefault()
    const updatedItem = items.map((item)=>(
      editId === item.id ? {...item, name: editedItem}: item
    ))
    setItems(updatedItem);
    setEditId(null);
    setEditedItem('');
  }


  return (
    <div className="App">

      <InputArea 
        listItem={listItem}
        setListItem={setListItem}
        handleSubmit={handleSubmit}
        addItem={addItem}
        items={items}
        setItems={setItems}
        search={search}
        setSearch={setSearch}
      />

      <LineItems 
        items={searchResults}
        editId={editId}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleUpdate={handleUpdate}
        editedItem={editedItem}
        setEditedItem={setEditedItem}
      />

    </div>
  );
}

export default App;
