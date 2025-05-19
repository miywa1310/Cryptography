import React from 'react'
import HomeBg from '../images/HomeBg.webp'
import iconHome from '../images/iconHome.png'
import Methods from '../components/Methods'

const Home = () => {
    return (
        <div className="">
            <div style={{ backgroundImage: `url(${HomeBg})`, backgroundSize: 'cover' }}
                className=" w-full max-h-max px-[10%] pb-[5%] flex flex-col gap-[150px] items-center">
                <div className="flex justify-between items-center gap-[70px] text-white w-[100%]">
                    <div className="flex-1">
                        <h1 className='text-[60px]'>Kriptografiya </h1>
                        <div className="text-white">
                            <p>Kriptografiya - bul maǵlıwmatlardı jasırın saqlaw hám jetkerip beriw usılı bolıp, onı tek mólsherlengen adamlar ǵana oqiy alatuģın túrge keltiriwdi támiyinleydi. Ol arqalı tekst yaki informaciya shifrlanadı, yaǵnıy jasırın kodqa aylandırıladı. Sonnan keyin tek tiyisli giltke iye bolgan adam gana bul kodti jáne dáslepki halatına qayta tikley aladı.

                                Kriptografiya áyyemnen bar bolıp, burın xatlar yamasa sırlı maǵlıwmatlar dushpan qolına túspewi ushın paydalanılǵan. Házirgi waqıtta bolsa internette qáwipsiz baylanıs ornatıw, parollerdi qorǵaw, bank operaciyaların qáwipsiz orınlaw hám basqa kóplegen tarawlarda qollanıladı. Kriptografiyanıń tiykarģı maqseti - informaciyanı jat kózlerden qorgaw.</p>

                        </div>
                    </div>
                    <div className="flex-1">
                        <img className='text-white ' src={iconHome} alt="" />
                    </div>

                </div>
                <div className="">
                    <div className="">
                        <Methods/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home