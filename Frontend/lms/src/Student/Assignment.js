import React from 'react'
import './Student.css'
import StudentUniversalCard from './StudentUniversalCard';

const Assignment = () => {
    const obj={
        Java:{name:"Java",link:"Classroom"},
        c:{name:"c",link:"Assignment"},
        Python:{name:"Python",link:"Test"},
        Cpp:{name:"Cpp",link:"Group"},
        Node:{name:"Node Js",link:"Group"},
        Js:{name:"Java Script",link:"Group"},
        csharp:{name:"C#",link:"Group"}
    }
    const stncard = Object.entries(obj).map(([lis,i])=>{
        return (
          <>
              {/* <div className="assign_stcard_nav_card">
                  <div className="snc_top">{i.photo}</div>
                  <div className="snc_bottom" name={i.link}>{i.name}</div>
              </div> */}
              <StudentUniversalCard name={i.name} enter={"Enter"} p={i.p}/>
          </>
        );
    });
  return (
    <>
      <div className="ASSign_hns_body_container">
        <div className="ASSign_stcard_nav">
            {stncard}
        </div>
      </div>
    </>
  )
}

export default Assignment