import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider'

const minRange = 500000;
const min = 0;
const max = 5000000;
const step = 100000;

function budgetText(budget) {
    return `${numberWithDot(budget)}đ`;
}

function numberWithDot(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function FilterSearch({ hotels, setHotels }) {


    const [rangeBudget, setRangeBudget] = useState([0, 500000]);
    const [starValue, setStarValue] = useState(5);
    const handleSliderChange = (event, newRangeBudget, activeThumb) => {
        if (!Array.isArray(newRangeBudget)) {
            return;
        }

        if (activeThumb === 0) {
            setRangeBudget([Math.min(newRangeBudget[0], rangeBudget[1] - minRange), rangeBudget[1]]);
        } else {
            setRangeBudget([rangeBudget[0], Math.max(newRangeBudget[1], rangeBudget[0] + minRange)]);
        }
    };

    const handleMinInputChange = (event) => {
        setRangeBudget([Math.min(Number(event.target.value) * 1000, rangeBudget[1] - minRange), rangeBudget[1]]);
    };
    const handleMaxInputChange = (event) => {
        setRangeBudget([rangeBudget[0], Math.max(Number(event.target.value) * 1000, rangeBudget[0] + minRange)]);
    };
    const handleRadioChange = (event) => {
        setStarValue(event.target.value);
    }
    const handleBlur = () => {

    }
    return (
        <div className='border'>
            <div className='p-3'>
                <div className='row'>
                    <div className="fw-bolder ">Your budget (per night)</div>
                </div>
                <div className="row px-3">
                    <Slider
                        min={min}
                        max={max}
                        step={step}
                        getAriaLabel={() => 'Minimum distance'}
                        getAriaValueText={budgetText}
                        valueLabelFormat={budgetText}
                        value={rangeBudget}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        disableSwap
                    />
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="input-group mb-3">
                            <input type="number" class="form-control" placeholder="Tối thiểu"
                                value={rangeBudget[0] / 1000}
                                min={min / 1000}
                                max={(max - minRange) / 1000}
                                step={step / 1000}
                                aria-describedby="minbudget"
                                onBlur={handleBlur}
                                onChange={handleMinInputChange}
                            />
                            <span className="input-group-text" id="minbudget">K</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="input-group mb-3">
                            <input type="number" class="form-control" placeholder="Tối đa"
                                value={rangeBudget[1] / 1000}
                                min={(min + minRange) / 1000}
                                max={max / 1000}
                                step={step / 1000}
                                aria-describedby="maxbudget"
                                onBlur={handleBlur}
                                onChange={handleMaxInputChange} />
                            <span className="input-group-text" id="maxbudget">K</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-3'>
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Star Rating</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={starValue}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value={1} control={<Radio />} label="1 star" />
                        <FormControlLabel value={2} control={<Radio />} label="2 star" />
                        <FormControlLabel value={3} control={<Radio />} label="3 star" />
                        <FormControlLabel value={4} control={<Radio />} label="4 star" />
                        <FormControlLabel value={5} control={<Radio />} label="5 star" />
                    </RadioGroup>
                </FormControl>
            </div>

        </div>
    )
}

export default FilterSearch