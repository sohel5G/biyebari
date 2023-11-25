import { FaGoogle } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleSignInWithPopup } = useAuth();
    // const axiosPublic = useAxiosPublic();

    // const location = useLocation();
    // const navigate = useNavigate()

    const handleUserSignInWithPopup = () => {

        googleSignInWithPopup()
            .then((succData) => {

                const userInfo = { name: succData?.user?.displayName, email: succData?.user?.email };
                // axiosPublic.post('/store-users', userInfo)
                //     .then(res => {

                //         if (res.data.insertedId) {
                //             swal({
                //                 text: `brand new user successfully login & store in the database`,
                //                 icon: "success",
                //                 buttons: false,
                //             })
                //             navigate(location?.state ? location?.state : '/dashboard/profile');
                //         }
                //         else {
                //             swal({
                //                 text: `Login success | ${res.data.message}, so it's not store in the database`,
                //                 icon: "success",
                //                 buttons: false,
                //             })
                //             navigate(location?.state ? location?.state : '/dashboard/profile');
                //         }

                //     })

                console.log('user login by popup', userInfo)

            }).catch((errorData) => {

                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: errorData.message,
                    showConfirmButton: false,
                    timer: 3000
                });

            });
    }

    return (
        <div className="flex justify-center items-center">
            <div className='mt-2 my-4 mx-1'>

                <button onClick={handleUserSignInWithPopup} className='flex items-center gap-2 py-2 border border-primary-normal rounded-lg text-sm font-medium my-3 px-4 min-w-[185px] text-primary-normal hover:bg-primary-normal hover:text-white'><span> <FaGoogle /> </span> <span>Login with Google</span> </button>

            </div>
        </div>
    );
};

export default SocialLogin;