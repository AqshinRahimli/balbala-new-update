import React from 'react';
import CampaignCart from '../Components/CampaignCart';

const Campaign = () => {
  return (
    <div className="container">
      <div className='campaign'>
        <div className="compaign-main">
          <h1>
            Uşaq Məhsulları Endirimləri və Kompaniyaları
          </h1>
        </div>
        <CampaignCart />
      </div>
    </div>
  )
}

export default Campaign