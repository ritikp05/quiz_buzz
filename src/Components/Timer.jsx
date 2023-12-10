import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Timer = ({ currques, setCurrques, setSelect }) => {

    const [timer, setTimer] = useState(15);
    const navigate = useNavigate();

    useEffect(() => {

        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev > 0) return prev - 1;
                else {
                    clearInterval(interval);
                    return 0;
                }
            });

        }, 1000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        setTimer(15);
    }, [currques])

    useEffect(() => {
        if (timer === 0) {
            if (currques < 9) {
                setCurrques((prev) => prev + 1);
                setSelect();
            } else {
                navigate('/result');
            }
        }
    }, [timer])


    return (<>
        <div className='sm:w-16 sm:h-16 w-10 h-10 flex relative  sm:top-4 top-2 left-8 text-white  rounded-full bg-slate-950 '>
            <span className='m-auto sm:text-2xl text-xl'>
                {timer}
            </span>
        </div>
    </>
    )
}

export default Timer;