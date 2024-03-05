import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CardOne from './App.jsx'
import Counter from './counter.jsx'
import ChangeBackground from './background-changer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className="flex gap-5 flex-wrap justify-center	">
      {/* Profile 1 */}
      <CardOne
      username='Vivek Singh' 
      description='Describe your project to find the best human-made assets with the power of AI.' 
      btnText='Know More'
      imgSrc="https://images.pexels.com/photos/5887495/pexels-photo-5887495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

      {/* Profile 2 */}
      <CardOne
      username='Amit Sharma'
      description='Describe your project to find the best human-made assets with the power of AI.'
      btnText='Read More'
      imgSrc='https://images.pexels.com/photos/12428121/pexels-photo-12428121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>

      {/* Profile 3 */}
      <CardOne
      username='Rohan Sharma'
      description='Describe your project to find the best human-made assets with the power of AI.'
      btnText='View Profile'
      imgSrc='https://images.pexels.com/photos/20246336/pexels-photo-20246336/free-photo-of-a-car-is-driving-through-the-fog-on-a-street.jpeg'
      />
    </div>
    <div className="flex">
        <Counter />
    </div>
    <ChangeBackground />
      </>
)
