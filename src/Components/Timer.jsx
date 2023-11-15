import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Timer = ({ currques, setCurrques,setSelect }) => {

    const [timer, setTimer] = useState(10);
const navigate=useNavigate();

    useEffect(() => {

        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev > 0) return prev - 1;
                else {
                    clearInterval(interval);
                    return 0;
                }
            });

        }, 20);

        // Clearing the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {

        setTimer(1000);


    }, [currques])


useEffect(()=>{ if (timer === 0) {
    if (currques < 9) {
        setCurrques((prev) => prev + 1);
        setSelect();
    } else {
        navigate('/result');
    }
}

},[timer])



    return (<>

             {/* {timer===0 && setCurrques((prev)=>prev+1)} */}
        <div className='w-16 h-16 flex relative top-2 left-2 text-white  rounded-full bg-slate-950 '>
            <span className='m-auto text-2xl'>
                {timer}

            </span>

            {/* {(timer===0 && currques>8) ? navigate("/result"):setCurrques(currques+1)} */}
        </div>
    </>
    )
}

export default Timer;