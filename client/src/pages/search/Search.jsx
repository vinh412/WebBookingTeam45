import NavBar from "../../components/navbar/NavBar";
// import { Link } from 'react-router-dom';
import avatar from '../../asset/avatar.jpg'
import SearchField from "../../components/searchfield/SearchField";
import SearchField2 from "../../components/searchfield/SearchField2";
import SearchCard from "../../components/card/SearchCard";
import { useState, useEffect } from "react"
import * as React from 'react';
import Footer from "../../components/footer/Footer";
import { Pagination } from "@mui/material";
import FilterSearch from "../../components/filtersearch/FilterSearch";
import { useSearchParams } from 'react-router-dom'

const pageSize = 5;

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('searchterm'));
    const [hotels, setHotels] = useState([]);
    const [displayHotels, setDisplayHotels] = useState([]);
    const [page, setPage] = useState(1);
    const handleChange = (e, p) => {
        setPage(p);
        setDisplayHotels(hotels.slice((p - 1) * pageSize, p * pageSize));
    };

    const fetchAllHotelsData = () => {
        fetch('http://localhost:5000/api/v1/hotel/search', {
            method: "POST",
            body: JSON.stringify({
                searchterm: searchParams.get('searchterm')
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let newdata = data.map((hotel) => {
                    let minRoom = hotel.rooms.reduce((minRoom, current) => {
                        if (current.salePrice < minRoom.salePrice) {
                            return current;
                        }
                        return minRoom;
                    }, {
                        salePrice: 99999999,
                        cost: 999999999
                    });
                    return { ...hotel, cost: minRoom.cost, salePrice: minRoom.salePrice };
                });
                setHotels(newdata);
                return newdata;
            })
            .then(data => {
                setDisplayHotels(data.slice(0, pageSize))
            })
    }
    useEffect(() => {
        fetchAllHotelsData()
    }, [])
    return (
        <div>
            <NavBar status={true} />
                <div className="container h-custom mb-5">
                    <SearchField2 />
                    <div className="row d-flex">
                        <div className="col-3">
                        <FilterSearch hotels={hotels} setHotels={setHotels}/>
                        </div>
                        <div className="col-9">
                            {displayHotels.map(item => <SearchCard hotel={item} />)}
                            <Pagination
                                count={Math.ceil(hotels.length / pageSize)}
                                size="large"
                                page={page}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <Footer />

        </div>
    )

}

export default Search;
