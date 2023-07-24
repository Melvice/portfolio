import React from 'react'
// import icons
import { BiHomeAlt, BiUser} from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
// links
import { Link } from 'react-scroll'
// tooltip
import { Tooltip } from 'react-tooltip'


const Nav  = () => {
    return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className="container mx-auto">
            <div className='w-full bg-slate-900/75 h-[96px] backdrop:blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50 slide '>
                <Link 
                    to='home'
                    activeClass='active'
                    smooth = {true}
                    spy = {true}
                    offset={-800}
                    data-tooltip-id="tooltip1" 
                    data-tooltip-content="Home"      
                    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BiHomeAlt/>
                    <Tooltip id="tooltip1"
                        place="right"
                        effect="solid"
                        delayShow={100}
                        delayHide={100}
                        arrowColor="transparent"
                        className='tooltip'
                        backgroundColor="rgba(0, 0, 0, 0.45)"
                        textColor="white"
                    />
                </Link>
                <Link 
                    to='about'
                    activeClass='active'
                    smooth = {true}
                    spy = {true}
                    offset={0}
                    data-tooltip-id="tooltip2" 
                    data-tooltip-content="About"  
                    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BiUser/>
                    <Tooltip id="tooltip2"
                        place="right"
                        effect="solid"
                        delayShow={100}
                        delayHide={100}
                        className='tooltip'
                        arrowColor="transparent"
                        backgroundColor="rgba(0, 0, 0, 0.45)"
                        textColor="white"
                    />
                </Link>
                <Link 
                    to='formation'
                    activeClass='active'
                    smooth = {true}
                    spy = {true}
                    offset={0}
                    data-tooltip-id="tooltip3" 
                    data-tooltip-content="formation"  
                    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BsClipboardData/>
                    <Tooltip id="tooltip3"
                        place="right"
                        effect="solid"
                        delayShow={100}
                        delayHide={100}
                        className='tooltip'
                        arrowColor="transparent"
                        backgroundColor="rgba(0, 0, 0, 0.45)"
                        textColor="white"
                    />
                </Link>
                <Link 
                    to='projects'
                    activeClass='active'
                    smooth = {true}
                    spy = {true}
                    offset={0}
                    data-tooltip-id="tooltip4"
                    data-tooltip-content="Projects"
                    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BsBriefcase/>
                    <Tooltip id="tooltip4"
                        place="right"
                        effect="solid"
                        delayShow={100}
                        delayHide={100}
                        className='tooltip'
                        arrowColor="transparent"
                        backgroundColor="rgba(0, 0, 0, 0.45)"
                        textColor="white"
                    />
                </Link>
                <Link 
                    to='contact'
                    activeClass='active'
                    smooth = {true}
                    spy = {true}
                    offset={0}
                    data-tooltip-id="tooltip5"
                    data-tooltip-content="Contact"
                    className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BsChatSquare/>
                    <Tooltip id="tooltip5"
                        place="right"
                        effect="solid"
                        delayShow={100}
                        delayHide={100}
                        className='tooltip'
                        arrowColor="transparent"
                        textColor="white"
                    />
                </Link>
            </div>
        </div>
    </nav>
    )
}

export default Nav;