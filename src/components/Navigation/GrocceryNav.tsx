import React from 'react';
import Link from 'next/link';

const GrocceryNav = () => {
  return (
    <div className="hidden lg:block">
        <div className="border-b border-gray-200 py-2">
        <div className="container">
        
            <div className="flex w-fit gap-10 mx-auto font-medium py-2 text-dark">


             <Link className="groccery_nav relative" href="#">
             Homes
             </Link>

             <Link className="groccery_nav relative" href="#">
             link1
             </Link>

             <Link className="groccery_nav relative" href="#">
             link2
             </Link>

             <Link className="groccery_nav relative" href="#">
             link3
             </Link>

             <Link className="groccery_nav relative" href="#">
             link4
             </Link>

             <Link className="groccery_nav relative" href="#">
             link56
             </Link>
            </div>
        </div>
        </div>
     
    </div>
  )
}

export default GrocceryNav;
