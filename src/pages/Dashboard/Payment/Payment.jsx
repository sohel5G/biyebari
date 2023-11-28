import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import useSingleBiodataById from "../../../hooks/useSingleBiodataById";
import useAuth from "../../../hooks/useAuth";
import useSelfBiodata from "../../../hooks/useSelfBiodata";
import Button from "../../Utils/Button";
import { useEffect } from "react";
import LoaderIcon from "../../Utils/LoaderIcon";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_GATEWAY_PK_TEST);

const Payment = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const [singleBiodata] = useSingleBiodataById(id);
    const { selfBiodata, refetchSelfBiodata, isLoadingSelfBiodata } = useSelfBiodata();

    console.log('Old', singleBiodata);

    const { _id, ...itemWithoutId } = singleBiodata;
    const newItem = { ...itemWithoutId, requesterEmail: user?.email, requesterName: user?.displayName, requesterBiodataId: selfBiodata?.biodataId, biodataItemId: id, };

    useEffect(() => {
        refetchSelfBiodata();
    }, [id, refetchSelfBiodata])

    console.log('New', newItem);


    return (
        <div className="bg-[#ffffff94] py-6 container px-4 mx-auto">
            {
                isLoadingSelfBiodata ?
                    <>
                        <div className="h-96 flex justify-center items-center">
                            <div>
                                <LoaderIcon/>
                            </div>
                        </div>
                    </> :
                    <>
                        {
                            selfBiodata?.biodataId ?
                                <>
                                    
                                    <div>
                                        <div className="w-80 mx-auto shadow-md p-5 text-center">
                                            <h1 className="text-lg py-3 font-semibold">Request for contact details</h1>
                                            <img className="mx-auto w-20" src={singleBiodata?.img} alt="image" />
                                            <p className="flex justify-between text-lg py- border-t border-b border-gray-200 mt-5"> <span>Biodata ID</span> <span>{singleBiodata?.biodataId}</span></p>
                                            <p className="flex justify-between text-lg py- border-b border-gray-200"><span>Gender</span><span>{singleBiodata?.type}</span></p>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    <div>
                                        <Elements stripe={stripePromise}>
                                            <CheckoutForm></CheckoutForm>
                                        </Elements>
                                    </div>
                                </> :
                                <>
                                    <div className="flex h-96 items-center justify-center">
                                        <div className="text-center">
                                            <h1 className="text-4xl text-gray-400 font-medium py-2">Not found !</h1>
                                            <p className="text-2xl text-gray-400 py-3 pb-7">Please create your own biodata first before send request to view other contact info</p>
                                            <Button text="Create My Biodata" link="/dashboard/add" />
                                        </div>
                                    </div>
                                </>
                        }
                    </>
            }
        </div>
    );
};

export default Payment;