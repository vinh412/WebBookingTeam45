import { Link  , useLocation, useNavigate} from 'react-router-dom';

import axiosConfig from '../../axiosConfig'
const HotelCard2 = ({hotel}) => {
    const navigate = useNavigate()
  
    const deletehotel = () => new Promise(async(resolve, reject) => {
        try {
            
            const response = await axiosConfig({
               
                method: 'post',
                url: '/api/v1/hotel/deletehotel',
                data:hotel
            })
           
            resolve(response)
           // console.log(response)
        } catch (error) {
            reject(error)
           
        }
    })

    const edithotel = () => {
        //navigate('/edithotel')
         navigate(`/edithotel/${hotel.id}`)
    }
    const listroom = () => {
        //navigate('/edithotel')
         navigate(`/listroom/${hotel.id}`)
    }
    return (
        <div>
            <div className="card my-3">
                <img src={hotel.Photos[0]?.src} className="card-image-top" style={{height: 200}} alt="" />
                <div className="card-body">
                    <h5 className="card-title" onClick={listroom} >{hotel.name}</h5>
                    <h6 className="text-info">{hotel.address}</h6>
                    <div>
                      
                        <button type="button" class="btn btn-danger px-4 mx-1 float-end" onClick={deletehotel}>Xóa</button>
                        <button type="button" class="btn  btn-success px-4 float-end" onClick={edithotel}>Sửa</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard2;