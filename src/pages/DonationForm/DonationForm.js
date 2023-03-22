import React from 'react';

const DonationForm = () => {
    return (
        <form className='bg-base-300 p-10 text-center'>
            <div className='py-3'>
                <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-sm" required/>
                <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-sm" required/>
            </div>
            <div>
                <input type="text" placeholder="Your Phone" className="input input-bordered w-full max-w-sm" required/>
                <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-sm" required/>
            </div>
            <div className='py-3'>
                <input type="text" placeholder="$ Amount" className="input input-bordered w-full lg:max-w-lg md:max-w-sm" required/>
            </div>
            <div>
                <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full lg:max-w-lg md:max-w-sm" required></textarea>
            </div>
            <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md my-5">Submit for donation</button>
        </form>
    );
};

export default DonationForm;