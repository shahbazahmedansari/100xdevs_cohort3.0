function App() {
    return (
        <>
            <div className="sm:flex justify-between text-black">
                <div className="bg-green-300">child 1</div>
                <div className="bg-blue-300">child 2</div>
                <div className="bg-red-300">child 3</div>
            </div>

            <div className="grid grid-cols-12 text-black">
                <div className="bg-blue-300 sm:col-span-4 col-span-12">child 1</div>
                <div className="bg-red-300 sm:col-span-6 col-span-12">child 2</div>
                <div className="bg-green-300 sm:col-span-2 col-span-12">child 3</div>
            </div>

            <div className="md:bg-green-300 sm:bg-blue-300 bg-red-300 xl:bg-yellow-300">Hi there</div>
        </>
    );
}

export default App;
