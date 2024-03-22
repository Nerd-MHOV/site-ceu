import { Navbar } from "@/components/ui";

const NotFound = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center text-center justify-center h-screen bg-primary text-white pt-[120px]">
                <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
                <p className="text-lg mb-8">A página que você está procurando não existe.</p>
                <div className="flex items-center space-x-4">
                    <span className="bg-logo-yel w-8 h-8 rounded-full"></span>
                    <span className="bg-logo-blue w-8 h-8 rounded-full"></span>
                    <span className="bg-logo-black w-8 h-8 rounded-full"></span>
                </div>
            </div>

        </>
    );
}

export default NotFound