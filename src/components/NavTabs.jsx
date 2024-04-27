import React, { useState } from 'react';
import constructionimg from '../assets/images/png/building.png';
import companyimg from '../assets/images/png/company.webp';
import koinerimg from '../assets/images/png/koiner-img.webp';
import lemonimg from '../assets/images/png/lemon-wares.png';
import schoolsharpimg from '../assets/images/png/school-sharp.png';
import dinoimg from '../assets/images/png/dino-lfg.png';
import peptekimg from '../assets/images/png/peptek.png';
import nobelimg from '../assets/images/png/nobel-img.png';
import nexaiimg from '../assets/images/png/nexai-img.png';
import furnitureimg from '../assets/images/png/furniture-img.png';
import clooppimg from '../assets/images/png/cloopp.png';
import separateimg from '../assets/images/png/seprate.png';
import nextimg from '../assets/images/png/next-img.png';
import reactimg from '../assets/images/png/react-img.png';
import viteimg from '../assets/images/png/vite-img.png';
import swiperimg from '../assets/images/png/swiper-img.png';
import slickimg from '../assets/images/png/slick-img.png';
import projectimg from '../assets/images/png/project-img.png';
import todoimg from '../assets/images/png/todoimg.png';
import nobelmind from '../assets/images/png/nobel-mind.png';
import miniminears from '../assets/images/png/mini-miners.png';
import fig from '../assets/images/png/8fig.png';
import kavaup from '../assets/images/png/kavaup.png';



