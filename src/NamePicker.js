import React from "react"
import BabyNames from "./Names.js"
const NamePicker = ({searchValue}) => {
    const filteredNames = BabyNames.filter((entry) =>
    entry.name.toLowerCase().includes(searchValue.toLowerCase()))
    return (
        <ul>
        {BabyNames.map((entry) => (
        <li className ={entry.sex} key={entry.id}><button>{entry.name}</button> </li>
  
        ))
          }
      </ul>
    )
}
export default NamePicker;