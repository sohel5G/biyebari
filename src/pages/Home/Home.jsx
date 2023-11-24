import Container from "../Utils/Container";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <Container>
            <section>
                <Banner/>
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