import React from 'react';
import './App.css';
import { Navbar  ,Form} from 'react-bootstrap';
import SearchBox from './SearchBox';

function NavbarCustom({searchfield , searchChange}) {
  
  return (
    <Navbar   className='Colorbg'>
  <Navbar.Brand  className="f2  fl w-100 crypto" >Cryptocurrency</Navbar.Brand>
  <SearchBox searchChange = {searchChange}/>
    <Form inline>
    </Form>
</Navbar>
  )
}

export default NavbarCustom;
