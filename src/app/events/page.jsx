"use client"
import React from 'react';
import { Container } from '@/components/Container';
import { FadeInStagger } from '@/components/FadeIn';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import { Tilt } from 'react-tilt'
import car from '../../images/car.png'
import { GlowCapture,Glow } from '@codaworks/react-glow';



function page() {  
        const dummyData = [
            {
              href: '/case-study-1',
              logo: car,
              client: 'Client 1',
              date: '2023-01-01',
              title: 'Case Study 1 Title',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
            },
            {
              href: '/case-study-2',
              logo: car,
              client: 'Client 2',
              date: '2023-02-15',
              title: 'Case Study 2 Title',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
            },
            {
                href: '/case-study-2',
                logo: car,
                client: 'Client 2',
                date: '2023-02-15',
                title: 'Case Study 2 Title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
              },
              {
                href: '/case-study-2',
                logo: car,
                client: 'Client 2',
                date: '2023-02-15',
                title: 'Case Study 2 Title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
              },
              {
                href: '/case-study-2',
                logo: car,
                client: 'Client 2',
                date: '2023-02-15',
                title: 'Case Study 2 Title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
              },
              {
                href: '/case-study-2',
                logo: car,
                client: 'Client 2',
                date: '2023-02-15',
                title: 'Case Study 2 Title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
              },
              {
                href: '/case-study-2',
                logo: car,
                client: 'Client 2',
                date: '2023-02-15',
                title: 'Case Study 2 Title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
              },
              {
                href: '/case-study-2',
                logo: car,
                client: 'Client 2',
                date: '2023-02-15',
                title: 'Case Study 2 Title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
              },
              {
                href: '/case-study-2',
                logo: car,
                client: 'Client 2',
                date: '2023-02-15',
                title: 'Case Study 2 Title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
              },
              {
                href: '/case-study-2',
                logo: car,
                client: 'Client 2',
                date: '2023-02-15',
                title: 'Case Study 2 Title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
              },
    
            // Add more case studies as needed
          ];
          const defaultOptions = {
            reverse:        true,  // reverse the tilt direction
            max:            50,     // max tilt rotation (degrees)
            perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
            scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
            speed:          1000,   // Speed of the enter/exit transition
            transition:     true,   // Set a transition on enter/exit.
            axis:           null,   // What axis should be disabled. Can be X or Y.
            reset:          true,    // If the tilt effect has to be reset on exit.
            easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        }
    
    return (
    <div className='bg-black relative event-bg flex flex-col justify-center items-center'>
      <div class=" mt-26 text-white pt-32 flex justify-center items-center">
        <span className='text-5xl font-bold'>E</span>
        <span className='text-5xl font-bold'>V</span>
        <div class="letter flex justify-center items-center mx-3">
          <hr/>
        </div>
        <span className='text-5xl font-bold'>N</span>
        <span className='text-5xl font-bold'>T</span>
        <span className='text-5xl font-bold'>S</span>
      </div>
      <div>

      <div className='h-screen w-32 flex flex-col items-end fixed top-0 left-0 ' >
          <marquee
            direction="down"
            behavior="scroll"
            scrollamount="10"
            className='h-full'
           
          >
            <h1 className='text-6xl text-white transform -rotate-90 mt-8'>
              <pre>
                EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              </pre>
            </h1>
            {/* Add more events as needed */}
          </marquee>
        </div>
        <Container className="mt-4 glow:text-glow/1 glow:bg-gray-800 glow:r text-black text-sm">
        <FadeInStagger className="grid grid-cols-1  lg:grid-cols-3 p-36 gap-8">
          {dummyData.map((caseStudy) => (
            <div className='relative group' key={caseStudy.href}>
           {/* <div className="hidden bg-gray-700 group-hover:block absolute inset-0 transform z-[-3]" style={{ transform: 'rotate(-4deg)' }}></div>
           <div className="hidden bg-gray-800 group-hover:block absolute inset-0 transform z-[-1]" style={{ transform: 'rotate(-6deg)' }}></div> */}
           <Tilt options={defaultOptions}>
                <FadeIn key={caseStudy.href} className="flex  border-2 rounded-xl bg-gray-950 z-50">
                <article className="relative flex w-full flex-col rounded-3xl p-3 ring-1 ring-neutral-950/5 transition sm:p-8">
                    <h3>
                    <Link href={caseStudy.href}>
                        <span className="absolute inset-0 rounded-3xl" />
                            <Image
                            src={caseStudy.logo}
                            alt={caseStudy.client}
                            className="h-full w-full rounded-t-lg hover:scale shadow-6xl --tw-shadow-color: #fff;"
                            width={10}
                            height={100}
                            unoptimized
                            // style={{
                            //     filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.5))', // Adjust the values as needed
                            //   }}
                            />
                    </Link>
                    </h3>
                    <p className="mt-6 font-display text-xl font-semibold text-white">
                    {caseStudy.title}
                    </p>
                    <p className="mt-4 text-sm text-neutral-300">
                    {caseStudy.description}
                    </p>
                </article>
                </FadeIn>

           </Tilt>
            </div>
          ))}
        </FadeInStagger>
      </Container>
      <div className='h-screen w-32 flex flex-col items-end fixed top-0 right-0'>
        <marquee
          direction="up"
          behavior="scroll"
          scrollamount="20"
          className='h-full'
          loop='infinite'
        >
          <h1 className='text-6xl text-white transform rotate-90 mt-8'>
            <pre>
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
            </pre>
          </h1>
          {/* Add more events as needed */}
        </marquee>
      </div>

      <div>
        
    </div>
      </div>
    </div>
  )
}

export default page