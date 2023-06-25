import { Link  , useLocation, useNavigate} from 'react-router-dom';

import {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions'

const SearchField = () => {
   const navigate = useNavigate()
    
    const [payload,setPayload] = useState({
        address:'',
        daystart:'',
        dayend:''
    })
  
  
    const dispatch=useDispatch()
    const handleSearch=() =>{
    dispatch(actions.gethotels(payload))
    
   
    }
    const {hotels} = useSelector(state => state.hotel)
    useEffect(()=>{
    //    console.log(hotels)
        if (hotels.length>0){ navigate('/search')
       }
    },[hotels])
    
    return (
        <div className='container bg-primary-subtle p-5 mt-5 rounded-4'>
            <form action="#" className="row">
                <div className='col-md-12'>
                    <input type='text' className='form-control py-3 my-2 rounded-3' id="address" placeholder='Nhập điểm du lịch hoặc tên khách sạn'
                        onChange={()=>setPayload({...payload,address:document.getElementById("address").value})}                 
                     />
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="date" className="form-control py-3 my-2 rounded-3" id="input_from" placeholder="Start Date" data-rome-id="0" 
                             onChange={()=>setPayload({...payload,daystart:document.getElementById("input_from").value})} 
                        />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="date" className="form-control py-3 my-2 rounded-3" id="input_to" placeholder="End Date" data-rome-id="1" 
                               onChange={()=>setPayload({...payload,dayend:document.getElementById("input_to").value})} 
                        />
                    </div>
                </div>
                <button type='button' className='btn btn-primary w-50 py-3 my-2 mx-auto'
                    onClick={handleSearch}   
                >Tìm</button>
            </form>
        </div>
    )
}

export default SearchField;

