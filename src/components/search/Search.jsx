import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchCriteria, setSearchCriteria] = useState("");
    
    return (
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop: "10px" }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar noticias"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={searchCriteria}
                onChange={(e) => {
                    setSearchCriteria(e.target.value)
                }}
            />
            <IconButton 
                type="button" 
                sx={{ p: '10px' }} 
                aria-label="search"
                onClick={() => {
                    onSearch(searchCriteria)
                }}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}


export default Search;