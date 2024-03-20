import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { collection, addDoc } from "firebase/firestore";
import db from './Firebase/Auth';
import GetData from './getData';
import Calendar from './Components/Calendar';
import { DatePicker } from '@mui/x-date-pickers';


const defaultTheme = createTheme();


export default function SignUp() {

  const [familyID, setfamilyID] = useState()
  const [StudentID, setStudentID] = useState()
  const [fullName, setfullName] = useState()
  const [fatherName, setfatherName] = useState()
  const [age, setAge] = useState()
  const [gender, setGender] = useState()
  const [Date, setDate] = useState("")
  console.log(Date)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "student"), {
        familyID,
        StudentID,
        fullName,
        fatherName,
        age,
        gender
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const HandelDate = (e) => {
    // console.log(e)
    //  setDate(e)
    console.log(Date)
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Student Card Creation Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="family ID"
                  required
                  fullWidth
                  id="family ID"
                  label="Family ID"
                  autoFocus
                  onChange={e => setfamilyID(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="studentID"
                  label="Student ID"
                  name="studentID"
                  autoComplete="family-name"
                  onChange={e => setStudentID(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  autoComplete="fullName"
                  onChange={e => setfullName(e.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="fatherName"
                  label="Father Name"
                  type="fatherName"
                  id="fatherName"
                  autoComplete="new-contact"
                  onChange={e => setfatherName(e.target.value)}

                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="age"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  autoFocus
                  onChange={e => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  autoComplete="family-name"
                  onChange={e => setGender(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Calendar onChange={() => { HandelDate(e.target.value) }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="address"
                  id="address"
                  autoComplete="new-contact"

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-number"
                  label="NOK Number 1"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="class"
                  required
                  fullWidth
                  id="class"
                  label="Class"
                  autoFocus
                  onChange={e => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="shift"
                  required
                  fullWidth
                  id="shift"
                  label="Shift"
                  autoFocus
                  onChange={e => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="lastQualification"
                  required
                  fullWidth
                  id="lastQualification"
                  label="Last Qualification"
                  autoFocus
                  onChange={e => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  value={Date}
                  onClick={() => { setDate(e.target.value) }} />

              </Grid>





            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}

            >
              Submit
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={HandelDate}

            >
              Date
            </Button>
            <GetData />
            <Grid container justifyContent="flex-end">

            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>

  );
}