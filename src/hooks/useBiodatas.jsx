import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBiodatas = (viewAll, typeValue, divisionValue, minValue, maxValue) => {

    const axiosPublic = useAxiosPublic();

    const { data: biodatas = [], refetch, isPending: isBiodataLoading, error: isBioDataError } = useQuery({
        queryKey: ['biodatas', viewAll, typeValue, divisionValue, minValue, maxValue],
        queryFn: async () => {

            if (viewAll){
                const response = await axiosPublic('/biodatas');
                return response.data;
            }

            if (typeValue) {
                const response = await axiosPublic(`/biodatas?biodatatype=${typeValue}`);
                return response.data;
            }

            if (divisionValue) {
                const response = await axiosPublic(`/biodatas?divisionvalue=${divisionValue}`);
                return response.data;
            }

            if (minValue && maxValue) {
                const response = await axiosPublic(`/biodatas?gteValue=${minValue}&lteValue=${maxValue}`);
                return response.data;
            }



            const response = await axiosPublic('/biodatas');
            return response.data;
        }
    })

    // console.log(viewAll);
    // console.log(typeValue);
    // console.log(divisionValue);
    // console.log('minValue', minValue);
    // console.log('maxValue', maxValue);

    return [biodatas, refetch, isBiodataLoading, isBioDataError]
};

export default useBiodatas;