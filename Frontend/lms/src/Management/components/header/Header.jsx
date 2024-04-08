import React, { useState } from "react"
import "./header.css"
import Head from "../head/Head"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined"
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddSchool from "../../Add/AddSchool/AddSchool"
import { useNavigate } from "react-router-dom"
import AddBrance from "../../Add/AddBrance/AddBrance"
import { Outlet } from 'react-router-dom'
const Header = ({ dark, setMode }) => {


    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const navigate = useNavigate();
    const changeHandle = (e) => {
       
        if (e === '/addbrance')
        navigate('addbrance')
       else if (e === '/addschool')
        navigate('addschool')
       else if (e === '/addteacher')
        navigate('addteacher')
       else if (e === '/addcampus')
        navigate('addcampus')
       else if (e === '/addcourse')
        navigate('addcourse')
        else if (e === '/addstudent')
        navigate('addstudent')
        else if (e === '/addsection')
        navigate('addsection')
        else if (e === '/addcsb')
        navigate('addcsb')
        else if (e === '/addcsbc')
        navigate('addcsbc')
        else if (e === '/')
        navigate('')
    }


    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <section className='header' >
                <Head dark={dark} setMode={setMode} />
                <header>
                    <div className='container'>
                        {/*<ul className='navMenu'>*/}
                        <ul className={Mobile ? "navMenu-list" : "link"} onClick={() => setMobile(false)}>
                            <li onClick={(e) => { changeHandle('/') }}>

                                <DashboardOutlinedIcon className='navIcon active' />


                                <a className='navIcon' >
                                    Home
                                </a>
                            </li>
                            <li onClick={(e) => { changeHandle('/addbrance') }}>
                                <InvertColorsOutlinedIcon className='navIcon' />
                                <a >Add Brance</a>
                            </li>
                            <li onClick={(e) => { changeHandle('/addschool') }}>
                                <InvertColorsOutlinedIcon className='navIcon' />
                                <a >Add School</a>
                            </li>
                            <li onClick={(e) => { changeHandle('/addteacher') }}>
                                <GridViewOutlinedIcon className='navIcon' />
                                <a >Add Teacher</a>
                            </li>
                            <li onClick={(e) => { changeHandle('/addcourse') }}>
                                <SupportOutlinedIcon className='navIcon' />
                                <a >Add Course</a>
                            </li>
                            <li onClick={(e) => { changeHandle('/addstudent') }}>
                                <StyleOutlinedIcon className='navIcon' />
                                <a>Add Student</a>
                            </li>
                            <li onClick={(e) => { changeHandle('/addcampus') }}>
                                <StyleOutlinedIcon className='navIcon' />
                                <a >Add Campus</a>
                            </li>
                            <li onClick={(e) => { changeHandle('/addsection') }}>
                                <StyleOutlinedIcon className='navIcon' />
                                <a >Add Section</a>
                            </li>
                            <li onClick={(e) => { changeHandle('/addcsb') }}>
                                <StyleOutlinedIcon className='navIcon' />
                                <a>Add CSB</a>
                            </li>
                             <li onClick={(e) => { changeHandle('/addcsbc') }}>
                                <StyleOutlinedIcon className='navIcon' />
                                <a >Add CSBC</a>
                            </li>

                        </ul>
                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </header>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">

                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                            <AddSchool />
                            <AddBrance/>

                        </Typography>
                    </Box>
                </Modal>
            </section>
            <Outlet/>
        </>
    )
}

export default Header