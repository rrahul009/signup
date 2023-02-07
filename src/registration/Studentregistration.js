import React from "react";
import { TextField, Button, Grid ,Paper} from "@mui/material";

const Studentregistration = () => {
  return (
    <>
      <h1> student form is running </h1>
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        <Paper>
        <Grid container direction='column' rowSpacing={2} padding={5}>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Rahul"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Trainee"
            />
          </Grid>

          <Grid item>
            <Button variant="contained" fullWidth>
              signup
            </Button>
          </Grid>
        </Grid>
        </Paper>
      </div>
    </>
  );
};

export default Studentregistration;
