import React from 'react'
import { useNavigate } from 'react-router-dom';

const Methods = () => {
    const navigate = useNavigate();
    const methods = [
        
        {
          name: 'Cezar shifrlaw usılı (qaraqalpaqsha)',
          description: 'Cezar shifrlaw algoritmi - bul áyyemgi simmetriyalı giltli shifrlaw usılı bolip, háriplerdi álipbede belgili sandaģi poziciyaģa jilistiradi. Mısalı, gilt 3 bolsa, "A" háribi "D" ge, "B" bolsa "F" ge aylanadı.',
          path: '/cezar',
        },
        {
          name: 'Vijiner shifrlaw usılı(qaraqalpaqsha)',
          description: 'Vijiner shifrlaw algoritmi - bul tekstti gilt sóz járdeminde háripler tiykarında shifrlawshı polialfavitli algoritm. Vijiner algoritmi Cezar shifrlawga qaraganda kúshlirek bolip esaplanadı.',
          path: '/vijiner',
        },
        {
          name: 'Affin shifrlaw usılı(qaraqalpaqsha)',
          description: 'Affin shifrlaw usılı - bul klassikalıq simmetriyalıq giltli shifrlaw usıllarınan biri bolip, hárbir háripti matematikalıq formula tiykarında basqa háripke almastıradı. Bul usıl Cezar shifrinan quramalıraq.',
          path: '/kvadrat',
        },
      ];
    return (
        
            <div className=" text-white  flex items-center justify-center relative overflow-hidden">
              {/* Matrix-style background effect imitation */}
              <div className="absolute inset-0 bg-[url('/matrix-bg.gif')] bg-cover bg-center opacity-10 z-0" />
        
              <div className="z-10 w-full">
                <h1 className="text-3xl font-semibold text-center mb-10">Kriptografiyaliq usıllar</h1>
        
                <div className="flex  gap-6 ">
                  {methods.map((method, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-6 items-center  border border-blue-500 rounded px-4 py-3  hover:bg-blue-600 transition duration-300"
                    >
                      <h1 className='text-2xl font-semibold text-center'>{method.name}</h1>
                      <p className="text-md text-left text-white ml-6 max-w-md">
                        {method.description}
                      </p>
                      <input
                        type="button"
                        value="Shifrlaw"
                        onClick={() => navigate(method.path)}
                        className="w-[200px] text-white border border-blue-400 hover:bg-white hover:text-blue-800  font-semibold py-2 px-4 rounded cursor-pointer transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
    )
}

export default Methods