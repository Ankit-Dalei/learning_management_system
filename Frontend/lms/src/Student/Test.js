import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Test = () => {
  const obj={
    mcq:{name:"MCQ TEST",link:'/stdash/Test'},
    CODING:{name:"CODING TEST",link:'Coding'},
    passed:{name:"TEST PASSED",link:'PassedTest'},
    upcoming:{name:"UPCOMING TEST",link:'UpcomingTest'}
}
const stncard = Object.entries(obj).map(([lis,i])=>{
    return (
      <>
          <li><Link to={i.link}>{i.name}</Link></li>
      </>
    );
});
  return (
    <>
      <div className="test_st_dash">
        <div className="test_st_dash_top">
          <div className="tsdt_inner">
            <ul>
              {stncard}
            </ul>
          </div>
        </div>
        <div className="test_st_dash_bottom">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Test