import { useEffect, useState } from "react";


const usePremumBiodatas = () => {
    const [biodatas, setBiodatas] = useState([])

    useEffect(() => {
        fetch('biosdatas.json')
            .then(res => res.json())
            .then(data => setBiodatas(data))
    }, [])

    return [biodatas]
};

export default usePremumBiodatas;

