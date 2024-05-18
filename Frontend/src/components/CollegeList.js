import React, { useState, useEffect } from 'react';

function CollegeList({domicileState,cat,neetScore}) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null); // Add error state

    const [jsonData,setJsonData]=useState([])
let json
  const fetchData = async () => {
    
          const response = await fetch(`http://localhost:8080/courses/${domicileState}/${cat}/${neetScore}`,{mode:'cors'});
           json= await response.json();
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          
          setJsonData(json);
          
   
  };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='collegelist' style={{ position:'absolute', top:'10%',width:'100vw'}} >
            {error && <p>{error}</p>} {/* Display error message */}
            {/* <button onClick={fetchData}>Fetch Data</button> */}
            {/* Rest of the code */}
            <table border={1} id='list2'  >
                <thead>
                    <tr>
                        <th>College Name</th>
                        <th>General Rank</th>
                        <th>General Score</th>
                        <th>OBC Rank</th>
                        <th>OBC Score</th>
                        <th>SC Rank</th>
                        <th>SC Score</th>
                        <th>ST Rank</th>
                        <th>ST Score</th>
                    </tr>
                </thead>
                <tbody>
                    {jsonData.map((item) => (
                        <tr key={item.college_name}>
                            <td>{item.college_name}</td>
                            <td>{item.general_rank}</td>
                            <td>{item.general_score}</td>
                            <td>{item.obc_rank}</td>
                            <td>{item.obc_score}</td>
                            <td>{item.sc_rank}</td>
                            <td>{item.sc_score}</td>
                            <td>{item.st_rank}</td>
                            <td>{item.st_score}</td>
                        </tr>
                    ))}
                   
                </tbody>
            </table>
        </div>
    );
}

export default CollegeList;

