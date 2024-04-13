import './Student.css'
import StudentDash from './StudentDash'
import { useNavigate  } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

const HeadNavStudent = () => {
  const navigate=useNavigate()
  const handelclick=()=>{
    console.log("click")
  }
  const handellogclick=(()=>{
    navigate("/")
  })
  return (
    <>
    <div className="hns_header">
        <div className="hns_h_inner">
            <div className="hnsh_name">
                CENTURION UNIVERSITY
            </div>
            <div className="hnsh_extra">
              <div className="hnshe_profile" onClick={handelclick}>210301120073@cutm.ac.in</div>
              <div className="hnshe_logout">
                <button onClick={handellogclick}>Logout</button>
              </div>
            </div>
        </div>
    </div>
    <Outlet/>
    <StudentDash/>
    </>
  )
}

export default HeadNavStudent