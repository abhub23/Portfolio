'use client';

import { useRef } from 'react';
import { JSX } from 'react';
import { Bricolage } from '@/utils/fonts';
import { useEmail, useMessage } from '@/store/Connectwithme';
import axios from 'axios';
import sweetalert from '@/utils/Emptyalert';
import { FaXTwitter, FaRegMessage } from 'react-icons/fa6';

const Connectwithme: React.FC = (): JSX.Element => {
    //const { name, setName } = useName()
    const { email, setEmail } = useEmail();
    const { message, setMessage } = useMessage();

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleInput = () => {
        const el = textareaRef.current;
        if (el) {
            el.style.height = '40px';
            el.style.height = `${el.scrollHeight}px`; // Set height to fit content
        }
    };

    const clearFields = () => {
        setEmail(''), setMessage('');
    };

    const handleMessage = async () => {
        if (email == '' || message == '') {
            sweetalert();
            return;
        }
        try {
            const res = await axios.post('http://localhost:8000/api/sendmessage', { email, message });
            console.log(res.data.Success);
            res.data.Success ? clearFields() : null;
        } catch (error) {
            console.log('Error occured while sending message', error);
        }
    };

    return (
        <div
            className={` ${Bricolage} lg:h-[420px] lg:w-[750px] h-[380px] flex flex-col items-start lg:ml-100 p-4`}
        >
            <div
                className={`${Bricolage} lg:mb-5 mb-2 mx-auto lg:text-[34px] text-[24px] font-semibold `}
            >
                Connect with me
            </div>


            <div className='flex mb-1 justify-start gap-x-[8px] p-1 h-[50px] w-full'>
                <button className='h-[38px] bg-emerald-400 text-[12px] p-[2px] rounded-[6px] w-[145px] flex justify-center items-center cursor-pointer'>
                    <FaRegMessage className='text-center mr-[5px]'/>
                    Schedule a Meeting</button>

                <button className='h-[38px] text-[12px] p-[2px] bg-blue-400 rounded-[6px] w-[120px] flex justify-center items-center cursor-pointer'>
                    <FaXTwitter className='text-center mr-[4px] '/>
                    Chat on Twitter</button>
            </div>

            <div className="p-[2px] font-normal font-stretch-ultra-condensed lg:text-[16px] text-[14px] ">
                Email{' '}
            </div>
            <input
                type="text"
                placeholder="abdullahmukri25@gmail.com"
                required={true}
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
                className="border-black focus:outline-none dark:border-white bg-white dark:bg-black lg:text-[15px] text-[12px] p-2 mb-[12px] lg:border-[2px] border-1 lg:h-[36px] h-[32px] lg:w-[705px] w-[325px] rounded-[4px]"
            />
            <div className="p-[2px] font-normal lg:text-[16px] text-[14px]">Message</div>
            <textarea
                onInput={handleInput}
                ref={textareaRef}
                placeholder="Hey, I have this cool idea, could you help me build it ?"
                required={true}
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}
                className="border-black focus:outline-none dark:border-white bg-white dark:bg-black lg:text-[15px] text-[12px] lg:mb-[20px] mb-[15px] p-2 lg:border-[2px] border-1 overflow-hidden
                min-h-[72px] h-[72px] max-h-[150px]   
                lg:min-w-[705px] lg:w-[705px] lg:max-w-[705px] 
                min-w-[325px] w-[325px] max-w-[325px] resize rounded-[4px]"
            />
            <button
                className="border-black bg-black dark:bg-white dark:border-white lg:text-[14px] text-[12px] text-white dark:text-black border-2 h-9 lg:w-[705px] w-[325px] rounded-[4px] mt-1 cursor-pointer hover:bg-stone-900 dark:hover:bg-gray-100"
                onClick={handleMessage}
            >
                Send Message
            </button>
        </div>
    );
};

export default Connectwithme;
