import { useEffect, useState } from "react";
import useBiodatas from "../../hooks/useBiodatas";
import LoaderIcon from "../Utils/LoaderIcon";
import BiodataCard from "../Utils/biodatas/biodataCard";
import "./Biodatas.css";
import MultiRangeSlider from "multi-range-slider-react";

const Biodatas = () => {
    const [viewAll, setViewAll] = useState(null);
    const [typeValue, setTypeValue] = useState(null);
    const [divisionValue, setDivisionValue] = useState(null);

    const [minMaxAutoRunStop, setMinMaxAutoRunStop] = useState(true);

    const [minValue, setMinValue] = useState(null);
    const [maxValue, setMaxValue] = useState(null);

    const [biodatas, , isBiodataLoading] = useBiodatas(viewAll, typeValue, divisionValue, minValue, maxValue);

    const handleViewAll = () => {
        setTypeValue(null);
        setDivisionValue(null);

        setMinValue(null);
        setMaxValue(null);
    }
    const handleTypeValue = () => {
        setViewAll(null);
        setDivisionValue(null)

        setMinValue(null);
        setMaxValue(null);
    }
    const handleDivisionValue = () => {
        setViewAll(null);
        setTypeValue(null);

        setMinValue(null);
        setMaxValue(null);
    }



    useEffect(() => {
        setMinMaxAutoRunStop(false);
    }, [viewAll, typeValue, divisionValue, minValue, maxValue])

    const handleAgeInput = (e) => {

        setViewAll(null);
        setTypeValue(null);
        setDivisionValue(null);

        if ((!viewAll || !typeValue || !divisionValue) && !minMaxAutoRunStop) {
            setMinValue(e.minValue);
            setMaxValue(e.maxValue);
        }

    };


    return (
        <div className="container mx-auto px-5 grid lg:grid-cols-4 lg:gap-3">
            <div className="border-b-2 lg:border-b-0 lg:border-r bg-[#ffffffc2]">


                {/* View All  */}

                <div className="m-3 p-2 bg-white border border-gray-200 rounded-sm mt-12">
                    <h3 className="mb-1 pl-3 font-semibold text-gray-900">
                        View all Biodata
                    </h3>
                    <ul className="text-sm font-medium text-gray-900">
                        <li className="w-full">
                            <div onClick={handleViewAll} className="flex items-center">
                                <input
                                    id="viewAll"
                                    type="radio"
                                    value="viewAll"
                                    name="filter"
                                    onChange={(e) => setViewAll(e.target.value)}
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-primary-normal cursor-pointer"
                                />
                                <label
                                    htmlFor="viewAll"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                    View all
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>


                {/* Filter by age  */}

                <div className="m-3 p-2 bg-white border border-gray-200 rounded-sm mt-5">
                    <h3 className="pl-3 font-semibold text-gray-900">
                        Filter by Age
                    </h3>
                    <div>
                        <div className="range">
                            <h1 className="flex justify-between font-medium text-sm max-w-[260px] mx-auto mb-5">
                                <span>Min {minValue}</span>  <span>TO</span> <span>Max {maxValue}</span>
                            </h1>
                            <MultiRangeSlider
                                min={20}
                                max={55}
                                step={1}
                                ruler={false}
                                minValue={minValue}
                                maxValue={maxValue}
                                barInnerColor="#F1494C"
                                onChange={(e) => {
                                    handleAgeInput(e);
                                }}
                                onClick={handleAgeInput}
                            />
                        </div>
                    </div>
                </div>



                {/* Filter by Type  */}

                <div className="m-3 p-2 bg-white border border-gray-200 rounded-sm mt-5">
                    <h3 className="mb-1 pl-3 font-semibold text-gray-900">
                        Filter by Type
                    </h3>
                    <ul className="text-sm font-medium text-gray-900">
                        <li className="w-full">
                            <div onClick={handleTypeValue} className="flex items-center">
                                <input
                                    id="male"
                                    type="radio"
                                    value="Male"
                                    name="filter"
                                    onChange={(e) => setTypeValue(e.target.value)}
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-primary-normal cursor-pointer"
                                />
                                <label
                                    htmlFor="male"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                    Male
                                </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div onClick={handleTypeValue} className="flex items-center">
                                <input
                                    id="female"
                                    type="radio"
                                    value="Female"
                                    name="filter"
                                    onChange={(e) => setTypeValue(e.target.value)}
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-primary-normal cursor-pointer"
                                />
                                <label
                                    htmlFor="female"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                    Female
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>


                {/* Filter by Division  */}

                <div className="m-3 p-2 bg-white border border-gray-200 rounded-sm mt-5">
                    <h3 className="mb-1 pl-3 font-semibold text-gray-900">
                        Filter by Division
                    </h3>
                    <ul className="text-sm font-medium text-gray-900">
                        <li className="w-full">
                            <div onClick={handleDivisionValue} className="flex items-center">
                                <input
                                    id="Dhaka"
                                    type="radio"
                                    value="Dhaka"
                                    name="filter"
                                    onChange={(e) => setDivisionValue(e.target.value)}
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-primary-normal cursor-pointer"
                                />
                                <label
                                    htmlFor="Dhaka"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                    Dhaka
                                </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div onClick={handleDivisionValue} className="flex items-center">
                                <input
                                    id="Chattagram"
                                    type="radio"
                                    value="Chattagram"
                                    name="filter"
                                    onChange={(e) => setDivisionValue(e.target.value)}
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-primary-normal cursor-pointer"
                                />
                                <label
                                    htmlFor="Chattagram"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                    Chattagram
                                </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div onClick={handleDivisionValue} className="flex items-center">
                                <input
                                    id="Maymansign"
                                    type="radio"
                                    value="Maymansign"
                                    name="filter"
                                    onChange={(e) => setDivisionValue(e.target.value)}
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-primary-normal cursor-pointer"
                                />
                                <label
                                    htmlFor="Maymansign"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                    Maymansign
                                </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div onClick={handleDivisionValue} className="flex items-center">
                                <input
                                    id="Rangpur"
                                    type="radio"
                                    value="Rangpur"
                                    name="filter"
                                    onChange={(e) => setDivisionValue(e.target.value)}
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-primary-normal cursor-pointer"
                                />
                                <label
                                    htmlFor="Rangpur"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                    Rangpur
                                </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div onClick={handleDivisionValue} className="flex items-center">
                                <input
                                    id="Barisal"
                                    type="radio"
                                    value="Barisal"
                                    name="filter"
                                    onChange={(e) => setDivisionValue(e.target.value)}
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-primary-normal cursor-pointer"
                                />
                                <label
                                    htmlFor="Barisal"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                    Barisal
                                </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div onClick={handleDivisionValue} className="flex items-center">
                                <input
                                    id="Khulna"
                                    type="radio"
                                    value="Khulna"
                                    name="filter"
                                    onChange={(e) => setDivisionValue(e.target.value)}
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-primary-normal cursor-pointer"
                                />
                                <label
                                    htmlFor="Khulna"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                    Khulna
                                </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div onClick={handleDivisionValue} className="flex items-center">
                                <input
                                    id="Sylhet"
                                    type="radio"
                                    value="Sylhet"
                                    name="filter"
                                    onChange={(e) => setDivisionValue(e.target.value)}
                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-primary-normal cursor-pointer"
                                />
                                <label
                                    htmlFor="Sylhet"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                    Sylhet
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="lg:col-span-3">
                <h1 className="text-2xl text-left pt-5 flex gap-2 items-center">
                    Total Biodatas {isBiodataLoading ? <div className="w-5 h-5 mt-1"><LoaderIcon /></div> : biodatas?.length}
                </h1>

                {
                    isBiodataLoading ?
                        <>
                            <div className="h-96 w-full flex items-center justify-center">
                                <LoaderIcon />
                            </div>
                        </> :
                        <>
                            {
                                biodatas?.length <= 0 ?
                                    <>
                                        <div className="h-96 w-full flex items-center justify-center">
                                            <h2 className="text-2xl text-center">No Data Found !</h2>
                                        </div>
                                    </> :

                                    <>
                                        <div className="custom-media-query grid grid-cols-1 lg:grid-cols-2 gap-4 py-6">
                                            {
                                                biodatas.map(item => <BiodataCard key={item._id} item={item} />)
                                            }
                                        </div>
                                    </>
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default Biodatas;