import PropTypes from 'prop-types';
import { MdFavoriteBorder, MdOutlineEmail } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const BiodataCard = ({ item }) => {

    const {
        img,
        id,
        type,
        permanentDivision,
        age,
        occupation
    } = item;

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between shadow-md hover:shadow-lg bg-white rounded-md border border-[#f1494c1c] hover:border-[#f1494c52]'>
                <div>
                    <img className='w-48 mt-4 md:mt-0' src={img} alt="profile image" />
                </div>
                <div className='flex-1 py-2'>
                    <p className='grid grid-cols-4 text-sm border-b p-2'>
                        <span className='col-span-3'>
                            ID:
                        </span>
                        <span>
                            {id}
                        </span>
                    </p>
                    <p className='grid grid-cols-4 text-sm border-b p-2'>
                        <span className='col-span-3'>
                            Type:
                        </span>
                        <span>
                            {type}
                        </span>
                    </p>
                    <p className='grid grid-cols-4 text-sm border-b p-2'>
                        <span className='col-span-3'>
                            Permanent Division:
                        </span>
                        <span>
                            {permanentDivision}
                        </span>
                    </p>
                    <p className='grid grid-cols-4 text-sm border-b p-2'>
                        <span className='col-span-3'>
                            Age:
                        </span>
                        <span>
                            {age}
                        </span>
                    </p>
                    <p className='grid grid-cols-4 text-sm p-2'>
                        <span className='col-span-3'>
                            Occupation:
                        </span>
                        <span>
                            {occupation}
                        </span>
                    </p>
                    <p className='pb-2 text-center'>
                        <Link to={'/'} className='text-primary-normal px-[2px] pb-[1px] border-b border-primary-normal'>View details</Link>
                    </p>
                </div>
                <div>
                    <button className='md:block mr-3 p-2 rounded-full my-5 text-primary-normal text-lg border border-primary-normal hover:bg-primary-normal hover:text-white'> <MdFavoriteBorder /> </button>
                    <button className='md:block mr-3 p-2 rounded-full my-5 text-primary-normal text-lg border border-primary-normal hover:bg-primary-normal hover:text-white'> <MdOutlineEmail /> </button>
                    <button className='md:block mr-3 p-2 rounded-full my-5 text-primary-normal text-lg border border-primary-normal hover:bg-primary-normal hover:text-white'> <IoChatbubblesOutline /> </button>
                </div>
            </div>
        </div>
    );
};

export default BiodataCard;

BiodataCard.propTypes = {
    item: PropTypes.object,
};