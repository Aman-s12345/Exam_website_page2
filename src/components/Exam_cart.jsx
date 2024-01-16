import React from 'react'

export const Exam_cart = ({ name, info, image, price, content }) => {
  return (
    <div className='flex flex-col cart_1 '>
        <div className='flex flex-row justify-start relative'>
          <div className='flex flex-col justify-start gap-3 p-4'>
            <div className='flex flex-row gap-4 justify-start'>
              <img src={image} className='card_image'></img>
              <div className='flex flex-col justify-start '>
                <div className='card_heading'>{name}</div>
                <div className='exam_para'>{info}</div>
              </div>
            </div>
  
            <div className='flex flex-row gap-4 justify-start'>
              <img src="../first_exam.png" className='card_image_1'></img>
              <div className='exam_heading_1'>{content} </div>
            </div>
            <div className='flex flex-row gap-4 justify-start'>
              <img src="../second_exam.png" className='card_image_1'></img>
              <div className='exam_heading_1'>{price}</div>
            </div>
          </div>
           
          <div className='flex gap-2 absolute bottom-4 right-6'>
            <img src='../arrow_exam.png' className='card_img'></img>
          </div>
        </div>
  
        <div className='flex items-center justify-center w-full'>
               <div className='card_border'></div>
         </div>
         
  
  
  
      </div>
  )
}

