function SearchBar() {
    return (
        <div className="flex justify-center items-center h-screen">
            <input
                type="text"
                placeholder="Search..."
                className="border p-2 rounded-lg"
            />
            <button className="bg-blue-500 text-white p-2 ml-2 rounded-lg">
                Search
            </button>
        </div>
    )
}

export default SearchBar