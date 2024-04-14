import React, { useState } from 'react'
import StudentUniversalCard from './StudentUniversalCard';
import './Student.css'


const Classroom = () => {
  const [selectedSemester, setSelectedSemester] = useState('');

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };
  const obj2={
    1:{sem:"1"},
    2:{sem:"2"},
    3:{sem:"3"},
    4:{sem:"4"},
    5:{sem:"5"},
    6:{sem:"6"},
    7:{sem:"7"},
    8:{sem:"8"}
  }
  const opt = Object.entries(obj2).map(([lis,i])=>{
    return (
      <>
        {/* <div className="mcq_q_card_st">
            <div className="test_info">
                <h2>{i.name}</h2>
                <p>Total Questions: 10</p>
            </div>
            <button>Solve</button>
        </div> */}
        <option value={i.sem}>Semester {i.sem}</option>
      </>
    );
});


  // 
  const obj={
    classroom:{photo:"",name:"Test",link:"Classroom",p:"Total Questions: 10"},
    Assignment:{photo:"",name:"Test",link:"Assignment",p:"Total Questions: 10"},
    Test:{photo:"",name:"Test",link:"Test",p:"Total Questions: 10"},
    Project:{photo:"",name:"Tesjt",link:"Group",p:"Total Questions: 10"},
    Codegfdee:{photo:"",name:"Test",link:"Compiler",p:"Total Questions: 10"},
    Cogfdsdegfdee:{photo:"",name:"Test",link:"Compiler",p:"Total Questions: 10"},
    Cohgfdegfdee:{photo:"",name:"Test",link:"Compiler",p:"Total Questions: 10"},
    Codefdsee:{photo:"",name:"Test",link:"Compiler",p:"Total Questions: 10"},
    Codefdsdee:{photo:"",name:"Test",link:"Compiler",p:"Total Questions: 10"}
}
const stncard = Object.entries(obj).map(([lis,i])=>{
    return (
      <>
        {/* <div className="mcq_q_card_st">
            <div className="test_info">
                <h2>{i.name}</h2>
                <p>Total Questions: 10</p>
            </div>
            <button>Solve</button>
        </div> */}
        <StudentUniversalCard name={i.name} enter={"Enter"}/>
      </>
    );
});
return (
<>
<div className="st_classroom_dash">
        <div className="st_c_d_inner">
          Select Your Semister Here: 
          <select name="semesters" id="semesters" value={selectedSemester} onChange={handleSemesterChange}>
            {opt}
            {/* Add more options as needed */}
          </select>
        </div>
</div>
      <div className="ASSign_hns_body_container">
        <div className="ASSign_stcard_nav">
            {stncard}
        </div>
      </div>
</>
)
}

export default Classroom