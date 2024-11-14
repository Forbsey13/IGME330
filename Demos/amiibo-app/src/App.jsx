import { useState } from "react";
import './App.css'
import { useEffect } from "react";
import { loadXHR } from "./Ajax";

// app "globals" and utils
const baseurl = "https://www.amiiboapi.com/api/amiibo/?name=";



const searchAmiibo = (name, callback) => {
  loadXHR(`${baseurl}${name}`, callback);
};

// call searchAmiibo() with "mario" and our callback function
// searchAmiibo("mario", parseAmiiboResult); // DONE

const App = () => {
  const parseAmiiboResult = xhr => {
    // get the `.responseText` string
    const responeString = xhr.responseText;
    // declare a json variable
    let json = JSON
    // try to parse the string into a json object
    json = json.parse(responeString);
    setResults(json.amiibo)


    // log out number of results (length of `json.amiibo`)
    // console.log(`Number of results=${json.amiibo.length}`);

    // // loop through `json.amiibo` and log out the character name
    // for (let obj of json.amiibo) {
    //   console.log(obj.name);
    // }
  };

  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    writeToLocalStorage("term", term);
  });

  return <>
    <header>
      <h1>Amiibo Finder</h1>
    </header>
    <hr />
    <main>
      <button onClick={() => searchAmiibo(term, parseAmiiboResult)}>Search</button>
      <label>
        Name:
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
      </label>
    </main>
    <hr />
    {results.map(amiibo => (
      <span key={amiibo.head + amiibo.tail} style={{ color: "green" }}>
        <h4>{amiibo.name}</h4>
        <img
          width="100"
          alt={amiibo.character}
          src={amiibo.image}
        />
      </span>
    ))}
    <footer>
      <p>&copy; 2023 Ace Coder</p>
    </footer>
  </>;
};

export default App;