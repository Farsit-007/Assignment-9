import { useLoaderData } from "react-router-dom";
import EstateCard from "../Estates/EstateCard";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
const Home = () => {
    const estates = useLoaderData();
    return (
        <div className="font-Mulish">
            <Helmet>
                <title>FaLi | Home</title>
            </Helmet>
            <div className="z-20">
                <Banner></Banner>
            </div>
            <div className=" space-y-4 max-w-6xl mx-auto">
                <div className="py-6 md:py-12">
                    <h1 className="text-3xl md:text-5xl text-center font-bold">Estates</h1>
                </div>
                <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        estates.map(estateA => <EstateCard key={EstateCard.id} estateA={estateA}></EstateCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;