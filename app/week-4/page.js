import NewItem from './new-item'; 

const Page = () => {
    // The Page component now simply renders the NewItem component within a structured layout
    return (
        <main className="bg-blue-200 text-black flex justify-center w-full min-h-screen"> 
            <div className="w-full max-w-md mx-auto p-4 bg-blue-200 rounded-lg "> 
            <h1 className="text-3xl font-bold text-center mb-4">Add New Item</h1>

                <NewItem />
            </div>
        </main>
    );
};

export default Page;
