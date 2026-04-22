import React from 'react'
import manga from './assets/cold/Mango juice.jpg'
import anab from './assets/cold/Jujube juice.jpg'
import icecofee from './assets/cold/ice cofee.jpg'
import Yogurt from './assets/cold/milkshake oreo.jpg'
import lemon from './assets/cold/Lemon juice.jpg'
import lemon_mint from './assets/cold/Lemon and mint juice.jpg'
import smoothymango from './assets/cold/Mango smoothie.jpg'
import milkshakechocolate from './assets/cold/Chocolate milkshake.jpg'
import smoothystrobry from './assets/cold/Strawberry smoothie.jpg'
import smoothieGuava from './assets/cold/Guava smoothie.jpg'
import smoothielemon from './assets/cold/smoothielemon.jpg'
import vanilla from './assets/cold/Vanilla milkshake.jpg'
import cola from './assets/cold/cocacola.jpg'
import Sprite from './assets/cold/sprite.jpg'
import Mirinda from './assets/cold/mernda.jpg'
import schweppes from './assets/cold/Schweppes.jpg'
import vcola1 from './assets/cold/v7cola.jpg'
import redbull from './assets/cold/redbullg.jpg'
import monster from './assets/cold/monesterd.jpg'


export default function Colddrinks() {
    return (

        <div className='w-full flex justify-center bg-amber-950 '>
            <div className='container  bg-amber-950 mt-20 text-center'>
                <h1 className='text-2xl md:text-5xl font-arabic text-yellow-200'>꧁༺ مشروبات بارده ༺꧂</h1>
                <div className='w-full grid-cols-1  place-items-center  grid md:grid-cols-2   lg:grid-cols-3 gap-10 mt-20 '>
                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96  shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={manga}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center">
                            <h1 className='text-2xl font-arabic'>Mango juice
                                -عصير مانجو</h1>
                            <p className='font-arabic text-2xl'> 10 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96  shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={Yogurt}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center">
                            <h1 className='text-2xl font-arabic'> milkshake oreo- ميلك تشيك اوريو</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>


                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96  shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={anab}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Jujube juice
                                -عصير عناب</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>


                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96  shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={icecofee}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>icecofee-ايس كوفي</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={milkshakechocolate}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Chocolate milkshake

                                -ميلك شيك شوكولاتة</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={smoothymango}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Mango smoothie

                                -سموذي مانجو</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={lemon}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Lemon juice
                                -عصير ليمون</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>


                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={lemon_mint}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Lemon and mint juice

                                -عصير ليمون بالنعناع</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={smoothystrobry}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Strawberry smoothie

                                -سموذي فروله</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={smoothieGuava}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Guava smoothie

                                -سموذي جوافه</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>

                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={smoothielemon}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Lemon smoothie

                                -سموذي ليمون</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>
                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={vanilla}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Vanilla milkshake


                                -ميلك شيك فانيليا</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>
                    </div>
                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={cola}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Coca-Cola


                                -كولا</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>



                    </div>

                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={Sprite}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Sprite


                                -سبريت</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>



                    </div> <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={Mirinda}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Mirinda


                                -ميراندا</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>



                    </div> <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={schweppes}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Schweppes


                                -شويبس</h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>



                    </div> <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={vcola1}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>V7 Vitamin Pineapple Sparkling


                            </h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>



                    </div>
                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={redbull}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Red Bull Energy Drink


                            </h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>



                    </div>
                    <div className="card text-amber-950 border-2 border-black w-75 md:w-96 shadow-sm flex flex-col gap-3 h-150 bg-yellow-200">
                        <figure>
                            <img className='h-120 w-full'
                                src={monster}
                                alt="Shoes" />
                        </figure>
                        <div className=" text-center flex flex-col gap-2 justify-center items-center ">
                            <h1 className='text-2xl font-arabic'>Monster Energy


                            </h1>
                            <p className='font-arabic text-2xl'> 20 EGP</p>
                        </div>



                    </div>




                </div>



            </div>

        </div>
    )
}
