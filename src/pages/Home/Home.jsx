import usePremumBiodatas from "../../hooks/usePremumBiodatas";
import Container from "../Utils/Container";
import SectionTitle from "../Utils/SectionTitle";
import BiodataCard from "../Utils/biodatas/biodataCard";
import Banner from "./Banner/Banner";
import profile from "../../assets/icons/profile.png"
import query from "../../assets/icons/query.png"
import chat from "../../assets/icons/chat.png"
import totalGirls from "../../assets/img/totalGirls.jpg"
import totalBoys from "../../assets/img/totalBoys.jpg"
import totalMarrige from "../../assets/img/totalMarrige.jpg"
import Slider from "./Slider/Slider";

const Home = () => {

    const [biodatas] = usePremumBiodatas();

    return (
        <Container>
            <section>
                <Banner />
            </section>

            <section>
                <SectionTitle
                    colorTitle="Premium"
                    blackTitle="Biodata"
                    subTitle="Discover Our Premium Members for Lasting Connections"
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-5 items-center justify-between">
                    {
                        biodatas.map(item => <BiodataCard key={item.id} item={item} />)
                    }
                </div>
            </section>

            <section>
                <SectionTitle
                    colorTitle="How BiyeBari"
                    blackTitle="works"
                    subTitle="Get started in BiyeBari.com in 3 easy steps"
                />
                <div className="flex flex-col lg:flex-row gap-7 justify-between items-center">
                    <div className="flex-1 text-center py-12 px-10 border bg-white">
                        <img className="mx-auto" src={profile} alt="profile" />
                        <h3 className="text-2xl font-medium py-5">Create Your Profile</h3>
                        <p>Create your detail profile, add photos and describe your partner preference</p>
                    </div>
                    <div className="flex-1 text-center py-12 px-10 border bg-white">
                        <img className="mx-auto" src={query} alt="profile" />
                        <h3 className="text-2xl font-medium py-5">Search Your Partner</h3>
                        <p>Search your preferred partner by location, education, interest and so on</p>
                    </div>
                    <div className="flex-1 text-center py-12 px-10 border bg-white">
                        <img className="mx-auto" src={chat} alt="profile" />
                        <h3 className="text-2xl font-medium py-5">Start Communication</h3>
                        <p>Start communication with suitable profiles by sending message & emails</p>
                    </div>
                </div>
            </section>

            <section>
                <SectionTitle
                    colorTitle="Success"
                    blackTitle="Counter"
                    subTitle="Celebrating Love and Uniting Souls. Counting Happy Beginnings in Our Matrimonial Journey"
                />
                <div className="flex flex-col lg:flex-row gap-10">

                    <div className="relative rounded-lg group cursor-pointer overflow-hidden transition-all duration-300">
                        <img
                            src={totalBoys}
                            alt="Boys"
                            className="transition-transform transform group-hover:scale-105"
                        />
                        <div className="rounded-lg absolute top-0 left-0 flex justify-center items-center bg-[#00000061] min-h-full min-w-full">
                            <div className="text-center">
                                <h1 className="text-3xl font-medium text-white py-2">Total Boys</h1>
                                <p className="text-xl text-white py-2">320</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-lg group cursor-pointer overflow-hidden transition-all duration-300">
                        <img src={totalGirls}
                            alt="Boys"
                            className="transition-transform transform group-hover:scale-105"
                        />
                        <div className="rounded-lg absolute top-0 left-0 flex justify-center items-center bg-[#00000061] min-h-full min-w-full">
                            <div className="text-center">
                                <h1 className="text-3xl font-medium text-white py-2">Total Girls</h1>
                                <p className="text-xl text-white py-2">320</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-lg group cursor-pointer overflow-hidden transition-all duration-300">
                        <img src={totalMarrige}
                            alt="Boys"
                            className="transition-transform transform group-hover:scale-105"
                        />
                        <div className="rounded-lg absolute top-0 left-0 flex justify-center items-center bg-[#00000061] min-h-full min-w-full">
                            <div className="text-center">
                                <h1 className="text-3xl font-medium text-white py-2">Total Marrige</h1>
                                <p className="text-xl text-white py-2">320</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20">
                <SectionTitle
                    colorTitle="Success"
                    blackTitle="Stories"
                    subTitle="Celebrating Love Stories, Journeying Together Towards Everlasting Happiness"
                />
                <div>
                    <Slider/>
                </div>
            </section>
        </Container>
    );
};

export default Home;