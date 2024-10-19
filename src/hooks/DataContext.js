import { createContext, useState, useEffect} from "react";
const DataContext = createContext({});

export const DataProvider = ({children})=>{
    const [items, setItems] = useState([]);
    const [searchResults, setSearchResults] = useState([])
    const [search, setSearch] = useState('');
    // Search functionality
    useEffect(()=>{
        const searchedResults = items.filter((item)=> ((item.name).toLowerCase()).includes(search.toLowerCase()));
        setSearchResults(searchedResults);
    }, [items,search]);

    return(
        <DataContext.Provider value={{
            items,
            setItems,
            search,
            setSearch,
            searchResults,
            setSearchResults
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;

















