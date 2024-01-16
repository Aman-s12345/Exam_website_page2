import React from 'react';
import data2 from '../data2';
import { Exam_cart } from './Exam_cart';
import Botton from './Botton';

export const Exams = () => {
  return (
    <div className='flex flex-col justify-start exams_card ml-5 gap-1 p-5'>
        <div className='exam_heading'>Exams you might be interested in</div>
        <div className=" w-full h-auto">
          {
            data2.map((data1) => {
              return <Exam_cart key={data1.id} {...data1}/>
            })
          }
        </div>

        <div className='flex w-full justify-center items-center pt-4 '>
            <Botton name={"View All"}></Botton>


        </div>




    </div>
  )
}
