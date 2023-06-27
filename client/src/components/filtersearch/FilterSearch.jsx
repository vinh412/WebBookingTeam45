import React from 'react'

function FilterSearch() {
    return (
        <div className="col-md-0 col-lg-3 col-xl-3 " >
            <span className="fw-bolder ">Filter by:</span>
            <div className="border m-4 p-3 mb-0">
                <span className="fw-bolder "  >Your budget (per night)</span>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="checkbugget" id="checkbugget1" />
                    <label class="form-check-label" for="checkbugget1">
                        0 VND - 1000000 VND
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="checkbugget" id="checkbugget2" />
                    <label class="form-check-label" for="checkbugget2">
                        1000000 VND - 2000000 VND
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="checkbugget" id="checkbugget3" />
                    <label class="form-check-label" for="checkbugget3">
                        2000000 VND - 3000000 VND
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="checkbugget" id="checkbugget4" />
                    <label class="form-check-label" for="checkbugget4">
                        3000000 VND - 4000000 VND
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="checkbugget" id="checkbugget5" />
                    <label class="form-check-label" for="checkbugget5">
                        4000000+ VND
                    </label>
                </div>
            </div>

            <div className="border m-4 p-3 mt-0">
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