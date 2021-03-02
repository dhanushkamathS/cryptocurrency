import React from 'react';
import {FormControl} from 'react-bootstrap';
const SearchBox = (props)=>{
    return(
       <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.searchChange} />
    );
}
export default SearchBox;
