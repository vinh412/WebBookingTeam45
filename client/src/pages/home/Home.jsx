

import NavBar from "../../components/navbar/NavBar";
import SearchField from "../../components/searchfield/SearchField";
import TopDestinations from "../../components/topdestinations/TopDestinations";
import Rentals from "../../components/rentals/Rentals";
import HomeRecommended from "../../components/homerecommended/HomeRecommended";


const destinations = [
  { imgSrc: "https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1", name: "Ho Chi Minh" },
  { imgSrc: "https://pix6.agoda.net/geo/city/2758/065f4f2c9fa263611ab65239ecbeaff7.jpg?ce=0&s=345x345&ar=1x1", name: "Ha Noi" },
  { imgSrc: "https://pix6.agoda.net/geo/city/16440/1_16440_02.jpg?ca=6&ce=1&s=345x345&ar=1x1", name: "Da Nang" },
  { imgSrc: "https://pix6.agoda.net/geo/city/2679/1_2679_02.jpg?ca=6&ce=1&s=345x345&ar=1x1", name: "Nha Trang" },
  { imgSrc: "https://pix6.agoda.net/geo/city/17190/1_17190_02.jpg?ca=6&ce=1&s=345x345&ar=1x1", name: "Vung Tau" },
  { imgSrc: "https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=345x345&ar=1x1", name: "Da Lat" }
];

const rentals = [
  { imgSrc: "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg", name: "Căn hộ" },
  { imgSrc: "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-house.jpg", name: "Nhà cho thuê" },
  { imgSrc: "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-villa.jpg", name: "Biệt thự riêng" },
  { imgSrc: "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-bungalow.jpg", name: "Nhà trệt" }
];

const hotels = [
  { imgSrc: "https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0", name: "DHTS Business Hotel & Apartment", address: "Phú Nhuận, HCM", price: "1.318.182" },
  { imgSrc: "https://pix8.agoda.net/hotelImages/568/5684454/5684454_18081316440067440969.jpg?ca=0&ce=1", name: "NTA Serviced Apartments", address: "District 1, HCM", price: "1.826.550" },
  { imgSrc: "https://pix8.agoda.net/hotelImages/22423667/-1/c8b11fd11884172c23959f0ccb4ebfc0.jpg?ca=19&ce=1", name: "Nikko Hotel - The Classy Life", address: "District 7, HCM", price: "759.629" },
  { imgSrc: "https://pix8.agoda.net/hotelImages/36087877/-1/5232f35748f1af5439d39426e1152f70.jpg?ce=0", name: "Ekomo Home", address: "District 1, HCM", price: "788.810" },
  { imgSrc: "https://pix8.agoda.net/hotelImages/18766278/-1/3a0787678d83a020105158fadef73593.jpg?ca=16&ce=1", name: "Ekomo Home", address: "Tân Bình, HCM", price: "556.218" },
  { imgSrc: "https://pix8.agoda.net/hotelImages/878/8787635/8787635_19071818020078253105.jpg?ca=13&ce=1", name: "Ekomo Home", address: "District 3, HCM", price: "555.555" },
  { imgSrc: "https://pix8.agoda.net/hotelImages/9091698/-1/2be283e9fc69319176b5a6841ae65ce1.jpg?ca=9&ce=1", name: "Ekomo Home", address: "District 1, HCM", price: "686.342" },
  { imgSrc: "https://pix8.agoda.net/hotelImages/1517561/-1/c8d7f0bb4cf45c2493dfaf257b0b1750.jpg?ca=16&ce=1", name: "Ekomo Home", address: "District 3, HCM", price: "1.310.757" },

]
const Home = () => {
    return (
            <div>
              <NavBar />
              <SearchField />
              <TopDestinations destinations={destinations} />
              <Rentals rentals={rentals} />
              <HomeRecommended hotels={hotels} />
            </div>

    )
};

export default Home;