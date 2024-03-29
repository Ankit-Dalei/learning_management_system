import React from "react"
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import SettingsIcon from "@mui/icons-material/Settings"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"

const Head = ({ dark, setMode }) => {
    
    return (
        <div>
            <section className='head'>
                <div className='container flexSB'>
                    <div className="rightLogo">
                        <h1 style={{fontSize:'32px'}}>Centurion University</h1>

                    </div>
                    <div className='left'>
                        <div className='logo'>
                            <img src='./assets/images/logo.png' alt='' />
                        </div>
                    </div>
                    <div className='right flexCenter'>
                        <NotificationsNoneOutlinedIcon className='iconHead' />
                        <div className='profile flexCenter'>
                            <img className='imageCircle' src='https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?cs=srgb&dl=pexels-edgar-serrano-1964970.jpg&fm=jpg' alt='' />
                            <span>Aryan</span>
                            
                            <KeyboardArrowDownOutlinedIcon className='iconHead' />
                            
                            
                        </div>
                        <button onClick={() => setMode(!dark)}>
                            <DarkModeIcon className='iconHead' />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Head