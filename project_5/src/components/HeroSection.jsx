import React from 'react';

function HeroSection({ title, subTitle, btnFirst, btnSecond, imgSrc }) {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900">{title}</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{subTitle}</p>
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{btnFirst}</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">{btnSecond}</button>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={imgSrc} alt="mockup" />
                    </div>
                </div>
            </section>
        </>
    );
}


export default HeroSection;

HeroSection.defaultProps = {
    title: "Welcome to Our Website!",
    subTitle: "Welcome to our website, where we strive to provide you with the latest information, products, and services tailored to your needs.",
    btnFirst: "Get Started",
    btnSecond: "Explore more",
    imgSrc: "https://images.pexels.com/photos/20400720/pexels-photo-20400720/free-photo-of-a-beach-with-a-boat-on-the-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
};