import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { TextField,FormLabel, Button, Typography,FormGroup, FormControlLabel,Checkbox} from '@mui/material'
function Form() {
    const [input, setInput] = useState({ 
        name: '', password: '', email: '', terms: false,
        course:'',gender:''});
    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value

        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form data=", input);
        setInput({ name: '', email: '', password: '', terms: !input.terms })
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <form onSubmit={handleSubmit}
                style={{
                    width: '650px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flexStart',
                    border: '2px solid black',
                    padding: '15px'

                }}
            >
                {/* {console.log("form data", input)} */}
                <Typography variant="h2" sx={{ textAlign: 'center' }}>Form example</Typography>

                <TextField type="text"
                    name="name"
                    placeholder='username'
                    value={input.name}
                    onChange={handleInput}
                    autoComplete="off"
                />
                <br /><br />
                <TextField type="password" name="password"
                    placeholder='password'
                    value={input.password}
                    onChange={handleInput}
                    autoComplete="off"
                />
                <br /><br />
                <TextField type="email" name="email" placeholder='email'
                    value={input.email}
                    onChange={handleInput}
                    autoComplete="off"
                />
                <br /><br />
                <FormGroup>
                <FormControlLabel control={
                    <Checkbox
                        onChange={() => { setInput({ ...input, terms: !input.terms }) }}
                    />}
                    label="Terms"
                >
                </FormControlLabel>
                </FormGroup>
                <br />

                <FormControl fullwidth>
                    <InputLabel id="demo-simple-select-label">course</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={input.course}
                        label="Select Course..."
                        name="course"
                        onChange={handleInput}>
                  <MenuItem value="JS">JS</MenuItem>
                  <MenuItem value="React">React</MenuItem>
                  <MenuItem value="java">Java</MenuItem>
                  <MenuItem value="Angular">Angular</MenuItem>          
                        </Select>
                </FormControl>
                <br/>
<FormControl>
    <FormLabel id="radio-btn">
    <RadioGroup
        aria-labelledby="radio-btn"
        defaultValue="female"
        name="gender"
        value={input.gender}
        onChange={handleInput}
      >
         <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
    </FormLabel>
</FormControl>
                <Button variant="contained" type="submit"> Submit</Button>
            </form>
        </div>
    )
}

export default Form
