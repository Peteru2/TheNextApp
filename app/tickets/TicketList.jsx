import Link from "next/link"
async function getTickets(){
    await new Promise(resolve => setTimeout(resolve, 4000))
    const res = await fetch('http://localhost:4000/tickets',{
        next:{
            revalidate: 10
        }
    })
    
    return res.json()
    }

const TicketList = async () => {
    const tickets = await getTickets()
    return ( 
            <>
                {tickets.map((ticket)=>{
                    return(
                        <Link href={`/tickets/${ticket.id}`}>
                        <div key={ticket.id} className="card my-4">
                            <h3>{ticket.title}</h3>
                            <p>{ticket.body.slice(0, 210)}...</p>
                            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
                        </div>
                        </Link>
                    )
                })}
                {tickets.length===0 && (
                    <p className="text-center">No Open Ticket!</p>
                )}
            </>
     );
}
 
export default TicketList;