import React, { useState } from 'react'
import "./AddCourse.css"
import { Grid, Typography, Card, CardContent, TextField, Button } from '@mui/material'
function AddCourse() {
    const [value, setValue] = useState('')
    const options = [
        {label: "2022",},
        {label: "2023", },
        {label: "2024",},
    ] 

    function handleSelect(event) {
        setValue(event.target.value)
    }



    return (
        <div className='cam-1' style={{ marginTop: "30px" }}>
            {/* <Typography gutterBottom variant='h3' align='center'>
            Cam
        </Typography> */}
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Course Deatails
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            Fill up the form and our team will get back to you within 24 hours.
                        </Typography>
                        <form>
                            <Grid container spacing={1}>

                                <Grid item xs={12}>
                                    <TextField type="email" placeholder="Enter course name" label="Course Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="name" placeholder="Enter course short name" label="Course Short Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="description" placeholder="Enter description" label="Description" variant="outlined" fullWidth required />
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <TextField label="Duration" placeholder="Enter duration" variant="outlined"
                                        fullWidth required />
                                </Grid> */}
                                <div className='w-50 p-3 border rounded' style={{width: 448, padding: 3, margin: "0 auto",}}>
                                <label htmlFor="role">Duration</label>
                                    <select className='form-select' onChange={handleSelect}>
                                        {options.map(option => (
                                            <option value={option.value}>{option.label}</option>) 
                                        )}
                                    </select>
                                    
                                </div>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default AddCourse