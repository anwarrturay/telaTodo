import { useContext, useState } from 'react';
import DataContext from '../hooks/DataContext';
const InputArea = () => {
  const [listItem, setListItem] = useState('');
  const {items, setItems, search, setSearch} = useContext(DataContext);
  const [date, setDate] = useState('');
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    listItem && date && addItem(listItem, date)
  }

  // Add functionality
  const addItem = (name, date)=>{
      const id = items.length ? items[items.length-1].id + 1 : 1;
      const value = {id,name,date};
      const newListItems = [...items, value];
      setItems(newListItems);
      localStorage.setItem('newListItems', JSON.stringify(newListItems));
      setListItem('');
      setDate('');
  }

  return (
    <>
      <div className='bg-[#000814] fixed top-0 left-0 right-0'>
         <h1 className='text-center font-medium font-montserrat text-white'>Omega Events</h1>
      </div>
     
      <form className='flex items-center justify-center mt-5 '>
        <div className="flex items-center justify-center flex-col mt-2 lg:flex lg:flex-row lg:mt-3">
          <input 
            type="text" 
            className="border-1 m-2 w-[300px] py-2.5 rounded-md focus:border-[#212A37] outline-none placeholder:font-montserrat xs:w-[420px] sm:w-[600px] md:w-[690px] lg:w-[300px] xl:w-[400px] xl:m-3" 
            id="inputText" 
            placeholder="What to do....."
            required
            value={listItem}
            onChange={(e)=> setListItem(e.target.value)}
          />
          <input
            id='date'
            className='border-1 m-2 w-[300px] py-2.5 rounded-md focus:border-[#212A37] outline-none cursor-pointer placeholder:font-montserrat xs:w-[420px] sm:w-[600px] md:w-[690px] lg:w-[300px] xl:w-[400px] xl:m-3'
            type='datetime-local'
            value={date}
            onChange={(e)=> setDate(e.target.value)}
          />
          <input 
            id='search'
            className='border-1 m-2 w-[300px] py-2.5 rounded-md focus:border-[#212A37] outline-none placeholder:font-montserrat xs:w-[420px] sm:w-[600px] md:w-[690px] lg:w-[300px] xl:w-[400px] xl:m-3'
            type="search"
            placeholder='Search....'
            value={search}
            onChange={(e)=> setSearch(e.target.value)} 
          />
          {listItem && date && (
          <button
            id='addBtn'
            type='submit'
            className='bg-teal-400 px-10 w-[300px] py-2 mt-2 rounded-lg cursor-pointer text-xl font-medium font-montserrat xs:w-[420px] sm:w-[600px] md:w-[690px] lg:px-2.5 lg:w-[60px] lg:h-[50px] lg:mt-0 lg:text-left xl:w-[175px] xl:text-center'
            onClick={handleSubmit}
          >Add</button>
        )}
        </div>
      </form>
    </>
  );
}

export default InputArea;
