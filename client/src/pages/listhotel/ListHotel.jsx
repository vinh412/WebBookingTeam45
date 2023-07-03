import HotelCard2 from '../../components/card/HotelCard2'
import NavBar from '../../components/navbar/NavBar'
import './listhotel.css'
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from 'react'
import * as actions from '../../store/actions'


const ListHotel = () => {
    const {gmail} = useSelector(state => state.auth)
   
    const payload={
            gmail:gmail
    }
    
    const dispatch = useDispatch()
    
    
   
    const currentUser = useSelector(state => state.user)
   

    
   
   
    useEffect(()=> {
        dispatch(actions.getCurrent(payload))
     
        
      
    },[]) 
    
   if(currentUser.currentUser !== null){const hotels=currentUser.currentUser.Hotels
   
    console.log(hotels)
console.log(currentUser)
    console.log(payload)
   
    const items = [];
    hotels.forEach(element => {
        items.push(
            <HotelCard2 hotel={element} />
        );
    });
    return (
        <div className="list">
            <NavBar/>
            <div className="top">
                <button type="button" class="btn btn-outline-secondary float-end">Add New Hotel</button>
            </div>
            <div className="row">
                    {items}
                </div>
        </div>
    )
}}

export default ListHotel