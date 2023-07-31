import React from "react"
import ReactDOM from "react-dom/client";
/* Heder
    - Logo
    - Nav-items
Body
    - Search 
    - Restaurantbox
        - RestaurantCard
Footer
    - Copyright
    - Links
    - Address
    - Contact
*/
const Header = () => {
    return (
        <>
        <div className="navbar">
            <div className="navitems flex">
                <img src="" alt=""/>
                <ul className="flex">
                    <li className="font-bold">home</li>
                    <li className="font-bold">about us</li>
                    <li className="font-bold">contact us</li>
                    <li className="font-bold">cart</li>
                </ul>
            </div>
        </div>
        </>
    )
}
const AppLayout = () => {
    return(
        <>
            <div className="app">
                <Header/>
            </div>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
