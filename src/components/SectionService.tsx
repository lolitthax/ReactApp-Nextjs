import Image from "next/image";
import { Container } from "./Container";
import ImagePhone from '@/assets/phone.png';
import { SectionList } from "./SectionList";


export function SectionService() {
    return (
        <section className=" relative w-full h-[965px]">

            <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className=" block text-primary-orange text-sm font-bold uppercase mb-9"> Serviços exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold 
                        leading-tight mb-6">
                         Gerencie suas finanças sem sair de casa!</h2>

                    <p className="text-lg max-w-[554px] mb-16 text-second-gray"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Blanditiis dolores esse animi maiores quisquam, odio soluta
                         error quod officia nesciunt corporis omnis veniam minus eligendi
                          est laborum amet reiciendis quam!</p>


                        <SectionList/>                        
                </div>
            </Container>

            <div className="absolute top-0 right-0 flex items-center w-[32%] h-full
             bg-gray-phone">
                <Image src={ImagePhone} alt="SmartPhone"  className="translate-x-[-50%]"/>
            </div>
        </section>
    )
}