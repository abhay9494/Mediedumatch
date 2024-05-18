import { useState } from 'react'
// import PhoneInput from 'react-phone-number-input/input'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CollegeList from './CollegeList';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function RankPredictor() {
    const [yes,setYes]=useState(true);
    const [neetScore, setNeetScore] = useState(99.8995473);
    const [phone, setPhone] = useState('919898987654');
    const [category, setCategory] = useState('General');
    const [email, setEmail] = useState('abh1234@gmail.com');
   const [cat,setCat]=useState('general_rank')
   const [rank,setRank]=useState(1200)
    const handleNeetScoreChange = (e) => {
      setNeetScore(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
      console.log(phone);
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
      
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
   
    };

  return (
    <>
    {
        yes? 
        <div>

        
        <div className="exam-registration-form" style={{boxShadow:'1px 1px  3px ', border:'none' , borderRadius:'20px', position:'absolute', left:'50%', top:'50%', translate:'-50% -60%', margin:'0px'}}>
        <h2 className="form-heading">Giving your neet percentile will help us in predicting your rank.</h2>
       
  
        <div className="form-fields">
          <div className="form-field">
            <label htmlFor="neetScore" className="field-label">NEET Percentile</label>
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
   <label htmlFor="category" className="field-label">Category</label>
   <select id="category" 
   value={category} onChange={handleCategoryChange} 
   className="category-select">
     <option value="General" name="general_rank">General</option>
     <option value="OBC" name='obc_ranc'>OBC</option>
     <option value="SC" name='sc_rank'>SC</option>
     <option value="ST" name='st_rank'>ST</option>
    
   </select>
  </div>
  
          <div className="form-field">
            <label htmlFor="neetScore" className="field-label">Email</label>
            <input
              id="neetScore"
              type='email'
              style={{border:"1px solid #ccc ",padding:"0px"}}
              value={email}
              onChange={handleEmailChange}
              className="neet-score-input"
            />
          </div>
  
          
  
        </div>
  
        <div className="button-group">
      
        <button onClick={()=>{ setYes(false)
            
            let ra=2381833-((neetScore/100)*2381833);
            
            setRank(Math.floor(ra));
        }}
         className="predict-results-button">
          Predict Results
        </button>
      </div>
        
          
        
      </div>
      
      </div>
      :
      <div > 
        <h3 style={{color:'black', position:'absolute',left:'40%' ,top:'15%',backgroundColor:'lightgreen',padding:'5px'}}>Your rank is {rank}</h3>
           
           
        <div style={{position:'absolute' ,top:'30%'}}>

        <CollegeList domicileState={'Al'} cat={cat} neetScore={rank}/>
        </div>
      </div>
    }
     
    </>
  )
}

export default RankPredictor
