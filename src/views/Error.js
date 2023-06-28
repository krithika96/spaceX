import { Link } from "react-router-dom";

export default function Error(){
    return(
        <>
        <section className="flex flex-col items-center justify-center text-center h-screen">   
            <h1>Error | Page not found</h1>
            <Link to="/" className="btn">&larr; Back to Home</Link>
        </section>
        </>
    )
};