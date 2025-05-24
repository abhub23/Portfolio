'use client';

import { useRef } from 'react';
import { JSX } from 'react';
import { Bricolage } from '@/utils/fonts';
import { useEmail, useMessage } from '@/store/Connectwithme';
import axios from 'axios';
import { FaXTwitter } from 'react-icons/fa6';
import { GrSchedules } from 'react-icons/gr';
import { Toaster, toast } from 'sonner';

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

  const handleMessageSuccess = () => {
    setEmail('');
    setMessage('');
    toast.success('Your message has been sent');
  };

  const handleMessageError = () => {
    setEmail('');
    setMessage('');
    toast.error('Error while sending your message');
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleMessage = async () => {
    if (email == '' || message == '') {
      toast.error('Oops! Input fields are missing.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Enter a valid email address')
    }

    try {
      const res = await axios.post('http://localhost:8000/api/sendmessage', { email, message });
      console.log(res.data.Success);
      if (res.data.Success) {
        handleMessageSuccess();
      } else {
        handleMessageError();
      }
    } catch (error) {
      console.log('Error occured while sending message', error);
    }
  };

  return (
    <div
      className={` ${Bricolage} lg:h-[460px] lg:w-[750px] h-[380px] flex flex-col items-start lg:ml-100 p-4`}
    >
      <div
        className={`lg:mb-5 mb-2 mx-auto lg:text-[34px] text-[24px] font-semibold `}
      >
        Connect with me
      </div>

      <div className="flex mb-1 justify-start lg:gap-x-[12px] gap-x-[8px] p-1 lg:h-[50px] h-[40px] w-full">
        <button
          className="lg:h-[38px] h-[30px] bg-emerald-400 hover:bg-emerald-400/90 lg:text-[14px] text-[11px] font-medium p-[2px] lg:rounded-[6px] rounded-[4px] lg:w-[175px] w-[140px] flex text-black/80 dark:text-black/80 justify-center items-center cursor-pointer"
          onClick={() => window.open('https://cal.com/abdullah23/15min?overlayCalendar=true', '_blank')}
        >
          <GrSchedules className="text-center lg:text-[18px] text-[16px] mr-[5px]" />
          Schedule a Meeting
        </button>

        <button
          className="lg:h-[38px] h-[30px] lg:text-[14px] text-[11px] font-medium p-[2px] bg-blue-400 hover:bg-blue-400/95 text-white/90 dark:text-white/80 lg:rounded-[6px] rounded-[4px] lg:w-[140px] w-[120px] flex justify-center items-center cursor-pointer"
          onClick={() => window.open('https://x.com/abdullah_twt23', '_black')}
        >
          <FaXTwitter className="text-center lg:text-[18px] text-[16px] mr-[4px] " />
          Chat on Twitter
        </button>
      </div>

      <div className="lg:pb-[8px] p-[2px] font-stretch-ultra-condensed lg:text-[16px] text-[14px] ">
        Email
      </div>
      <input
        type="text"
        placeholder="abdullahmukri25@gmail.com"
        required={true}
        onChange={(e) => setEmail(e.currentTarget.value)}
        value={email}
        className="border-black focus:outline-none dark:border-white/60 bg-white dark:bg-black lg:text-[15px] text-[12px] p-2 mb-[12px] lg:border-[1px] border-1 lg:h-[38px] h-[32px] lg:w-[705px] w-[325px] rounded-[5px]"
      />
      <div className="lg:pb-[8px] p-[2px] font-normal lg:text-[16px] text-[14px]">Message</div>
      <textarea
        onInput={handleInput}
        ref={textareaRef}
        placeholder="Hey, I have this cool idea, could you help me build it ?"
        required={true}
        onChange={(e) => setMessage(e.currentTarget.value)}
        value={message}
        className="border-black focus:outline-none dark:border-white/60 bg-white dark:bg-black lg:text-[15px] text-[12px] lg:mb-[20px] mb-[15px] p-2 lg:border-[1px] border-1 overflow-hidden
                min-h-[72px] h-[72px] max-h-[115px]   
                lg:min-w-[705px] lg:w-[705px] lg:max-w-[705px] lg:max-h-[130px]
                min-w-[325px] w-[325px] max-w-[325px] resize rounded-[4px]"
      />
      <Toaster position="bottom-right" />
      <button
        className="border-black bg-black dark:bg-white dark:border-white lg:text-[14px] tracking-wide text-[12px] text-white dark:text-black border-2 h-9 lg:w-[705px] w-[325px] rounded-[4px] mt-1 cursor-pointer hover:bg-stone-900 dark:hover:bg-gray-100"
        onClick={handleMessage}
      >
        Send Message
      </button>
    </div>
  );
};

export default Connectwithme;
