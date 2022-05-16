//import { useEffect, useState } from "react";
import SearchBox from "./Components/SearchBox";
import { Main,Container1 , SearchBoxContainer } from "./Styling/StyledComponents";

/*
const [data,setData] = useState([]);

const getData=()=>{
  axios.get('https://mocki.io/v1/58727c43-19ea-438f-9043-bbf53d2450d7')
    .then((response) =>{
      console.log(response);
      const myData= response.data;
      setData(myData);
    })
}
useEffect(()=>getData(),[]);
*/

function App() {
  return (
    <Main>
      <Container1>
        <h1>Local Search Engine</h1>
        <SearchBoxContainer>
            <SearchBox/>
        </SearchBoxContainer>
      </Container1>
    </Main>
  );
}

export default App;
