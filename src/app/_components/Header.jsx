'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';

function Header() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Redirect to the dashboard if the user is signed in and the current route is sign-in
    if (isSignedIn && router.pathname === '/sign-in') {
      router.replace('/dashboard');
    }
  }, [isSignedIn, router]);

  const handleDashboardClick = () => {
    if (!isSignedIn) {
      router.push('/sign-in?redirect=/dashboard');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <div className="flex flex-row items-center ">
        <Image src={'/chart-donut.svg'} alt="logo" width={40} height={25} />
        <span className="text-blue-800 font-bold text-xl">FinSmart</span>
      </div>

      <div className="flex gap-3 items-center">
        <Button
          variant="outline"
          className="rounded-full"
          onClick={handleDashboardClick}
        >
          Dashboard
        </Button>

        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
            <Button className="rounded-full">
              Get Started
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;

