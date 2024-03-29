import React from 'react'
import { Grid, Typography, Card, CardContent, TextField, Button } from '@mui/material'


function AddSection() {
  return (
    <div className='cam-1' style={{ marginTop: "30px" }}>
    {/* <Typography gutterBottom variant='h3' align='center'>
            Cam
        </Typography> */}
    <Grid>
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Section Details
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            Fill up the form and our team will get back to you within 24 hours.
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField placeholder="Enter section" label="Section" variant="outlined" fullWidth required />
              </Grid>
              {/* <Grid xs={12} sm={6} item>
                                <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                            </Grid> */}
              <Grid item xs={12}>
                <TextField type="email" placeholder="Enter batch " label="Batch" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="email" placeholder="Enter csbc id " label="CSBC ID" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField type="batch" placeholder="Enter batch" label="Batch" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField type="section" placeholder="Enter section" label="Section" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="email" placeholder="Enter your teacher" label="Teacher" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField type="email" placeholder="Enter your section" label="Section" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField type="email" placeholder="Enter your batch" label="Batch" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12 }>
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

export default AddSection