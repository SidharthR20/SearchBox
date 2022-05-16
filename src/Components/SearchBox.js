import { SearchBoxInput } from "../Styling/StyledComponents";
//import SearchIcon from '@mui/icons-material/Search';
import UserData from '../data.json';
import { useState } from "react";

const SearchBox = () =>{
    const[serachTerm,setSearchTerm] = useState('');
    return(
        <>
            <SearchBoxInput type="text" placeholder="Your Local Search Bar" size="50" onChange={event=>{setSearchTerm(event.target.value)}}/>
            {UserData.filter((val)=>{
                if(serachTerm === "")
                {
                    return val;
                } 
                else if(val.first_name.toLocaleLowerCase().includes(serachTerm.toLowerCase()))
                {
                    return val;
                }
            }).map((val,key)=>{
                return( 
                <div className="user">
                  {val.first_name}
                </div>
            )})}
        </>

    )
}

export default SearchBox;