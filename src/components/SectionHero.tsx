import { Container } from "./Container";
import Image from "next/image";
import ImgAppleStore from '@/assets/btn-apple-store.svg';
import ImgGooglePlay from '@/assets/btn-google-play.svg'
import Arrow from '@/assets/arrow-explorer.svg';
import WomanImg from '@/assets/woman.png'
export function SectionHero() {
    return (
        <section className="w-full h-[704px] bg-img_bg_hero
     bg-no-repeat bg-center bg-cover">

            <Container >
                <div className="flex-1 max-w-[550px]">
                    <h1 className="text-white font-bold text-7xl mb-4">Tenha seu banco na palma da mão.</h1>
                    <p className="text-white text-xl max-w-[408px] mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum ut repellendus dolorem neque quia amet.</p>

                    <div className="flex gap-4 mb-24">
                        <button>
                            <Image
                                src={ImgAppleStore}
                                alt="Apple Store" />
                        </button>

                        <button>
                            <Image
                                src={ImgGooglePlay}
                                alt="Google Store" />
                        </button>
                    </div>
                    <button className="flex items-center gap-3">
                        <Image
                            src={Arrow}
                            alt="arrow" />
                        <span className="text-white text-sm font-bold">
                            Continue explorando
                        </span>
                    </button>
                </div>

                <Image src={WomanImg} alt='Mulher ' className="mr-[-41px]"/>
            </Container>
        </section>
    )
}