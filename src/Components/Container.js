import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import Complete from './Complete';
import Pending from './Pending';
import Modals from './Modals';


const Container = () => {
   
    const [complete, setComplete] = useState(false);
    const [pending, setPending] = useState(true);

    const [activeC, setActiveC] = useState("");
    const [activeP, setActiveP] = useState("border-b-[#4643EE] border-b-2 text-[#4643EE]");

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handeling Pending & Complete 
    
    const handleComplete = () => {
        setComplete(true);
        setPending(false); 
        setActiveC("border-b-[#4643EE] border-b-2 text-[#4643EE]");
        setActiveP("text-[#ADADAD]")
    }

    const handlePending = () => {
        setPending(true);
        setComplete(false); 
        setActiveP("border-b-[#4643EE] border-b-2 text-[#4643EE]");
        setActiveC("text-[#ADADAD]")
    }

    //  Handeling Modal 

    const openModal = () => {
        setIsModalOpen(true);

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='pt-2 pl-10 w-[95%] '>
            <div className='text-[32px] font-semibold pb-5'>Monitoring</div>
            <div className=' border-b-2 border-[#E4E4E4]  flex justify-between '>
                <div className='flex gap-5 '>
                    <div className={` cursor-pointer pb-3 font-semibold hover:border-b-2  hover:border-b-[#4643EE] hover:text-[#4643EE] ${activeP}`} onClick={handlePending}>Pending</div>
                    <div className={` cursor-pointer pb-3 font-semibold hover:border-b-2  hover:border-b-[#4643EE] hover:text-[#4643EE] ${activeC}`} onClick={handleComplete}>Complete</div>
                </div>
                <div onClick={openModal} className='p-1 bg-[#F6D8D8] font-semibold rounded-sm text-[#D13B3B] mb-2 text-sm cursor-pointer flex '>
                    <p className='text-lg pt-[2px]  '><IoIosCloseCircleOutline /></p>
                    <p > Close account</p>

                </div>
            </div>

            <div className='mt-5'>

                {complete ? <Complete /> : <Pending />}

            </div>
            <Modals isOpen={isModalOpen} onClose={closeModal} />

        </div >
    )
}

export default Container;