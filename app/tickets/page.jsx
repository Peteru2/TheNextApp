import TicketList from "./TicketList";

const Tickets = () => {
   
    return ( 
            <main>
                    <nav>
                        <div>
                            <h2>Tickets</h2>
                            <p><i>Currently open tickets</i></p>
                        </div>
                    </nav>
                    <TicketList />
            </main>
     );
}
 
export default Tickets;