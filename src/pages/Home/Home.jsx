import Container from "../Utils/Container";
import banner from "../../assets/banners/banner.jpg";

const Home = () => {
    return (
        <Container>
            <section className="relative">
                <img className="w-full" src={banner} alt="" />
                <div className="absolute top-0 left-0 min-h-full min-w-full bg-[#0000006b] flex items-center justify-center">
                    <div>
                        <h1 className="text-5xl text-white text-center font-medium">Hello world</h1>
                        <p className="text-2xl text-center py-5 text-white"> Sub title here sub title hrebw ub iew bfrkjw bfnj</p>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="py-24 text-4xl">Home page banner</h1>
            </section>
            <section>
                <h1 className="py-24 text-4xl">Home page banner</h1>
            </section>
            <section>
                <h1 className="py-24 text-4xl">Home page banner</h1>
            </section>
            <section>
                <h1 className="py-24 text-4xl">Home page banner</h1>
            </section>
            <section>
                <h1 className="py-24 text-4xl">Home page banner</h1>
            </section>
        </Container>
    );
};

export default Home;