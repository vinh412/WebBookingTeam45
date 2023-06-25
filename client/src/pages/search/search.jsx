import NavBar from "../../components/navbar/NavBar";
// import { Link } from 'react-router-dom';
import avatar from '../../asset/avatar.jpg'
import SearchField from "../../components/searchfield/SearchField";
import SearchCard from "../../components/card/SearchCard";
import { useState, useEffect, ChangeEvent } from "react"
import * as React from 'react';
import Footer from "../../components/footer/Footer";
import { Pagination } from "@mui/material";
import FilterSearch from "../../components/filtersearch/FilterSearch";
const dataSearch = [
    {
        id: 1,
        name: 'Hotel1',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel1 Description',
        address: 'Hotel1 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    },
    {
        id: 2,
        name: 'Hotel An Khánh',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel2 Description',
        address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
        mincost: 3000000,
        phone: 113,
        evalute: 3.5,
        numberreviews: 666,
        salemax: 30
    },
    {
        id: 3,
        name: 'Hotel3',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel3 Description',
        address: 'Hotel3 Address',
        mincost: 2000000,
        phone: 113,
        evalute: 4,
        numberreviews: 222,
        salemax: 30,
    },
    {
        id: 4,
        name: 'Hotel4',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel4 Description',
        address: 'Hotel4 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    },
    {
        id: 1,
        name: 'Hotel1',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel1 Description',
        address: 'Hotel1 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    },
    {
        id: 2,
        name: 'Hotel An Khánh',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel2 Description',
        address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
        mincost: 3000000,
        phone: 113,
        evalute: 3.5,
        numberreviews: 666,
        salemax: 30
    },
    {
        id: 3,
        name: 'Hotel3',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel3 Description',
        address: 'Hotel3 Address',
        mincost: 2000000,
        phone: 113,
        evalute: 4,
        numberreviews: 222,
        salemax: 30,
    },
    {
        id: 4,
        name: 'Hotel4',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel4 Description',
        address: 'Hotel4 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    },
    {
        id: 1,
        name: 'Hotel1',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel1 Description',
        address: 'Hotel1 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    },
    {
        id: 2,
        name: 'Hotel An Khánh',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel2 Description',
        address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
        mincost: 3000000,
        phone: 113,
        evalute: 3.5,
        numberreviews: 666,
        salemax: 30
    },
    {
        id: 3,
        name: 'Hotel3',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel3 Description',
        address: 'Hotel3 Address',
        mincost: 2000000,
        phone: 113,
        evalute: 4,
        numberreviews: 222,
        salemax: 30,
    },
    {
        id: 4,
        name: 'Hotel4',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel4 Description',
        address: 'Hotel4 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    },
    {
        id: 1,
        name: 'Hotel1',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel1 Description',
        address: 'Hotel1 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    },
    {
        id: 2,
        name: 'Hotel An Khánh',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel2 Description',
        address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
        mincost: 3000000,
        phone: 113,
        evalute: 3.5,
        numberreviews: 666,
        salemax: 30
    },
    {
        id: 3,
        name: 'Hotel3',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel3 Description',
        address: 'Hotel3 Address',
        mincost: 2000000,
        phone: 113,
        evalute: 4,
        numberreviews: 222,
        salemax: 30,
    },
    {
        id: 4,
        name: 'Hotel4',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel4 Description',
        address: 'Hotel4 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    },
    {
        id: 1,
        name: 'Hotel1',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel1 Description',
        address: 'Hotel1 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    },
    {
        id: 2,
        name: 'Hotel An Khánh',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel2 Description',
        address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
        mincost: 3000000,
        phone: 113,
        evalute: 3.5,
        numberreviews: 666,
        salemax: 30
    },
    {
        id: 3,
        name: 'Hotel3',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel3 Description',
        address: 'Hotel3 Address',
        mincost: 2000000,
        phone: 113,
        evalute: 4,
        numberreviews: 222,
        salemax: 30,
    },
    {
        id: 4,
        name: 'Hotel4',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel4 Description',
        address: 'Hotel4 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    },
    {
        id: 1,
        name: 'Hotel1',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel1 Description',
        address: 'Hotel1 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    },
    {
        id: 2,
        name: 'Hotel An Khánh',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel2 Description',
        address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
        mincost: 3000000,
        phone: 113,
        evalute: 3.5,
        numberreviews: 666,
        salemax: 30
    },
    {
        id: 3,
        name: 'Hotel3',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel3 Description',
        address: 'Hotel3 Address',
        mincost: 2000000,
        phone: 113,
        evalute: 4,
        numberreviews: 222,
        salemax: 30,
    },
    {
        id: 4,
        name: 'Hotel4',
        revenua: 300,
        fee: 100,
        images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
        type: 3,
        description: 'Hotel4 Description',
        address: 'Hotel4 Address',
        mincost: 200,
        phone: 113,
        evalute: 3.5,
        numberreviews: 222,
        salemax: 30
    }


]

const pageSize = 5;

const Search = () => {

    const [hotels, setHotels] = useState([]);
    const [displayHotels, setDisplayHotels] = useState([]);
    const [page, setPage] = useState(1);
    const handleChange = (e, p) => {
        setPage(p);
        setDisplayHotels(hotels.slice((p - 1) * pageSize, p * pageSize));
    };

    const fetchAllHotelsData = () => {
        fetch(`http://localhost:5000/api/v1/hotel/getAll`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setHotels(data)
                return data
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
            <SearchField />
            <section className="h-1000 mt-5">
                <div className="container-fluid h-custom mb-5">
                    <div className="row d-flex justify-content-center  ">
                        <FilterSearch />
                        <div className="col-md-12 col-lg-9 col-xl-7 offset-xr-1 ">
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
            </section>

        </div>
    )

}

export default Search;