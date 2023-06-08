const SignUp = () => {
    return (
        <div>
            {/* <!-- Section: Design Block --> */}
            <section className="">
                {/* <!-- Jumbotron --> */}
                <div className="px-4 py-5 px-md-5 text-center text-lg-start">
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    The best offer <br />
                                    <span className="text-primary">for your business</span>
                                </h1>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">

                                        <form>
                                            <div className="text-center fw-bold">
                                                <p>Sign Up</p>
                                               
                                            </div>
                                            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                            {/* <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1" className="form-control" />
                                                        <label className="form-label" for="form3Example1">First name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example2" className="form-control" />
                                                        <label className="form-label" for="form3Example2">Last name</label>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/*Name input */}
                                            <div className="form-outline mb-4">
                                                <input type="name" id="form3Example3" className="form-control" />
                                                <label className="form-label" for="form3Example3">Name</label>
                                            </div>
                                            
                                             {/*Number Phone input */}
                                             <div className="form-outline mb-4">
                                                <input type="phone" id="form3Example3" className="form-control" />
                                                <label className="form-label" for="form3Example3">Number phone</label>
                                            </div>

                                            {/* <!-- Email input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" />
                                                <label className="form-label" for="form3Example3">Email address</label>
                                            </div>

                                            {/* <!-- Password input --> */}
                                            <div className="form-outline mb-4">
                                                <input typeName="password" id="form3Example4" className="form-control" />
                                                <label className="form-label" for="form3Example4">Password</label>
                                            </div>

                                            {/* <!-- Checkbox --> */}
                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                                <label className="form-check-label" for="form2Example33">
                                                    Subscribe to our newsletter
                                                </label>
                                            </div>

                                            {/* <!-- Submit button --> */}
                                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                                Sign up
                                            </button>

                                            {/* <!-- Register buttons --> */}
                                            <div className="text-center">
                                                <p>or sign up with:</p>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-google"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-github"></i>
                                                </button>
                                                <div className="text-center ls-tight">
                                                <p>or have an account <a href="../login">sign in</a>
                                                </p>
                                               
                                            </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Jumbotron --> */}
            </section>
            {/* <!-- Section: Design Block --> */}
        </div>
    )
};

export default SignUp;