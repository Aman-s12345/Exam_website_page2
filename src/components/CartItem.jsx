import React from 'react'

export const CartItem = ({ name, info, image, price, content }) => {

  return (
    <div className='flex flex-col cart '>
      <div className='flex flex-row justify-start relative'>
        <div className='flex flex-col justify-start gap-3 p-4'>
          <div className='flex flex-row gap-4 justify-start'>
            <img src={image} className='card_image'></img>
            <div className='flex flex-col justify-start '>
              <div className='card_heading'>JEE Mains 2023</div>
              <div className='card_para'>National Testing Agency</div>
            </div>
          </div>

          <div className='flex flex-row gap-4 justify-start'>
            <img src="../calander.png" className='card_image_1'></img>
            <div className='card_heading_1'>Exam Date: 23 March, 2023 </div>
          </div>
          <div className='flex flex-row gap-4 justify-start'>
            <img src="../sec_one.png" className='card_image_1'></img>
            <div className='card_heading_1'>Applicants: 20 Lakh+ </div>
          </div>
        </div>
         
        <div className='flex gap-2 absolute top-4 right-6'>
          <img src='../bookmark.png' className='card_img'></img>
          <img src='../share.png' className='card_img'></img>
        </div>
      </div>

      <div className='flex items-center justify-center w-full'>
             <div className='card_border'></div>
       </div>

      <div className='flex flex-row w-full justify-center items-center pt-5'>
        <div className='flex flex-row w-[480px] justify-between'>
        <div className='card_par'>
        Posted 50 days ago, ends on 31 Dec
        </div>
        <div className='card_botton_1'>
        <div className='card_botton'>
                Apply now
        </div>
        </div>

        </div>
        
        

      </div>


    </div>

  )
}

