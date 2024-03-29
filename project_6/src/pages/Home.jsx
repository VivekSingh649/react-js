import Search from "./Search";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";

function Home() {
    return (
        <>
            <Search />
            <div className="container">
                <div className="grid_layout def-padd">
                    <Movies />
                </div>
            </div>
        </>
    );
}

export default Home;