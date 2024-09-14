import 'bootstrap/dist/css/bootstrap.min.css'; 

const InputArea = ({listItem, setListItem, handleSubmit, search, setSearch}) => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Tela Todo App</h1>
      <form className='form'>
        <div className="mb-3 form-group">
          <input 
            type="text" 
            className="form-control w-100" 
            id="inputText" 
            placeholder="What to do....."
            required
            value={listItem}
            onChange={(e)=> setListItem(e.target.value)}
          />
          <input 
            id='search'
            className='form-control w-100'
            type="text"
            placeholder='Search....'
            value={search}
            onChange={(e)=> setSearch(e.target.value)} 
          />
          <button
            id='addBtn'
            type='submit'
            className='btn btn-success'
            onClick={handleSubmit}
          >Add</button>
        </div>

      </form>
    </>
  );
}

export default InputArea;
