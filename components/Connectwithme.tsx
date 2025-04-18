import { JSX } from "react";
import { Bricolage } from "@/utils/fonts";

const Connectwithme: React.FC = (): JSX.Element => {
    const handleMessage = async ({}) => { 
        await prisma.users.createMany({
            data: {name: 'test', email: 'test@gmail.com', message: 'testing' }
        }) 
    }

    return (
        <div className={` ${Bricolage} h-[250px] w-72 flex flex-col items-start gap-4 ml-96 p-4`}>
            <input type="text" placeholder="Name" required={true} 
                className="border-black dark:border-white bg-white dark:bg-black p-2 border-2 h-[35px] rounded-[4px]" />
            <input type="text" placeholder="Email" required={true}
                className="border-black dark:border-white bg-white dark:bg-black p-2 border-2 h-[35px] w-[400px] rounded-[4px]" />
            <input type="text" placeholder="Message" required={true}
                className="border-black dark:border-white bg-white dark:bg-black p-2 border-2 h-[35px] w-[400px] rounded-[4px]" />
                <button
                className='border-black border-2 h-10 w-18'
                 onClick={handleMessage}> SEND</button>
        </div>
    )
}

export default Connectwithme