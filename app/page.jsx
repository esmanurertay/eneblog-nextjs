import ContainerHome from "@/container/Home";
export default function HomePage() {
  return (
    <div className="bg-white min-h-screen mt-10 flex flex-col">
  
      <main className="flex-grow">
        <ContainerHome/>
      </main>
      
    </div>
  );
}
