import Image from "next/image";

import { Search } from "./Search";

import Logo from '@/assets/logo.svg';
import { ItemMenu } from "./ItemMenu";
import IconUser from '@/assets/icon-user.svg'
import { Container } from "./Container";


export function Header() {
    return (
        <header className="flex items-center w-full h-20 bg-primary-orange ">

            <Container>
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image
                            src={Logo}
                            alt="Logo"

                        />

                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenu
                                    name="Para você"
                                />
                            </li>

                            <li>
                                <ItemMenu
                                    name="Para empresas"
                                />
                            </li>

                            <li>
                                <ItemMenu
                                    name="Para Serviços"
                                />
                            </li>

                            <li>
                                <ItemMenu
                                    name="Ajuda"
                                />
                            </li>

                            <Search />

                        </ul>
                    </div>


                </div>
                <div className=" bg-primary-color h-30">
                    <button className="flex items-center gap-4 bg-primary-color w-80 h-20 pl-10">
                        <Image src={IconUser} alt="Ícone de usuário" />
                        <span className="text-white font-bold">
                            Acessar conta
                        </span>
                    </button>
                </div>
            </Container>
        </header>
    )

}