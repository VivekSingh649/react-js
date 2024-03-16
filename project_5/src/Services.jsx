import React from 'react';
import InfoCard from './components/InfoCard';
import products from './components/products';

export default function Services() {

    //     <InfoCard
    //     subtitle="About Card 1"
    //     cardName="The Catalyzer"
    //     cardDes="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    //     imgSrc="https://images.pexels.com/photos/206942/pexels-photo-206942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // />

    return (
        <>
            <section className='bg-white px-5 def-padd-80'>
                <div className="container">
                    <div className="flex flex-wrap -m-4">

                        {
                            products.map((product, index) => {
                                return (
                                    <InfoCard
                                        key={index}
                                        subtitle={product.product_price}
                                        cardName={product.product_name}
                                        cardDes={product.product_des}
                                        imgSrc={product.product_img}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    );
}
