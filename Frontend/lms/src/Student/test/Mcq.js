import React from 'react'
import StudentUniversalCard from '../StudentUniversalCard';

const Mcq = () => {
    const obj={
        classroom:{photo:"",name:"Test",link:"Classroom",p:"Total Questions: 10"},
        Assignment:{photo:"",name:"Test",link:"Assignment",p:"Total Questions: 10"},
        Test:{photo:"",name:"Test",link:"Test",p:"Total Questions: 10"},
        Project:{photo:"",name:"Test",link:"Group",p:"Total Questions: 10"},
        Codegfdee:{photo:"",name:"Test",link:"Compiler",p:"Total Questions: 10"},
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
            <StudentUniversalCard name={i.name} enter={"Solve"} p={i.p}/>
          </>
        );
    });
  return (
    <>
      <div className="mcq_st_inner">
        {stncard}
      </div>
    </>
  )
}

export default Mcq