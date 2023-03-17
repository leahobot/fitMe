import { useState } from "react"
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import logo from '@/assets/Logo.png';
import Link from './Link';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const navbarBg = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

  return (
    <nav>
        <div className={`${navbarBg} ${flexBetween} fixed top-0 z-30 w-full py-5`}>
             <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img src={logo} alt='logo'/>

                    {isAboveMediumScreens ? 
                    <div className={`${flexBetween} w-full `}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page='Home' 
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage}/>
                            <Link page='Benefits' 
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage}/>
                            <Link page='Our Classes' 
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage}/>
                            <Link page='Contact Us' 
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage}/>
                        </div>

                         <div className={`${flexBetween} gap-8`}>
                            <AnchorLink href='#contactus' onClick={() => setSelectedPage(SelectedPage.ContactUs)}>Sign In</AnchorLink>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                    </div> : 
                    <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled((prev) => !prev)}>
                        <Bars3Icon className="text-white w-6 h-6"/>
                    </button>
                    }
                </div>
             </div>
        </div>

        {/* Mobile Menu Modal */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                <div className="flex justify-end">
                    <button onClick={() => setIsMenuToggled(false)}>
                        <XMarkIcon className="text-gray-400 h-6 w-6"/>
                    </button>
                </div>

                <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
                            <Link page='Home' 
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage}/>
                            <Link page='Benefits' 
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage}/>
                            <Link page='Our Classess' 
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage}/>
                            <Link page='Contact Us' 
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage}/>
                        </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar;