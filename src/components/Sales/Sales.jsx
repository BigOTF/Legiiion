import React, { useState, useEffect } from 'react'
import CountdownTimer from './Countdown';
/* https://api.escuelajs.co/api/v1/products */
/* https://fakestoreapi.com/products */

const Sales = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchItems = async() => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const theData = await response.json();
                console.log(theData);
                return setProduct(theData);
            } catch(err) {
                console.log(err.message);
            }
        }
        fetchItems();
    }, []);

    const ProductData = () => {
        return  product.map((data) => {
            return (
                <div key={data.id}>
                    <img src={data.images}/>
                </div>
            )
        })
    }

    const targetDate = '2024-08-10T00:00:00';


  return (
    <section className='px-[135px] mt-[100px]'>
        <div className='flex items-center gap-2'>
            <div className='w-[20px] h-[40px] bg-[#DB4444]'></div>
            <p className='text-[16px] font-semibold text-[#DB4444]'>Today's</p>
        </div>

        <div>
            <p className='text-[36px] font-semibold'>Flash Sales</p>
            <CountdownTimer targetDate={targetDate} />
        </div>
    </section>
  )
}

export default Sales