import React from 'react'
import { commerce } from '../../lib/Commerce';

const CustomCart = ({lineItems = [], updateData, handleEmptyData}) => {

    
    return (
        <>
        <div className='flex items-center justify-center gap-20'>
        {
                lineItems.length ? ( 
                    lineItems.map((item)  => (
                        
                        <div className='flex flex-col items-center'>
                            <label key={item.id}>{item.product_name}</label>
                            <div className='flex gap-4'>
                                <button id={item.id} name={item.quantity} className='font-bold'
                                onClick={(e) => updateData(e.target.id, parseInt(e.target.name) + 1)}
                                >+</button>
                                    <label key={item.id} className="text-base">{item.quantity}</label>
                                    <button id={item.id} name={item.quantity} className='font-bold'
                                onClick={(e) => updateData(e.target.id, parseInt(e.target.name) - 1)}
                                >-</button>
                            </div>
                        </div>
                        
                        ))
                ) : (

                    <li>{null}</li>

                )
        }  
        
        </div>           
        </>
    );
}

export default CustomCart;
