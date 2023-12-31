import React from 'react'
import company1 from '/src/assets/company1.svg'
import company2 from '/src/assets/company2.svg'
import company3 from '/src/assets/company3.svg'
import company4 from '/src/assets/company4.svg'
import company5 from '/src/assets/company5.svg'
import company6 from '/src/assets/company6.svg'
const Service = () => {
    const service = [
        {
            id: 1,
            title: "Membership Organisations",
            description: "Our membership management software provides full automation of membership renewals and payments",
            image: "/src/assets/member.svg"
        },
        {
            id: 2,
            title: "National Associations",
            description: "Our membership management software provides full automation of membership renewals and payments",
            image: "/src/assets/associations.svg"
        },
        {
            id: 3,
            title: "Clubs And Groups",
            description: "Our membership management software provides full automation of membership renewals and payments",
            image: "/src/assets/clubs.svg"
        },
    ]
    
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGrey '>We have been working with some Fortune 500+ clients</p>

        {/* Company logo */}
        <div className='fmy-12 flex flex-wrap justify-between items-center gap-8 my-8'>
            <img src={company1} alt="" />
            <img src={company2} alt="" />
            <img src={company3} alt="" />
            <img src={company4} alt="" />
            <img src={company5} alt="" />
            <img src={company6} alt="" />
        </div>
      </div>
      {/* service cart */}
      <div>
      <div className='mt-20 md:w-1/2 mx-auto text-center '>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Manage your entire community in a single system</h2>
                <p className='text-neutralGrey'>Who is Nextcent suitable for?
                </p>
            </div>
      </div>

      {/* cart */}

      <div className='mt-14 grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1  md:w-11/12 mx-auto gap-12'>
                {
                    service.map((service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80  rounded-md shadow cursor-pointer 
                    hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all flex items-center justify-center 
                    h-full'>
                        <div>
                            <div style={{ backgroundColor: 'rgba(255, 51, 51, 0.31)' }} className=' mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img
                             src={service.image} alt="" className='-ml-5 h-10 w-10' /></div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralDGrey'>{service.description}</p>
                        </div>
                    </div>))
                }
            </div>
    </div>
  )
}

export default Service
