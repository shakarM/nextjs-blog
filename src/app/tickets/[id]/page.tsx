import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";
export const dynamicParam = true;

export async function geenrateStaticParams() {
  const res = await fetch(`http://localhost:4000/tickets`);

  const tickets = await res.json();

  return tickets.map((ticket: any) => {
    id: ticket.id;
  });
}

async function getTicket(id: number) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60, // use 0 to opt out of using cache
    },
  });
  await new Promise((resolve) => {
    setTimeout(resolve), 4000;
  });
  if (!res.ok) {
    return NotFound();
  }
  return res.json();
}

const TicketDetails = async ({ params }: any) => {
  const ticket = await getTicket(params.id);
  return (
    <main>
      <nav>
        <h2> Ticket details</h2>
      </nav>
      <div className="card">
        <p
          className={`bg-slate-300 w-[3rem] text-center rounded-[0.3rem] px-2`}
        >
          {ticket.priority}
        </p>
        <h5 className="font-black text-[1.4rem]">{ticket.title}</h5>
        <h4 className="font-bold text-slate-400 text-[1rem]">
          Created by: {ticket.user_email}
        </h4>
        <p>{ticket.body}</p>
      </div>
    </main>
  );
};

export default TicketDetails;
