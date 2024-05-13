import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards"
import Shimmer from "./Shimmer";
const RestaurantContainer = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filterRestaurantList, setFilterRestaurantList] = useState([]);
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await response.json();
        console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <>
            <div className="filter-container">
                <div className="search-container">
                    <input className="search-text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button className="search-btn" onClick={() => {
                        setFilterRestaurantList(restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase())));
                    }}>Search</button>

                </div>
                <div className="btn-container">
                    <button className="btn-rated" onClick={
                        () => {
                            setRestaurantList(restaurantList.filter((restaurant) => restaurant.info.avgRatingString < 4));
                        }
                    }>Top rated Restaurants</button>
                </div>
            </div>
            {
                restaurantList.length === 0 ? <Shimmer /> :
                    <div className="res-container">
                        {filterRestaurantList.map(({ info }) => (
                            <RestaurantCards key={info.id} resData={info} />
                        )
                        )}
                    </div>
            }
        </>
    )
}

export default RestaurantContainer;