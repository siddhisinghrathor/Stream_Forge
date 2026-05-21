export default function Sidebar(){
    return (
        <aside className="w-64 border-r border-zinc-800 bg-zinc-950 p-4">
            <h2 className="text-xl font-bold text-white mb-6">
                StreamForge
            </h2>

            <nav className="mt-8 flex flex-col gap-4">
                <a href="/dashboard" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors text-gray-300 hover:text-white">
                    dashboard
                </a>
            
            
            <a href="/review"  className="block w-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white rounded-lg p-3 font-semibold cursor-pointer text-sm text-center">
             Review
            </a>
</nav>
        </aside>
    );
}