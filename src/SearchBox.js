import React, {useState} from "react"


const SearchBox =(term) =>{
    return function(e){
        return e.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
    }
export default SearchBox