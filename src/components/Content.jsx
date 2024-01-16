import React from 'react'

export const Content = () => {
  return (
    <div className='flex flex-col gap-1 content_1 mt-4 '>
        <div className='flex flex-col pt-2 justify-start'>
            <div className='cart_name py-3 pl-4 '>
            Exam Description:
            </div>
            
            <div className='cart_details flex flex-col justify-start pl-8 pr-3'>
                <div>• JEE Main is a standardized test conducted across different states in </div>
                <div className='pl-2 pb-2'>India.</div>

                
                <div>• The exam is held at an undergraduate level to offer admissions  </div> 
               
                <div className='pl-2'>
                to some of the best engineering and technical institutions that 
                </div>
                <div className='pl-2 pb-2'>
                are Government funded or privately-owned.
                </div>
                <div>
                • The exam conducting authority considers the best NTA score in </div>
                <div className='pl-2 '>
                    preparing the ranks/merit list.
                </div>
            </div>
        </div>

        <div className='flex flex-col pt-1 justify-start'>
            <div className='cart_name py-3 pl-4 '>
            Eligibility:
            </div>
            
            <div className='cart_details flex flex-col justify-start pl-8 pr-3'>
                <div className='pb-2'>• Age Limit - No age limit </div>
                <div className='pb-2'>• Qualifying Exam - Class 12/Equivalent Exam </div>
                <div className='pb-2'>• Percentage - At least 75% in class 12/equivalent exam </div>
                <div className='pb-2'>• Year of Passing - 2021, 2022 or appearing in 2023 </div>
                <div>• Number of attempts - Candidate can appear in JEE Main for 3 </div>
                <div className='pl-2 pb-2'>consecutive years after passing their class 12/equivalent exam.</div>
            </div>
        </div>
        <div className='flex flex-col pt-1 justify-start'>
            <div className='cart_name py-3 pl-4 '>
            Important Details:
            </div>
            
            <div className='cart_details flex flex-col justify-start pl-8 pr-3'>
                <div>• JEE Main 2023 January Session: NTA released the JEE Main 2023 </div>
                <div className='pl-2'>session 1 will be conducted between 24th January and 1st.</div>
                <div className='pl-2 pb-2'>February, 2023..</div>
                <div>• JEE Main 2023 April Session: NTA released the JEE Main 2023 </div>
                <div className='pl-2'>ession 1 will be conducted between 1st April, 2023 and 15th April,</div>
                <div className='pl-2 pb-2'> 2023.</div>    
            </div>


        </div>

       

        <div className='flex justify-center items-center w-full'>
            <div className='card_details_border'>
            </div>
        </div>

        <div className='flex flex-row gap-3 pt-5 pl-3'>
            <img src='./facebook.png' className='w-[25px] h-[25px] flex-shrink-0' ></img>
            <img src='./twitter.png' className='w-[25px] h-[25px]  flex-shrink-0' ></img>
            <img src='./linkedin.png' className='w-[25px] h-[25px] flex-shrink-0' ></img>
            
            
        </div>
    </div>
  )
}
