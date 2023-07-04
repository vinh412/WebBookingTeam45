import RoomCard2 from '../../components/card/RoomCard2'
import NavBar from '../../components/navbar/NavBar'
import './listroom.css'
const rooms = [
    { imgage: "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0", name: "DHTS Business Hotel & Apartment", area: "40", cost: "1.318.182", salePrice: "100.000", singleBed: "1" },
    { imgage: "https://pix8.agoda.net/hotelImages/568/5684454/5684454_18081316440067440969.jpg?ca=0&ce=1", name: "NTA Serviced Apartments", area: "40", cost: "1.826.550", salePrice: "100.000", singleBed: "1" },
    { imgage: "https://pix8.agoda.net/hotelImages/22423667/-1/c8b11fd11884172c23959f0ccb4ebfc0.jpg?ca=19&ce=1", name: "Nikko Hotel - The Classy Life", area: "40", cost: "759.629", salePrice: "100.000", singleBed: "1" },
    { imgage: "https://pix8.agoda.net/hotelImages/36087877/-1/5232f35748f1af5439d39426e1152f70.jpg?ce=0", name: "Ekomo Home", area: "40", cost: "788.810", salePrice: "100.000", singleBed: "1" },
    { imgage: "https://pix8.agoda.net/hotelImages/18766278/-1/3a0787678d83a020105158fadef73593.jpg?ca=16&ce=1", name: "Ekomo Home", area: "40", cost: "556.218", salePrice: "100.000", singleBed: "1" },
    { imgage: "https://pix8.agoda.net/hotelImages/878/8787635/8787635_19071818020078253105.jpg?ca=13&ce=1", name: "Ekomo Home", area: "40", cost: "555.555", salePrice: "100.000", singleBed: "1" },
    { imgage: "https://pix8.agoda.net/hotelImages/9091698/-1/2be283e9fc69319176b5a6841ae65ce1.jpg?ca=9&ce=1", name: "Ekomo Home", area: "40", cost: "686.342", salePrice: "100.000", singleBed: "1" },
    { imgage: "https://pix8.agoda.net/hotelImages/1517561/-1/c8d7f0bb4cf45c2493dfaf257b0b1750.jpg?ca=16&ce=1", name: "Ekomo Home", area: "40", cost: "1.310.757", salePrice: "100.000", singleBed: "1" }
]
const ListRoom = () => {
    const items = [];
    rooms.forEach(element => {
        items.push(
            <RoomCard2 room={element} />
        );
    });
    return (
        <div className="list">
            <NavBar/>
            <div className="top">
                <button type="button" class="btn btn-outline-secondary float-end">Add New Room</button>
            </div>
            <div className="row">
                    {items}
                </div>
        </div>
    )
}

export default ListRoom