import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  let [currentSearch, setCurrentSearch] = useState("");
  let [page, setPage] = useState(1);
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  const auth = "nmG80DY17IdlneMSXW8dsrYP2w87ym1u2Vz3zRhMUWvuWBHqlq0vyQ9i";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  const search = async (url) => {
    if (input === "") {
      url = initialURL;
    }
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    // console.log(result);
    setData(result.data.photos);
    setCurrentSearch(input);
    setPage(1);
  };

  //注意這邊page值的Closure
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data && //data is null ,and oprator will not execute
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
