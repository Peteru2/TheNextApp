import Image from "next/image";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image src="/next.jpg" alt="imae " width={130} height={70}/>
          <h2>This is a new code</h2>
      </div>
    </main>
  );
}
