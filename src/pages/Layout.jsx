import Navbar from "../final/components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout(){

    return (
        <>  
            <Navbar />
            <section className='section'>
                <Outlet />
            </section>
        </>
    )

}