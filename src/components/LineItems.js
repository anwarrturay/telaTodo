import React from 'react';

const LineItems = ({items, handleDelete, handleEdit, editId, handleUpdate, editedItem,setEditedItem}) => {
  return (
    items.map((item)=>(
      <div className='item-container'>
        <li className='list-group' key={item.id}>
          {editId === item.id ? (
            <>
              <form onSubmit={handleUpdate} className="editView">
                <input 
                  type="text" 
                  className="form-control w-100" 
                  id="inputText" 
                  required
                  value={editedItem}
                  onChange={(e) => setEditedItem(e.target.value)}
                />
                <button className='btn btn-success' type="submit">
                  Update
                </button>
              </form>
            </>
          ): (
            <>
              <div className="contents">
                <div className='id'>{item.id}</div>
                <div className='text'>{item.name}</div>
              </div>
              <div className="buttons">
                <button 
                className='btn btn-success'
                onClick={()=> handleEdit(item.id)}
                >Edit</button>
                <button 
                  className='btn btn-danger'
                  onClick={()=> handleDelete(item.id)}
                >Delete</button>
              </div>
            </>
          )}
        </li>
      </div>
    ))
  );
}

export default LineItems;
