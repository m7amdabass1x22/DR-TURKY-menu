import React from 'react'
import manga from './assets/mango.jpg'
import anab from './assets/anab.jpg'
import icecofee from './assets/ice cofee.jpg'
import milkshake from './assets/milkshake.jpg'
import smoothy from './assets/smoothy.jpg'
import Yogurt from './assets/yougadt with orio.jfif'

export default function Colddrinks() {
  return (
    
     <div className='w-full flex justify-center bg-amber-950 '>
            <div className='container  bg-amber-950 mt-20 text-center'>
                <h1 className='text-3xl md:text-5xl font-arabic text-yellow-200'>꧁༺ مشروبات بارده ༺꧂</h1>
                <div className='w-full grid-cols-1  place-items-center  grid md:grid-cols-3 gap-10 mt-20 '>
                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96  shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={manga}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center">
                            <h1 className='text-3xl font-arabic'>Mango juice
 -عصير مانجو</h1>
                            <p className='font-arabic text-2xl'> 10 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96  shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={Yogurt}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center">
                            <h1 className='text-3xl font-arabic'> Oreo Yogurt Shake- زبادي بالاوريو</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>


                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96  shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={anab}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-3xl font-arabic'>Jujube juice
-عصير عناب</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>


                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96  shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={icecofee}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-3xl font-arabic'>icecofee-ايس كوفي</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96 shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={milkshake}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-3xl font-arabic'>Milk shake
                                -ميلك شيك</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-90 md:w-96 shadow-sm flex flex-col gap-3 h-130 bg-yellow-200">
                        <figure>
                            <img className='h-100 w-full'
                                src={smoothy}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-3xl font-arabic'>Smoothie
                                -سموذي</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>


                </div>



            </div>

        </div>
  )
}
