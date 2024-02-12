import { notFound } from "next/navigation"

export const dynamicParams  = true

export async function generateStaticParams() {
    const res = await  fetch('http://localhost:4000/tickets/')
    const tickets = await res.json()

    return tickets.map((ticket)=>(
        {
            id: ticket.id
        }
    ))
}


async function getTicket(id){
    const res = await fetch('http://localhost:4000/tickets/' + id,{
        next:{
            revalidate: 10
        }
    })
    if(!res.ok){
        notFound()
    }
    return res.json()
    }


const TicketDetail = async ({ params }) => {

    const ticket = await getTicket(params.id)

    return   ( 
        <main>
            <nav>
                <h1>Ticket Details</h1>
            </nav>
            <div className="card">
                <h2>{ticket.title}</h2>
                <b>{ticket.user_email}</b>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            </div>
           
        </main>
     );
}
 
export default TicketDetail;