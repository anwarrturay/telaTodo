import React from 'react';
import DataContext from '../hooks/DataContext';
import { useState, useContext } from 'react';
const LineItems = () => {
  const [editedItem, setEditedItem] = useState('');
  const [editId, setEditId] = useState(null);
  const {items, setItems, searchResults} = useContext(DataContext);

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
    searchResults.map((item)=>(
      <div className='flex flex-col items-center justify-center'>
        <li className='list-group' key={item.id}>
          {editId === item.id ? (
            <>
              <form onSubmit={handleUpdate} className="editView">
                <input 
                  type="text" 
                  className="flex items-center justify-center w-[300px] border-1 m-2 py-2.5 rounded-md outline-none xs:w-[420px] sm:w-[600px] md:w-[690px]" 
                  id="inputText" 
                  required
                  value={editedItem}
                  onChange={(e) => setEditedItem(e.target.value)}
                />
                <div className='flex items-center justify-center'>
                  <button className='bg-green-700 text-white font-montserrat py-2.5 w-[300px] font-medium text-xl rounded-md xs:w-[420px] sm:w-[600px] md:w-[690px]' type="submit">
                  Update
                  </button>
                </div>

              </form>
            </>
          ): (
            <div className='bg-[#000814] flex items-start justify-between w-[300px] m-2 py-4 rounded-lg xs:w-[420px] sm:w-[600px] md:w-[690px]'>
              <div className="flex flex-col mx-3.5">
                <div className='text-2xl font-montserrat font-medium text-white text-wrap'>{(item.name).charAt(0).toUpperCase()+(item.name).slice(1)}</div>
                <div className='text-sm font-montserrat font-medium text-red-900'>Date: {item.date}</div>
              </div>
              <div className="flex items-center mr-2">
                <button 
                className='bg-teal-500 py-2 px-2 rounded-md text-white'
                onClick={()=> handleEdit(item.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                </button>
                <button 
                  className='bg-red-600 py-2 px-2 rounded-md text-white ml-3'
                  onClick={()=> handleDelete(item.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </li>
      </div>
    ))
  );
}

export default LineItems;