const NavTabs = () => {
    const [opentab, setOpentab] = useState(1)
    return (
        <div className='bg-violet-200 '>
            <div className='container mx-auto lg:px-3 px-6 pt-[50px] pb-[50px]'>
                <h2 className='text-[60px] font-bold text-black text-center mb-[80px]'>Monthly-projects</h2>
                <ul className='flex justify-center items-center gap-[40px] mb-[50px]'>
                    <li><a href='' onClick={(e) => { e.preventDefault(); setOpentab(1) }} className='font-semibold text-[24px] px-[30px] py-[15px] bg-[#000] text-[#fff] rounded-[50px] border-solid border-[2px] border-[#000] hover:bg-transparent hover:text-[#000] transition-all duration-300 ease-linear'>January</a></li>
                    <li><a href='' onClick={(e) => { e.preventDefault(); setOpentab(2) }} className='font-semibold text-[24px] px-[30px] py-[15px] bg-[#000] text-[#fff] rounded-[50px] border-solid border-[2px] border-[#000] hover:bg-transparent hover:text-[#000] transition-all duration-300 ease-linear'>February</a></li>
                    <li><a href='' onClick={(e) => { e.preventDefault(); setOpentab(3) }} className='font-semibold text-[24px] px-[30px] py-[15px] bg-[#000] text-[#fff] rounded-[50px] border-solid border-[2px] border-[#000] hover:bg-transparent hover:text-[#000] transition-all duration-300 ease-linear'>March</a></li>
                    <li><a href='' onClick={(e) => { e.preventDefault(); setOpentab(4) }} className='font-semibold text-[24px] px-[30px] py-[15px] bg-[#000] text-[#fff] rounded-[50px] border-solid border-[2px] border-[#000] hover:bg-transparent hover:text-[#000] transition-all duration-300 ease-linear'>April</a></li>
                </ul>
                <div className={opentab === 1 ? "block" : "hidden"}>
                    <div className='w-full border-solid border-[1px] border-[#000] px-[30px] max-w-[1164px] mx-auto py-[50px]'>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>1.</p>
                                <img src={constructionimg} alt="constructionimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/construction-building' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/construction-building</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://construction-building02.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://construction-building02.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>2.</p>
                                <img src={companyimg} alt="companyimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/agencydigital' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/agencydigital</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://company-project21.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://company-project21.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>3.</p>
                                <img src={koinerimg} alt="koinerimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/khushi303/koiner' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/khushi303/koiner</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://koiner-001.web.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://koiner-001.web.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>4.</p>
                                <img src={lemonimg} alt="lemonimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/lemonwares' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/lemonwares</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://lemon-wares.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://lemon-wares.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>5.</p>
                                <img src={schoolsharpimg} alt="lemonimg" schoolsharpimg='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/schoolsharp' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/schoolsharp</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://school-sharp01.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://school-sharp01.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={opentab === 2 ? "block" : "hidden"}>
                    <div className='w-full border-solid border-[1px] border-[#000] px-[30px] max-w-[1164px] mx-auto py-[50px]'>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>1.</p>
                                <img src={dinoimg} alt="dinoimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/denolfg' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/denolfg</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://dino-lfg.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://dino-lfg.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>2.</p>
                                <img src={peptekimg} alt="peptekimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/peptek' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/peptek</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://peptek.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://peptek.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>3.</p>
                                <img src={nobelimg} alt="nobelimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/testproject' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/testproject</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://nobel-mind.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://nobel-mind.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>4.</p>
                                <img src={nexaiimg} alt="nexaiimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/testproject' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/testproject</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://nexai02.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://nexai02.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={opentab === 3 ? "block" : "hidden"}>
                    <div className='w-full border-solid border-[1px] border-[#000] px-[30px] max-w-[1164px] mx-auto rounded-[15px] py-[50px]'>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>1.</p>
                                <img src={furnitureimg} alt="furnitureimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/Furniture' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/Furniture</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://furniture-02.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://furniture-02.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>2.</p>
                                <img src={clooppimg} alt="clooppimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/cloopp' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/cloopp</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://cloopp.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://cloopp.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>3.</p>
                                <img src={separateimg} alt="separateimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/livetest' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/livetest</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://marc-joachim-hubrich.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://marc-joachim-hubrich.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>4.</p>
                                <img src={reactimg} alt="reactimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/somereact-topics' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/somereact-topics</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://somereact-topics.vercel.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://somereact-topics.vercel.app/</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>5.</p>
                                <img src={viteimg} alt="viteimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/html-vite' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/html-vite</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://html-vite-blue.vercel.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://html-vite-blue.vercel.app/</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>6.</p>
                                <img src={swiperimg} alt="swiperimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/swiper-slider-in-html' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/swiper-slider-in-html</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://swiper-slider-in-html.vercel.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://swiper-slider-in-html.vercel.app/</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>7.</p>
                                <img src={slickimg} alt="slickimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/slick-slider-in-html' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/slick-slider-in-html</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://slick-slider-in-html.vercel.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://slick-slider-in-html.vercel.app/</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>8.</p>
                                <img src={nextimg} alt="nextimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/next-routing' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/next-routing</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://next-routing-lovat.vercel.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://next-routing-lovat.vercel.app/</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>9.</p>
                                <img src={projectimg} alt="projectimg" className='w-full rounded-[20px] border-solid border-[1px] border-[#000] ' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/monthly-projects' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/monthly-projects</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://monthly-projects.vercel.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://monthly-projects.vercel.app/</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>10.</p>
                                <img src={todoimg} alt="todoimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/todo-app' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/todo-app</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://todo-app-delta-ruddy-16.vercel.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://todo-app-delta-ruddy-16.vercel.app/</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={opentab === 4 ? "block" : "hidden"}>
                    <div className='w-full border-solid border-[1px] border-[#000] px-[30px] max-w-[1164px] mx-auto rounded-[15px] py-[50px]'>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>1.</p>
                                <img src={nobelmind} alt="nobelmind" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/nobel-mind2' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/nobel-mind2</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://nobel-mind2.vercel.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://nobel-mind2.vercel.app/</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>2.</p>
                                <img src={miniminears} alt="miniminears" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/Sakshi-Pareek/mini-miners.git' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/Sakshi-Pareek/mini-miners.git</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://mini-miners.netlify.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://mini-miners.netlify.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>3.</p>
                                <img src={reactimg} alt="reactimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/somereact-topics' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/somereact-topics</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://somereact-topics.vercel.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://somereact-topics.vercel.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>4.</p>
                                <img src={fig} alt="reactimg" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/8fig' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/8fig</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://8fig-eosin.vercel.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://8fig-eosin.vercel.app/</a>
                                </div>
                            </div>

                        </div>
                        <div className='flex-row flex flex-wrap items-center justify-between mb-[40px]'>
                            <div className='w-[35%] flex gap-[16px]'>
                                <p className='text-black font-semibold text-[30px]'>5.</p>
                                <img src={kavaup} alt="kavaup" className='w-full rounded-[20px]' />
                            </div>
                            <div className='w-[55%]'>
                                <div className='mb-[18px]'>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Github-link :</p>
                                    <a href='https://github.com/alkachhirang/kavaup' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://github.com/alkachhirang/kavaup</a>
                                </div>
                                <div>
                                    <p className='text-black font-semibold text-[24px] mb-[10px]'>Live-link :</p>
                                    <a href='https://kavaup-nu.vercel.app/' target='blank' className='text-black font-medium text-[18px] hover:text-sky-500 transition-all ease-linear duration-300'>https://kavaup-nu.vercel.app/</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTabs;
