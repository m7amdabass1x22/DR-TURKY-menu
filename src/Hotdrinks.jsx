import React from 'react'
import tea from './assets/tea.jpg'
import coffe from './assets/coffe.jpg'
import greentea from './assets/pexels-filmy-kashif-2157365380-36028821.jpg'
import yansoon from './assets/yansoon.jfif'
import flatwhite from './assets/flat white.jpg'
import espreso from './assets/espreso.jpg'
import Roselle from './assets/Roselle.jfif'

export default function Hotdrinks() {
    return (
        <div className='w-full flex justify-center bg-amber-950 '>
            <div className='container  bg-amber-950 mt-20 text-center'>
                <h1 className='text-3xl md:text-5xl font-arabic text-yellow-200'>꧁༺ مشروبات الساخنه ༺꧂</h1>
                <div className='w-full grid-cols-1  place-items-center  grid md:grid-cols-3 gap-10 mt-20 '>
                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96  shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={tea}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center">
                            <h1 className='text-3xl font-arabic'>Red Tea -شاي احمر</h1>
                            <p className='font-arabic text-2xl'> 10 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96  shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={coffe}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center">
                            <h1 className='text-3xl font-arabic'>Turkish coffee-قهوه تركي</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>


                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96  shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={greentea}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-3xl font-arabic'>Green Tea-شاي اخضر</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>


                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96  shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={yansoon}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-3xl font-arabic'>Anise-يانسون</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96 shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={flatwhite}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-3xl font-arabic'>Flat white
                                -فلات وايت</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96 shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={espreso}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-3xl font-arabic'>Espresso
                                -قهوة إسبريسو</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

<div className="card text-amber-950 border-2 border-black w-90 md:w-96 shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={Roselle}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-3xl font-arabic'>Roselle
                                -كركديه</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}
