'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { Link2 } from 'lucide-react'
function Hero(){
    return (
    <section className="bg-gray-50 flex items-center flex-col">
    <div className="flex flex-col overflow-hidden">
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
           Manage your Money with AI-Driven Personal<br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-800">
             Finance Tracker
            </span>
          </h1>
        </>
      }
    >
      <Image
        src={`/dashboard.png`}
        alt="hero"
        height={720}
        width={1400}
        className="mx-auto rounded-2xl object-cover h-full object-left-top"
        draggable={false}
      />
    </ContainerScroll>
    
  </div>
  <h3 className="text-4xl font-bold">How we help you </h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image src="/feature1.png" alt="Feature 1" width={150} height={150} />
          <h2 className="text-2xl font-bold mt-4">Track Your Expenses</h2>
          <p className="text-gray-600 mt-2 text-center">
            Easily track your daily, weekly, and monthly expenses. Our AI helps categorize and analyze your spending.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image src="/feature2.png" alt="Feature 2" width={150} height={150} />
          <h2 className="text-2xl font-bold mt-4">Budget Management</h2>
          <p className="text-gray-600 mt-2 text-center">
            Set and manage your budgets effortlessly. Get AI-driven insights to optimize your financial plans.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image src="/feature3.png" alt="Feature 3" width={150} height={150} />
          <h2 className="text-2xl font-bold mt-4">Personalized Advice</h2>
          <p className="text-gray-600 mt-2 text-center">
            Receive personalized financial advice based on your income, spending, and savings goals.
          </p>
        </div>
      </div>

      <footer className="bg-gray-200 w-full py-6 flex flex-col items-center">
        <div className="flex flex-row items-center justify-between w-full max-w-6xl px-4">
          <div className="flex items-center">
            
            <span className="text-blue-800 font-bold text-xl ml-2">FinSmart</span>
          </div>
          <div className="flex gap-4">
            <Link href="/#" className="text-gray-600">Privacy Policy</Link>
            <Link href="/#" className="text-gray-600">Terms of Service</Link>
          </div>
        </div>
        <div className="text-gray-600 mt-4">
          &copy; {new Date().getFullYear()} FinSmart. All rights reserved.
        </div>
      </footer>

 </section>
    )
}

export default Hero