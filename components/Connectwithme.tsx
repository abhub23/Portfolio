'use client'

import { useRef } from "react";
import { JSX } from "react";
import { Bricolage } from "@/utils/fonts";
import { useName, useEmail, useMessage } from "@/store/Connectwithme";
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
            console.log(name, email, message)
            await axios.post('http://localhost:8000/send', { name, email, message })
            console.log("DONE");
        } catch (error) {
            console.log('Error occured while sending message', error)
        }
    }

    return (
        <div className={` ${Bricolage} h-[250px] w-72 flex flex-col items-start gap-4 ml-100 p-4`}>
            {/* <input type="text" placeholder="Name" required={true} onChange={(e) => setName(e.currentTarget.value)}
                className="border-black dark:border-white bg-white dark:bg-black p-2 border-2 h-[35px] w-[620px] rounded-[4px]" /> */}
            <input type="text" placeholder="Email" required={true} onChange={(e) => setEmail(e.currentTarget.value)}
                className="border-black dark:border-white bg-white dark:bg-black p-2 border-2 h-[35px] w-[705px] rounded-[4px]" />
            <textarea onInput={handleInput} ref={textareaRef} placeholder="Message" required={true} onChange={(e) => setMessage(e.currentTarget.value)}
                className="border-black dark:border-white bg-white dark:bg-black p-2 border-2 min-h-[42px] h-[42px] overflow-hidden min-w-[705px] w-[705px] max-w-[705px] resize rounded-[4px]" />
            <button
                className='border-black bg-black dark:bg-white dark:border-white text-[14px] text-white dark:text-black border-2 h-9 w-[705px] rounded-[4px] mt-1 cursor-pointer'
                onClick={handleMessage}> Send Message </button>
        </div>
    )
}

export default Connectwithme