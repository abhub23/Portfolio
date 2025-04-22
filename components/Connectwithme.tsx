'use client'

import { useRef } from "react";
import { JSX } from "react";
import { Bricolage } from "@/utils/fonts";
import { useEmail, useMessage } from "@/store/Connectwithme";
import axios from "axios";

const Connectwithme: React.FC = (): JSX.Element => {
    //const { name, setName } = useName()
    const { email, setEmail } = useEmail()
    const { message, setMessage } = useMessage()

    const textareaRef = useRef<HTMLTextAreaElement | null>(null); 

    const handleInput = () => {
      const el = textareaRef.current;
      if (el) {
        el.style.height = '40px';
        el.style.height = `${el.scrollHeight}px`; // Set height to fit content
      }
    };

    const handleMessage = async () => {
        try {
            await axios.post('http://localhost:8000/send', { email, message })
        } catch (error) {
            console.log('Error occured while sending message', error)
        }
    }

    return (
        <div className={` ${Bricolage} h-[300px] w-72 flex flex-col items-start ml-100 p-4`}>

            {/* <input type="text" placeholder="Name" required={true} onChange={(e) => setName(e.currentTarget.value)}
                className="border-black dark:border-white bg-white dark:bg-black p-2 border-2 h-[35px] w-[620px] rounded-[4px]" /> */}
            <div className="p-[2px]">Email </div>
            <input type="text" placeholder="abdullahmukri25@gmail.com" required={true} onChange={(e) => setEmail(e.currentTarget.value)}
                className="border-black dark:border-white bg-white dark:bg-black text-[14px] p-2 mb-[12px] border-2 h-[32px] w-[705px] rounded-[4px]" />
            <div className="p-[2px]">Message</div>            
            <textarea onInput={handleInput} ref={textareaRef} placeholder="Hey, I have this cool idea, could you help me build it ?" required={true} onChange={(e) => setMessage(e.currentTarget.value)}
                className="border-black dark:border-white bg-white dark:bg-black text-[14px] mb-[20px] p-2 border-2 min-h-[60px] h-[42px] overflow-hidden min-w-[705px] w-[705px] max-w-[705px] resize rounded-[4px]" />
            <button
                className='border-black bg-black dark:bg-white dark:border-white text-[14px] text-white dark:text-black border-2 h-9 w-[705px] rounded-[4px] mt-1 cursor-pointer hover:bg-stone-900 dark:hover:bg-gray-100'
                onClick={handleMessage}> Send Message </button>
        </div>
    )
}

export default Connectwithme