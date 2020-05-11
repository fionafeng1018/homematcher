import React from 'react';
import './PriceSlider.sass';
import { Slider, Typography, Grid, TextField, InputAdornment, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const useStyles = makeStyles({
  root: {
    padding: 16
  },
  input: {
      width: 60
  },

});

export default function RangeSlider() {
  const classes = useStyles();
  const range = [0,6000];
  const [sliderValues, setSliderValues] = React.useState(range);
  const [inputValues, setInputValue]=React.useState(range);

  const handleSliderChange = (event, newValues) => {
    setSliderValues(newValues);
    setInputValue(newValues);
  };

  const handleClearButtonClick = ()=>{
    setSliderValues(range);
    setInputValue(range);
  }

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item>
        <Typography id="range-slider" gutterBottom>
          Price range
      </Typography>
      </Grid>    
      <Grid container justify="space-between" spacing={3}>
        <Grid item>
          <TextField
            variant="outlined"
            label="starting price"
            value={inputValues[0]}
            onChange={evt => {
              const value = evt.target.value;
              const newState = [value, inputValues[1]];
              setInputValue(newState);
              setSliderValues(newState);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="max price"
            value={inputValues[1]}
            onChange={evt => {
              const value = evt.target.value;
              const newState = [inputValues[0], value];
              setInputValue(newState);
              setSliderValues(newState);

            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>

      <Slider
        value={sliderValues}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={6000}
      />

      <Button
        onClick={handleClearButtonClick}
        variant="contained"
        color="primary"
      >Clear</Button>
    </Grid>
  );
}