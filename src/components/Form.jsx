import React from "react";
import countries from "../data/countrycode.json";
import { useFormik } from "formik";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Chip,
} from "@mui/material";

const initialValues = {
  name: "",
  address: "",
  country: "",
  gender: "",
  hobbies: [],
};

const Hobbies = [
  { value: "Photography", label: "Photography" },
  { value: "Travel", label: "Travel" },
  { value: "Reading", label: "Reading" },
  { value: "Sports", label: "Sports" },
  { value: "Music", label: "Music" },
  { value: "Yoga", label: "Yoga" },
  { value: "Art", label: "Art" },
  { value: "Dance", label: "Dance" },
  { value: "Writing", label: "Writing" },
  { value: "Blogging", label: "Blogging" },
];

const MyForm = () => {
  const paperStyle = { padding: "30px 20px", maxWidth: 400, margin: "20px auto" };
  const marginTop = { margin: 8 };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("Values:", values);
      alert(` NAME -> [${values.name}]\n ADDRESS -> [${values.address}]\n COUNTRY -> [${values.country}]\n GENDER -> [${values.gender}]\n HOBBIES -> [${values.hobbies}]`);
    },
  });

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Paper elevation={20} style={paperStyle}>
          <Typography variant="h5" gutterBottom>
            Please fill this Form
          </Typography>
          <form onSubmit={formik.handleSubmit}>

            {/* TextInput: For capturing the user's name. */}
            <TextField
              id="standard-basic"
              label="Name"
              name="name"
              variant="standard"
              placeholder="Enter your name"
              fullWidth
              sx={{ m: 1, minWidth: 120 }}
              style={marginTop}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />


            {/* TextAreaInput: For capturing the user's address. */}
            <TextField
              id="standard-multiline-flexible"
              label="Address"
              name="address"
              multiline
              maxRows={4}
              variant="standard"
              placeholder="Enter your Address"
              fullWidth
              sx={{ m: 1, minWidth: 120 }}
              style={marginTop}
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />


            {/* Dropdown: For selecting the user's country of residence. */}
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
              fullWidth
              style={marginTop}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                placeholder="Select"
                label="Country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                align="left"
                defaultValue=""
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {countries.map((ele, i) => {
                  return (
                    <MenuItem key={i} value={ele.country}>
                      {ele.country}
                    </MenuItem>
                  );
                })}
                {countries.cou?.map((country) => (
                  <MenuItem value={country}>{country}</MenuItem>
                ))}
              </Select>
            </FormControl>


            {/* Radio buttons: For selecting the user's gender. */}
            <FormControl style={marginTop}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            

            {/* Multi-select Dropdown: For selecting the user's hobbies/interests. */}
            <FormControl sx={{ m: 1, width: 300 }} style={marginTop} fullWidth>
              <InputLabel htmlFor="selectedOptions">Hobbies</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="selectedOptions"
                name="hobbies"
                multiple
                value={formik.values.hobbies}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {Hobbies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>


            <Stack direction="row" spacing={2} fullWidth style={marginTop}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default MyForm;
