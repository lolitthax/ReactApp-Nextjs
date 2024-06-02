import Image from "next/image";
import PhoneIcon from '@/assets/icon-phone.svg';
import SoluctionsIcon from '@/assets/icon-solutions.svg';
import OptionsIcon from '@/assets/icon-options.svg';
import CardIcon from '@/assets/icon-card.svg';


export function SectionList(){
    return (
        <ul className="flex flex-col items-start gap-9">
        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
            <div className="w-7 h-7 flex items-center justify-center">
            <Image
            src={PhoneIcon}
            alt="Phone Icon"
            />
            </div>
         
            <p className="flex-1 text-txt-gray pr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>


        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
            <div className="w-7 h-7 flex items-center justify-center">
            <Image
            src={SoluctionsIcon}
            alt="Phone Icon"
            />
            </div>
         
            <p className="flex-1 text-txt-gray pr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>



        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
            <div className="w-7 h-7 flex items-center justify-center">
            <Image
            src={OptionsIcon}
            alt="Phone Icon"
            />
            </div>
         
            <p className="flex-1 text-txt-gray pr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>

        <li className="flex items-center gap-9">
            <div className="w-7 h-7 flex items-center justify-center">
            <Image
            src={CardIcon}
            alt="Phone Icon"
            />
            </div>
         
            <p className="flex-1 text-txt-gray pr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    )
}