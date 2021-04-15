// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const SearchBar = () => {
//   const [searched, setSearched] = useState("");
//   const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
//   const [items, setItems] = useState(null);

//   useEffect(() => {
//     fetch("/exercisesList")
//       .then((res) => res.json())
//       .then((data) => {
//         setItems(data.data.results);
//         console.log("Hello", data);
//       });
//   }, []);

//   let name = "";

//   const matchedSuggestions = exercisesList.filter((exercise) => {
//     return (
//       exercise.name.toLowerCase().includes(searched.toLowerCase()) &&
//       searched.length > 1
//     );
//   });

//   return (
//     <>
//       <Container>
//         <Div>
//           <Input
//             type="text"
//             value={searched}
//             onChange={(event) => setSearched(event.target.value)}
//             onKeyDown={(ev) => {
//               switch (ev.key) {
//                 case "ArrowUp": {
//                   setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
//                   return;
//                 }
//                 case "ArrowDown": {
//                   setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
//                   return;
//                 }
//               }
//             }}
//           />
//           <Button onClick={() => setSearched("")}>Clear</Button>
//         </Div>
//       </Container>
//     </>
//   );
// };

// const Container = styled.div``;

// const Div = styled.div``;

// const Input = styled.input``;

// const Button = styled.button``;

// const UL = styled.ul``;

// const Suggestion = styled.div``;

// const Prediction = styled.div``;

// const Category = styled.div``;

// export default SearchBar;
