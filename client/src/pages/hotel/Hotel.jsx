import React from 'react'
import ImagePreview from '../../components/imagepreview/ImagePreview'
import NavBar from '../../components/navbar/NavBar'
import Overview from '../../components/overview/Overview'
import Rooms from '../../components/rooms/Rooms'
import SearchField from '../../components/searchfield/SearchField'

const images = [
     "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0",
     "https://pix8.agoda.net/hotelImages/568/5684454/5684454_18081316440067440969.jpg?ca=0&ce=1",
     "https://pix8.agoda.net/hotelImages/22423667/-1/c8b11fd11884172c23959f0ccb4ebfc0.jpg?ca=19&ce=1",
     "https://pix8.agoda.net/hotelImages/36087877/-1/5232f35748f1af5439d39426e1152f70.jpg?ce=0",
     "https://pix8.agoda.net/hotelImages/18766278/-1/3a0787678d83a020105158fadef73593.jpg?ca=16&ce=1",
     "https://pix8.agoda.net/hotelImages/878/8787635/8787635_19071818020078253105.jpg?ca=13&ce=1",
     "https://pix8.agoda.net/hotelImages/9091698/-1/2be283e9fc69319176b5a6841ae65ce1.jpg?ca=9&ce=1",
     "https://pix8.agoda.net/hotelImages/1517561/-1/c8d7f0bb4cf45c2493dfaf257b0b1750.jpg?ca=16&ce=1",
]
  
function Hotel() {
    return (
        <div>
            <NavBar />
            <ImagePreview images={images} />
            <Overview />
            <Rooms />
        </div>
    )
}

export default Hotel