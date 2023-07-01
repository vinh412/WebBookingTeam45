import React, { useState } from 'react'
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

function FilterSearch({hotels, setHotels}) {


    const [rangeBudget, setRangeBudget] = useState([0, 500000]);

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
        setRangeBudget([Math.min(Number(event.target.value)*1000, rangeBudget[1] - minRange), rangeBudget[1]]);
    };
    const handleMaxInputChange = (event) => {
        setRangeBudget([rangeBudget[0], Math.max(Number(event.target.value)*1000, rangeBudget[0] + minRange)]);
    };
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
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" placeholder="Tối thiểu"
                                value={rangeBudget[0]/1000}
                                min={min/1000}
                                max={(max-minRange)/1000}
                                step={step/1000}
                                aria-describedby="minbudget"
                                onBlur={handleBlur}
                                onChange={handleMinInputChange}
                                 />
                            <span class="input-group-text" id="minbudget">K</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" placeholder="Tối đa"
                                value={rangeBudget[1]/1000}
                                min={(min+minRange)/1000}
                                max={max/1000}
                                step={step/1000}
                                aria-describedby="maxbudget"
                                onBlur={handleBlur}
                                onChange={handleMaxInputChange} />
                            <span class="input-group-text" id="maxbudget">K</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-3'>
                <span className="fw-bolder" >Property rating</span>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="checktype" id="checktype2" />
                    <label class="form-check-label" for="checktype2">
                        1 Stars
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="checktype" id="checktype3" />
                    <label class="form-check-label" for="checktype3">
                        2 Stars
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="checktype" id="checktype4" />
                    <label class="form-check-label" for="checktype">
                        3 Stars
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="checktype" id="checktype5" />
                    <label class="form-check-label" for="checktype5">
                        4 Stars
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="checktype" id="checktype6" />
                    <label class="form-check-label" for="checktype7">
                        5 Stars
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="checktype" id="checktype1" />
                    <label class="form-check-label" for="checktype1">
                        Unrated
                    </label>
                </div>

            </div>

        </div>
    )
}

export default FilterSearch