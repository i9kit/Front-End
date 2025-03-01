'use client'
import { useState } from "react"
import Image from 'next/image'
import cn from 'clsx'

interface IProductGallery {
    images: string[]
}

export function ProductGallery({images}: IProductGallery) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div>
            <Image
                src={images[activeIndex]}
                alt=''
                width={500}
                height={500}
                className="roundex-lg overflow-hidden"
                priority
                draggable={false}
            />
            <div
                className="mt-6"
                style={{width: '500px', overflowX: 'auto', whiteSpace:'nowrap'}}
            >
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                            'duration-300 hover:shadow-md mr-5 last:mr-0 border-b-2 border-solid transition-all rounded-lg overflow-hidden inline-block',
                            {
                                'shadow-md border-primary': index === activeIndex,
                                'border-transparent': index !== activeIndex
                            }
                        )}
                    >
                        <Image
                            draggable={false}
                            src={image}
                            alt=''
                            width={70}
                            height={70}
                            priority
                        />
                    </button>
                ))
                }
            </div>
        </div>
    )
}