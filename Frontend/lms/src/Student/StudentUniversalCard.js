import React, { useEffect } from 'react'

const StudentUniversalCard = (i) => {
  return (
    <>
        <div className="mcq_q_card_st">
                <div className="test_info">
                    <h2>{i.name}</h2>
                    <p>{i.p}</p>
                </div>
                <button>{i.enter}</button>
        </div>
    </>
  )
}

export default StudentUniversalCard