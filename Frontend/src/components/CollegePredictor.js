import { useEffect, useState } from 'react'
// import React, { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './CollegePredictor1.css'
import CollegeList from './CollegeList.js';

function CollegePredictor() {
  const [yes,setYes]=useState(false);
  const [neetScore, setNeetScore] = useState(12000);
  const [gender, setGender] = useState('Male');
  const [category, setCategory] = useState('General');
  const [domicileState, setDomicileState] = useState('Uttar Pradesh');
 const [cat,setCat]=useState('general_rank')
  const handleNeetScoreChange = (e) => {
    setNeetScore(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
//  let cat
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    let newCat;
    if(e.target.value === 'General'){
      newCat = 'general_rank';
    }else if(e.target.value === 'OBC'){
        newCat = 'obc_rank';
      }
     else if(e.target.value === 'SC'){
      newCat = 'sc_rank';
    } else if(e.target.value === 'ST'){
      newCat = 'st_rank';
    }
    setCat(newCat)
    // console.log(cat);
  };

  const handleDomicileStateChange = (e) => {
    setDomicileState(e.target.value);
    console.log(domicileState);
  };

  const handlePredictForOtherExams = () => {
    // Logic for predicting other exam results
  };

  const handlePredictResults = () => {
    // Logic for predicting current exam results
  };
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



 
  // document.querySelector('body').innerHTML=CollegeList();
  return(
<>

    {yes?
      <CollegeList domicileState={domicileState} cat={cat} neetScore={neetScore}/>:
      <div className="exam-registration-form" style={{boxShadow:'1px 1px  3px ', border:'none' , borderRadius:'20px', position:'absolute', left:'50%', top:'60%', translate:'-50% -60%',fontFamily:"Arial,sans-serif",maxWidth:'400px',margin:'0px'}}>
      <h2 className="form-heading">Giving your exam rank will help us recommend you better colleges and admissions.</h2>
      <p className="form-subheading">If you don't have actual rank, then enter your expected rank.</p>

      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="neetScore" className="field-label">NEET (MBBS)</label>
          <input
            id="neetScore"
            type="number"
            style={{border:"1px solid #ccc ",padding:"5px"}}
            value={neetScore}
            onChange={handleNeetScoreChange}
            className="neet-score-input"
          />
        </div>

        <div className="form-field">
          <label className="field-label">Gender</label>
          <div className="gender-options">
            <div>
              <input
                type="radio"
                id="genderMale"
                value="Male"
                checked={gender === 'Male'}
                onChange={handleGenderChange}
              />
              <label htmlFor="genderMale">Male</label>
            </div>

            <div>
              <input
                type="radio"
                id="genderFemale"
                value="Female"
                checked={gender === 'Female'}
                onChange={handleGenderChange}
              />
              <label htmlFor="genderFemale">Female</label>
            </div>

            <div>
              <input
                type="radio"
                id="genderOther"
                value="Other"
                checked={gender === 'Other'}
                onChange={handleGenderChange}
              />
              <label htmlFor="genderOther">Other</label>
            </div>
          </div>
        </div>

        <div className="form-field">
 <label htmlFor="category" className="field-label">Category</label>
 <select id="category" value={category} onChange={handleCategoryChange} className="category-select">
   <option value="General" name="general_rank">General</option>
   <option value="OBC" name='obc_ranc'>OBC</option>
   <option value="SC" name='sc_rank'>SC</option>
   <option value="ST" name='st_rank'>ST</option>
   {/* Add other category options as needed */}
 </select>
</div>


        <div className="form-field">
          <label htmlFor="domicileState" className="field-label">Domicile State</label>
          <select
            id="domicileState"
            value={domicileState}
            onChange={handleDomicileStateChange}
            className="domicile-state-select"
          >
            <option value="Al">All India</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            {/* Add other state options as needed */}
          </select>
        </div>
      </div>

      <div className="button-group">
        {/* <button onClick={handlePredictForOtherExams} className="predict-other-exams-button">
          Predict For Other Exams
        </button> */}
        <button onClick={()=>{
            // fetchData();
         setYes(true)}}
         className="predict-results-button">
          Predict Results
        </button>
      </div>
    </div>
      }
    </>
    // </CollegeList>
  )
}

export default CollegePredictor
