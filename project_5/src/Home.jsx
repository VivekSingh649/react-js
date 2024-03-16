import React from 'react'
import './App.css'
import InfoCard from './components/InfoCard';
import HeroSection from './components/HeroSection';


function Home() {
    return (
        <>
            <HeroSection />
            <section className="text-gray-600 body-font bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <InfoCard
                            subtitle="Home Card 1"
                            cardName="The Catalyzer"
                            cardDes="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
                            imgSrc="https://images.pexels.com/photos/20522460/pexels-photo-20522460/free-photo-of-a-snowy-landscape-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <InfoCard
                            subtitle="Home Card 1"
                            cardName="The Catalyzer"
                            cardDes="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
                            imgSrc="https://images.pexels.com/photos/206942/pexels-photo-206942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <InfoCard
                            subtitle="Home Card 1"
                            cardName="The Catalyzer"
                            cardDes="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
                            imgSrc="https://images.pexels.com/photos/206942/pexels-photo-206942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
