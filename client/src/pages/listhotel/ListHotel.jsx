import HotelCard2 from '../../components/card/HotelCard2'
import NavBar from '../../components/navbar/NavBar'
import './listhotel.css'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import * as actions from '../../store/actions'
import { Link, useLocation, useNavigate } from 'react-router-dom';



const ListHotel = () => {
    const navigate = useNavigate()
    const { gmail } = useSelector(state => state.auth)

    const payload = {
        gmail: gmail
    }

    const dispatch = useDispatch()



    const currentUser = useSelector(state => state.user)





    useEffect(() => {
        dispatch(actions.getCurrent(payload))



    }, [])

    if (currentUser.currentUser !== null) {
        const hotels = currentUser.currentUser.Hotels

        console.log(hotels)
        console.log(currentUser)
        console.log(payload)

        const items = [];
        hotels.forEach(element => {
            if (element.status === 0) {
                items.push(
                    <div className='col-3'>
                        <HotelCard2 hotel={element} />
                    </div >
                );
            }

        });
        const gotoAddnewhotel = () => {
            navigate('/newhotel')

        }
        return (
            <div className="list-hotel-1">
                <NavBar />
                <div className="top-hotel-1">
                    <button type="button" class="btn btn-outline-secondary float-end" onClick={gotoAddnewhotel}>Add New Hotel</button>
                </div>
                <div className='row'>
                    {items}
                </div>
            </div>
        )
    }
}

export default ListHotel