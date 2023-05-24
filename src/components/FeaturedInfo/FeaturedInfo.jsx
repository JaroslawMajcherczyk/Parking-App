import React from 'react'
import './featuredInfo.scss'


const FeaturedInfo = () => {
  return (
    <div className='featured'>
    <div className="item">
      <div className="title">Kwota do zapłaty
        <div className="moneyContainer">
          <span className="moneyPay">-12.00</span>
        </div>
      </div>
      <span className="sub">ostatnio płacone</span>
    </div>
    </div>
  )
}

export default FeaturedInfo