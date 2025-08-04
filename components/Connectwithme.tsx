'use client';

import { useRef } from 'react';
import { JSX } from 'react';
import { Bricolage } from '@/utils/fonts';
import { useEmail, useMessage, useSendMessage } from '@/store/Connectwithme';
import axios from 'axios';
import { FaXTwitter } from 'react-icons/fa6';
import { GrSchedules } from 'react-icons/gr';
import { toast } from 'sonner';

const Connectwithme: React.FC = (): JSX.Element => {
  //const { name, setName } = useName()
  const { email, setEmail } = useEmail();
  const { message, setMessage } = useMessage();
  const { sendMessage, setSendMessage } = useSendMessage();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = '40px';
      el.style.height = `${el.scrollHeight}px`; // Set height to fit content
    }
  };

  const handleMessageSuccess = () => {
    toast.success('Your message has been sent');
    setEmail('');
    setMessage('');
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
      toast.error('Enter a valid email address');
      return;
    }

    try {
      setSendMessage(true);
      const res = await axios.post(
        'https://portfolio-backend-ten-ebon.vercel.app/api/sendmessage',
        { email, message }
      );
      console.log(res.data.Success);
      if (res.data.Success) {
        setSendMessage(false);
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
      className={` ${Bricolage} flex h-[380px] flex-col items-start p-4 lg:ml-100 lg:h-[460px] lg:w-[750px]`}
    >
      <div className={`mx-auto mb-2 text-[20px] font-semibold lg:mb-5 lg:text-[30px]`}>
        Connect with me
      </div>

      <div className="mb-1 flex h-[40px] w-full justify-start gap-x-[8px] p-1 lg:h-[50px] lg:gap-x-[12px]">
        <button
          className="flex h-[28px] w-[130px] cursor-pointer items-center justify-center rounded-[4px] bg-emerald-400 p-[2px] text-[10px] font-medium text-black/80 hover:bg-emerald-400/90 lg:h-[38px] lg:w-[175px] lg:rounded-[6px] lg:text-[14px] dark:text-black/80"
          onClick={() =>
            window.open('https://cal.com/abdullah23/15min?overlayCalendar=true', '_blank')
          }
        >
          <GrSchedules className="mr-[5px] text-center text-[16px] lg:text-[18px]" />
          Schedule a Meeting
        </button>

        <button
          className="flex h-[28px] w-[114px] cursor-pointer items-center justify-center rounded-[4px] bg-blue-400 p-[2px] text-[10px] font-medium text-white/90 hover:bg-blue-400/95 lg:h-[38px] lg:w-[140px] lg:rounded-[6px] lg:text-[14px] dark:text-white/80"
          onClick={() =>
            window.open(
              'https://twitter.com/messages/compose?recipient_id=abdullah_twt23',
              '_black'
            )
          }
        >
          <FaXTwitter className="mr-[4px] text-center text-[16px] lg:text-[18px]" />
          Chat on Twitter
        </button>
      </div>

      <div className="p-[2px] text-[14px] font-stretch-ultra-condensed lg:pb-[8px] lg:text-[16px]">
        Email
      </div>
      <input
        type="text"
        placeholder="xyz@gmail.com"
        required={true}
        onChange={(e) => setEmail(e.currentTarget.value)}
        value={email}
        className="mb-[12px] h-[32px] w-[325px] rounded-[5px] border-1 border-neutral-300 bg-white p-2 text-[12px] focus:outline-none lg:h-[38px] lg:w-[705px] lg:border-[1px] lg:text-[15px] dark:border-neutral-600 dark:bg-black"
      />
      <div className="p-[2px] text-[14px] font-normal lg:pb-[8px] lg:text-[16px]">Message</div>
      <textarea
        onInput={handleInput}
        ref={textareaRef}
        placeholder="Hey, I have this cool idea, could you help me build it ?"
        required={true}
        onChange={(e) => setMessage(e.currentTarget.value)}
        value={message}
        className="mb-[15px] h-[72px] max-h-[115px] min-h-[72px] w-[325px] max-w-[325px] min-w-[325px] resize overflow-hidden rounded-[4px] border-1 border-neutral-300 bg-white p-2 text-[12px] focus:outline-none lg:mb-[20px] lg:max-h-[130px] lg:w-[705px] lg:max-w-[705px] lg:min-w-[705px] lg:border-[1px] lg:text-[15px] dark:border-neutral-600 dark:bg-black"
      />
      <button
        className="mt-1 h-9 w-[325px] cursor-pointer rounded-[4px] border-2 border-black bg-black text-[12px] tracking-wide text-white hover:bg-stone-900 lg:w-[705px] lg:text-[14px] dark:border-white dark:bg-white dark:text-black dark:hover:bg-gray-100"
        onClick={handleMessage}
        disabled={sendMessage}
      >
        {sendMessage ? 'Sending...' : 'Send Message'}
      </button>
    </div>
  );
};

export default Connectwithme;
