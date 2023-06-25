import { Link ,useLocation,useNavigate} from 'react-router-dom';
import {useState, useEffect } from "react"
import { apiLogin } from '../../services/auth';
import * as actions from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux';
const SignUp = () => {

    const [invalidFields,setInvalidFields] =useState([])
    const {isLoggedIn} = useSelector(state => state.auth)
    const navigate = useNavigate()
    const [payload,setPayload]=useState({
        name:'',
        phone:'',
        gmail:'',
        passWord:''
        
    })
    useEffect(()=> {
        isLoggedIn && navigate('/')

    },[isLoggedIn])
    const [errorName,setErrorName] =useState([])
    const [errorPassWord,setErrorPassWord] =useState([])
    const [errorGmail,setErrorGmail] =useState([])
    const [errorPhone,setErrorPhone] =useState([])
    const dispatch = useDispatch()
    const handleRegister =async() =>{
        setInvalidFields([]) 
       console.log(payload)
   
      //dispatch(actions.register(payload))
      let tmp=[]
      let tmp1=[]
      let tmp2=[]
      let tmp3=[]
      
     let invalids= validate(payload)
    console.log(invalids)
    console.log(invalidFields)
    if(invalids ===0 ){
        dispatch(actions.register(payload))
    }else{
    invalidFields.forEach(error =>{
        switch(error.name){
            case 'name':
               
               tmp.push(<small className='text-danger d-block'>{error.message}</small>)
                break;
            case 'passWord':
               
               tmp1.push(<small className='text-danger d-block'>{error.message}</small>)
               break;
            case 'gmail':
               
               tmp2.push(<small className='text-danger d-block'>{error.message}</small>)
               break;
            case 'phone':
               
               tmp3.push(<small className='text-danger d-block'>{error.message}</small>)
               break;
            default:
                break;
        }
        
      })
      setErrorName(tmp)
      setErrorPassWord(tmp1)
      setErrorGmail(tmp2)
      setErrorPhone(tmp3)
      
    }  }

    const validate = (payload) => {
        console.log(payload)
        let invalids = 0
        let fields = Object.entries(payload)
        fields.forEach(item => {
            if (item[1] === '') {
                setInvalidFields(prev => [...prev, {
                    name: item[0],
                    message: 'Bạn không được bỏ trống trường này.'
                }])
                invalids++
            }
        })
        fields.forEach(item => {
            switch (item[0]) {
                case 'passWord':
                    if (item[1].length < 6) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Mật khẩu phải có tối thiểu 6 kí tự.'
                        }])
                        invalids++
                    }
                    break;
                case 'phone':
                    if (!+item[1]) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Số điện thoại không hợp lệ.'
                        }])
                        invalids++
                    }
                    break
                case 'gmail':
                    if (!item[1].includes('@gmail.com')) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'gmail không hợp lệ.'
                        }])
                        invalids++
                    }
                    break
                default:
                    break;
            }
        })
        return invalids
    }
    
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
                                           
                                            <div className="form-outline mb-4">
                                                <input type="name" id="form3Example1" className="form-control" 
                                                    //onFocus={()=> setInvalidFields([])}
                                                    onChange={()=>setPayload({...payload,name:document.getElementById("form3Example1").value
})}
                                                />
                                                <label className="form-label" for="form3Example1">Name</label>
                                                {errorName[0]}
                                            </div>
                                            
                                             {/*Number Phone input */}
                                             <div className="form-outline mb-4">
                                                <input type="phone" id="form3Example2" className="form-control"
                                                 onChange={()=>setPayload({...payload,phone:document.getElementById("form3Example2").value
})} />
                                                <label className="form-label" for="form3Example2">Number phone</label>
                                                {errorPhone[0]}
                                            </div>

                                            {/* <!-- Email input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" 
                                                     onChange={()=>setPayload({...payload,gmail:document.getElementById("form3Example3").value
})}
                                                />
                                                <label className="form-label" for="form3Example3">Email address</label>
                                                {errorGmail[0]}
                                            </div>

                                            {/* <!-- Password input --> */}
                                            <div className="form-outline mb-4">
                                                <input typeName="password" id="form3Example4" className="form-control" 
                                                     onChange={()=>setPayload({...payload,passWord:document.getElementById("form3Example4").value
})}
                                                />
                                                <label className="form-label" for="form3Example4">Password</label>
                                                {errorPassWord[0]}
                                            </div>

                                            {/* <!-- Checkbox --> */}
                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                                <label className="form-check-label" for="form2Example33">
                                                    Subscribe to our newsletter
                                                </label>
                                            </div>

                                            {/* <!-- Submit button --> */}
                                            <button type="button" className="btn btn-primary btn-block mb-4" 
                                            onClick={handleRegister}
                                            >
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
                                                <p>or have an account <Link to="/login">Login</Link></p>
                                          
                                               
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