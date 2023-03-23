import React, {useContext} from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from "../../contexts/UserContext";

const DonationForm = () => {
    const {user} = useContext(AuthContext)
    const {name, amount, _id} = useLoaderData();
    
    const handleSubmitForDonation = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const title = form.title.value;
        const amount = form.amount.value;
        const message = form.message.value;

        const details = {
            serviceId: _id,
            giver: name,
            phone,
            email,
            title,
            amount,
            message
        }

        fetch('http://localhost:5000/given', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Your information has been successfully sent!!!')
                form.reset();
            }
        })
        .catch(err => console.error(err))

    }

    return (
        <form onSubmit={handleSubmitForDonation} className='bg-base-300 p-10 text-center'>
            <div className='py-3'>
                <input type="text" placeholder="First Name" name='firstName' className="input input-bordered w-full max-w-sm" required/>
                <input type="text" placeholder="Last Name" name='lastName' className="input input-bordered w-full max-w-sm" required/>
            </div>
            <div>
                <input type="text" placeholder="Your Phone" name='phone' className="input input-bordered w-full max-w-sm" required/>
                <input type="email" defaultValue={user.email} name='email' className="input input-bordered w-full max-w-sm" required readOnly/>
            </div>
            <div className='py-3'>
                <input type="text" defaultValue={name} name='title' className="input input-bordered w-full  max-w-sm" required readOnly/>
                <input type="text" defaultValue={`$${amount}`} name='amount' className="input input-bordered w-full  max-w-sm" required readOnly/>
            </div>
            <div>
                <textarea placeholder="Message" name='message' className="textarea textarea-bordered textarea-lg w-full lg:max-w-lg md:max-w-sm" required></textarea>
            </div>
            <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md my-5">Submit for donation</button>
        </form>
    );
};

export default DonationForm;