import React from 'react'
import './Student.css'

const Assignment = () => {
    const obj={
        classroom:{photo:"",name:"Classroom",link:"Classroom"},
        Assignment:{photo:"",name:"Assignment",link:"Assignment"},
        Test:{photo:"",name:"Test",link:"Test"},
        Project:{photo:"",name:"Group Project",link:"Group"},
        Code:{photo:"",name:"Code Editor",link:"Compiler"},
        Coode:{photo:"",name:"Code Editor",link:"Compiler"},
        Cooode:{photo:"",name:"Code Editor",link:"Compiler"},
        Codeee:{photo:"",name:"Code Editor",link:"Compiler"}
    }
    const stncard = Object.entries(obj).map(([lis,i])=>{
        return (
          <>
              <div className="assign_stcard_nav_card">
                  <div className="snc_top">{i.photo}</div>
                  <div className="snc_bottom" name={i.link}>{i.name}</div>
              </div>
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