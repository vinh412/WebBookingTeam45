import NavBar from "../../components/navbar/NavBar";
// import { Link } from 'react-router-dom';
import avatar from '../../asset/avatar.jpg'
import SearchField from "../../components/searchfield/SearchField";
import SearchCard from "../../components/card/SearchCard";
import {useState} from "react"
const dataSearch= [
    {
        id:1,
    name: 'Hotel1',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
    type:3,
    description: 'Hotel1 Description',
    address: 'Hotel1 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    },
    {
        id:2,
    name: 'Hotel An Khánh',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
    type:3,
    description: 'Hotel2 Description',
    address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
    mincost:3000000,
    phone:113,
    evalute:3.5,
    numberreviews:666,
    salemax:30
    },
    {
        id:3,
    name: 'Hotel3',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
    type:3,
    description: 'Hotel3 Description',
    address: 'Hotel3 Address',
    mincost:2000000,
    phone:113,
    evalute:4,
    numberreviews:222,
    salemax:30,
    },
    {
        id:4,
    name: 'Hotel4',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
    type:3,
    description: 'Hotel4 Description',
    address: 'Hotel4 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    },
    {
        id:1,
    name: 'Hotel1',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
    type:3,
    description: 'Hotel1 Description',
    address: 'Hotel1 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    },
    {
        id:2,
    name: 'Hotel An Khánh',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
    type:3,
    description: 'Hotel2 Description',
    address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
    mincost:3000000,
    phone:113,
    evalute:3.5,
    numberreviews:666,
    salemax:30
    },
    {
        id:3,
    name: 'Hotel3',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
    type:3,
    description: 'Hotel3 Description',
    address: 'Hotel3 Address',
    mincost:2000000,
    phone:113,
    evalute:4,
    numberreviews:222,
    salemax:30,
    },
    {
        id:4,
    name: 'Hotel4',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
    type:3,
    description: 'Hotel4 Description',
    address: 'Hotel4 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    },
    {
        id:1,
    name: 'Hotel1',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
    type:3,
    description: 'Hotel1 Description',
    address: 'Hotel1 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    },
    {
        id:2,
    name: 'Hotel An Khánh',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
    type:3,
    description: 'Hotel2 Description',
    address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
    mincost:3000000,
    phone:113,
    evalute:3.5,
    numberreviews:666,
    salemax:30
    },
    {
        id:3,
    name: 'Hotel3',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
    type:3,
    description: 'Hotel3 Description',
    address: 'Hotel3 Address',
    mincost:2000000,
    phone:113,
    evalute:4,
    numberreviews:222,
    salemax:30,
    },
    {
        id:4,
    name: 'Hotel4',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
    type:3,
    description: 'Hotel4 Description',
    address: 'Hotel4 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    },
    {
        id:1,
    name: 'Hotel1',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
    type:3,
    description: 'Hotel1 Description',
    address: 'Hotel1 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    },
    {
        id:2,
    name: 'Hotel An Khánh',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
    type:3,
    description: 'Hotel2 Description',
    address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
    mincost:3000000,
    phone:113,
    evalute:3.5,
    numberreviews:666,
    salemax:30
    },
    {
        id:3,
    name: 'Hotel3',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
    type:3,
    description: 'Hotel3 Description',
    address: 'Hotel3 Address',
    mincost:2000000,
    phone:113,
    evalute:4,
    numberreviews:222,
    salemax:30,
    },
    {
        id:4,
    name: 'Hotel4',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
    type:3,
    description: 'Hotel4 Description',
    address: 'Hotel4 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    },
    {
        id:1,
    name: 'Hotel1',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
    type:3,
    description: 'Hotel1 Description',
    address: 'Hotel1 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    },
    {
        id:2,
    name: 'Hotel An Khánh',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
    type:3,
    description: 'Hotel2 Description',
    address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
    mincost:3000000,
    phone:113,
    evalute:3.5,
    numberreviews:666,
    salemax:30
    },
    {
        id:3,
    name: 'Hotel3',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
    type:3,
    description: 'Hotel3 Description',
    address: 'Hotel3 Address',
    mincost:2000000,
    phone:113,
    evalute:4,
    numberreviews:222,
    salemax:30,
    },
    {
        id:4,
    name: 'Hotel4',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
    type:3,
    description: 'Hotel4 Description',
    address: 'Hotel4 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    },
    {
        id:1,
    name: 'Hotel1',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/164870768.webp?k=73fc28f8bba7ea89531cb3dfdd3c729f8d5c7a50ff74e6dc5dd8d7625eb6eb6c&o=", "src2", "src3"],
    type:3,
    description: 'Hotel1 Description',
    address: 'Hotel1 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    },
    {
        id:2,
    name: 'Hotel An Khánh',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/249794327.webp?k=29efd90e9f46c19b3c0eb1d220c383350047b63820496d788b5ee08b029e7a78&o=", "src2", "src3"],
    type:3,
    description: 'Hotel2 Description',
    address: 'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
    mincost:3000000,
    phone:113,
    evalute:3.5,
    numberreviews:666,
    salemax:30
    },
    {
        id:3,
    name: 'Hotel3',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/213490721.webp?k=8aa307f2e8acf5dfddd05f650cab21339576350b44ff0aef63439ba6cc7202ea&o=", "src2", "src3"],
    type:3,
    description: 'Hotel3 Description',
    address: 'Hotel3 Address',
    mincost:2000000,
    phone:113,
    evalute:4,
    numberreviews:222,
    salemax:30,
    },
    {
        id:4,
    name: 'Hotel4',
    revenua:300,
    fee: 100,
    images: ["https://cf.bstatic.com/xdata/images/hotel/square600/459462610.webp?k=4917c06eda2fc2b9047fa54f999867ea408f03f9cc9a12f8bb2eafb7083ba26e&o=", "src2", "src3"],
    type:3,
    description: 'Hotel4 Description',
    address: 'Hotel4 Address',
    mincost:200,
    phone:113,
    evalute:3.5,
    numberreviews:222,
    salemax:30
    }
  

]


const Search = () =>{

    const [itemhotel1,setPage]=useState([])
    const itemhotel=[]
    const numberPage=(dataSearch.length/5)+(dataSearch.length%5?1:0)

    const check=()=>{
        for (let i=1;i<=5;i++){
            if(document.getElementById(i).innerHTML>numberPage){
                document.getElementById(i).style.display="none"
            }
        }
    }
        
    
    const  switchPage = (x) => {
        itemhotel.splice(0, 4)

        
        
        var page=Number( document.getElementById(x).innerHTML);
        console.log(page)
        for(let i=5*(page-1); i<5*page; i++){
            if(dataSearch[i]){
            itemhotel.push(<SearchCard hotel={dataSearch[i]}/>);
        }
        else{
            break;
        }
        }
        
            if(page>=4){
                for(let i=1;i<=5;i++){
                    document.getElementById(i).innerHTML=(page-(3-i))
                }
            }
            else{
                for(let i=1;i<5;i++){
                   document.getElementById(i).innerHTML=(i)
                }
        
            }
       check();
        

}
const Test1=()=>{
    switchPage(1);
    setPage(itemhotel);
 
   }
   const Test2=()=>{
    switchPage(2);
    setPage(itemhotel);
 
   }
   const Test3=()=>{
    switchPage(3);
    setPage(itemhotel);
 
   }
   const Test4=()=>{
    switchPage(4);
    setPage(itemhotel);
 
   }
   const Test5=()=>{
    switchPage(5);
    setPage(itemhotel);
 
   }
    
    return(
        <div>
            <NavBar status={true}/>
            <SearchField />
            <section className="h-1000 mt-5">
                <div className="container-fluid h-custom mb-5">
                    <div className="row d-flex justify-content-center  ">
                        <div className="col-md-0 col-lg-3 col-xl-3 " >
                           <span className="fw-bolder ">Filter by:</span>
                           <div className="border m-4 p-3 mb-0">
                               <span className="fw-bolder "  >Your budget (per night)</span>
                               
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="checkbugget" id="checkbugget1" />
                                <label class="form-check-label" for="checkbugget1">
                                    0 VND - 1000000 VND
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="checkbugget" id="checkbugget2"/>
                                <label class="form-check-label" for="checkbugget2">
                                    1000000 VND - 2000000 VND
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="checkbugget" id="checkbugget3"/>
                                <label class="form-check-label" for="checkbugget3">
                                        2000000 VND - 3000000 VND
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="checkbugget" id="checkbugget4"/>
                                <label class="form-check-label" for="checkbugget4">
                                    3000000 VND - 4000000 VND
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="checkbugget" id="checkbugget5"/>
                                <label class="form-check-label" for="checkbugget5">
                                    4000000+ VND
                                </label>
                                </div>
                           </div>
                           
                           <div className="border m-4 p-3 mt-0">
                               <span className="fw-bolder" >Property rating</span>
                        
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="checktype" id="checktype2"/>
                                <label class="form-check-label" for="checktype2">
                                    1 Stars
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="checktype" id="checktype3"/>
                                <label class="form-check-label" for="checktype3">
                                        2 Stars
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="checktype4" id="checktype4"/>
                                <label class="form-check-label" for="checktype">
                                    3 Stars
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="checktype" id="checktype5"/>
                                <label class="form-check-label" for="checktype5">
                                    4 Stars
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="checktype" id="checktype6"/>
                                <label class="form-check-label" for="checktype7">
                                    5 Stars
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="checktype" id="checktype1" />
                                <label class="form-check-label" for="checktype1">
                                    Unrated
                                </label>
                                </div>
                           
                           </div>
                           
                        </div>
                        <div className="col-md-12 col-lg-9 col-xl-7 offset-xr-1 ">
                            {itemhotel1}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" class="btn btn-light m-2">{"<"}</button>
                        <button type="button" class="btn btn-light m-2" id="1" onClick={Test1}>1</button>
                        <button type="button" class="btn btn-light m-2" id="2" onClick={Test2}>2</button>
                        <button type="button" class="btn btn-light m-2" id="3" onClick={Test3}>3</button>
                        <button type="button" class="btn btn-light m-2" id="4" onClick={Test4}>4</button>
                        <button type="button" class="btn btn-light m-2" id="5" onClick={Test5}>5</button>
                        <button type="button" class="btn btn-light m-2">{">"}</button>

                    </div>
                </div>
                <div
                    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    {/* <!-- Copyright --> */}
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>
                    {/* <!-- Copyright --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </div>
            </section>
           
        </div>
    )

}

export default Search;