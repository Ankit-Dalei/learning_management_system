import React from 'react'
import './Student.css'
import { useNavigate  } from 'react-router-dom';

const StudentCard = () => {
    const navigate=useNavigate()
    const handelnavi=((c)=>{   
        const linkName = c.currentTarget.getAttribute('name');
        // console.log(linkName);
        if (linkName==="Classroom") {
            navigate("Classroom")
        } 
        else if (linkName==="Assignment") {
            navigate("Assignment")
        }
        else if (linkName==="Test") {
            navigate("Test")
        }
        else if (linkName==="Group") {
            navigate("Group")
        }
        else if (linkName==="Compiler") {
            navigate("Compiler")
        }
        else{
            navigate("/")
        }
    })
    const obj={
        classroom:{photo:"",name:"Classroom",link:"Classroom"},
        Assignment:{photo:"",name:"Assignment",link:"Assignment"},
        Test:{photo:"",name:"Test",link:"Test"},
        Project:{photo:"",name:"Group Project",link:"Group"},
        Code:{photo:"",name:"Code Editor",link:"Compiler"}
    }
    const stncard = Object.entries(obj).map(([lis,i])=>{
        return (
          <>
              <div className="stcard_nav_card">
                  <div className="snc_top">{i.photo}</div>
                  <div className="snc_bottom" onClick={handelnavi} name={i.link}>{i.name}</div>
              </div>
          </>
        );
    });
  return (
    <>
      <div className="hns_body_container">
        <div className="stcard_nav">
            {stncard}
        </div>
      </div>
    </>
  )
}

export default StudentCard