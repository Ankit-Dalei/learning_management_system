import React from 'react';
import './Student.css';
import { useNavigate } from 'react-router-dom';

const StudentCard = () => {
    const navigate = useNavigate();

    const handleNavigation=((c)=>{   
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

    const obj = {
        classroom: { photo: "/stimg/class.png", name: "Classroom", link: "Classroom" },
        Assignment: { photo: "/stimg/assignment.png", name: "Assignment", link: "Assignment" },
        Test: { photo: "/stimg/test.png", name: "Test", link: "Test" },
        Project: { photo: "/stimg/group.png", name: "Group Project", link: "Group" },
        Code: { photo: "/stimg/compiler.png", name: "Code Editor", link: "Compiler" }
    };

    const stncard = Object.entries(obj).map(([key, item]) => (
        <div key={item.link} className="stcard_nav_card" onClick={() => handleNavigation(item.link)}>
            <div className="snc_top"><img src={item.photo} alt={item.name} /></div>
            <div className="snc_bottom">{item.name}</div>
        </div>
    ));

    return (
        <div className="hns_body_container">
            <div className="stcard_nav">
                {stncard}
            </div>
        </div>
    );
};

export default StudentCard;
