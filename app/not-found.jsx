import Link from "next/link";

const NotFound = () => {
    return ( 
        <main className="text-center ">
                    <h2>There was a problem</h2>
                    <p>We could not fetch the page you requested for </p>
                    <p>Go back to the <Link href="/">Dashboard</Link></p>
        </main>
     );
}
 
export default NotFound;