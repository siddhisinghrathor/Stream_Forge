import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

export default function DashboardLayout({
    children
}:{
    children: React.ReactNode;
}){
    return (
        <div className="min-h-screen flex bg-zinc-950 text-zinc-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}