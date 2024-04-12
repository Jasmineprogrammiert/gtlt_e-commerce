'use client'

import { useState } from 'react'
import Tab1 from './Tab1'

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState('tab1');

  const toggleTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
    <div className="px-20 py-20 container mx-auto bg-cyan-50">
      <div className="flex justify-center">
        <ul className="flex">
          <li role="presentation">
            <button
              className={`productDetail-tab ${
                activeTab === 'tab1' ? 'border-cyan-600' : ''
              }`}
              id="tab1"
              onClick={() => toggleTab('tab1')}
            >
              How it works
            </button>
          </li>
          <li role="presentation">
            <button
              className={`productDetail-tab ${
                activeTab === 'tab2' ? 'border-cyan-600' : ''
              }`}
              id="tab2"
              onClick={() => toggleTab('tab2')}
            >
              What is tested
            </button>
          </li>
          <li role="presentation">
            <button
              className={`productDetail-tab ${
                activeTab === 'tab3' ? 'border-cyan-600' : ''
              }`}
              id="tab3"
              onClick={() => toggleTab('tab3')}
            >
              What is included
            </button>
          </li>
          <li role="presentation">
            <button
              className={`productDetail-tab ${
                activeTab === 'tab4' ? 'border-cyan-600' : ''
              }`}
              id="tab4"
              onClick={() => toggleTab('tab4')}
            >
              More 
            </button>
          </li>
        </ul>
      </div>


      
      <div id="content1" className={activeTab === 'tab1' ? '' : 'hidden'}>
        <Tab1 />
      </div>
      <div id="content2" className={activeTab === 'tab2' ? '' : 'hidden'}>
        Content for Tab 2
      </div>
      <div id="content3" className={activeTab === 'tab3' ? '' : 'hidden'}>
        Content for Tab 3
      </div>
      <div id="content4" className={activeTab === 'tab4' ? '' : 'hidden'}>
        Content for Tab 4
      </div>
    </div>
    </>
  )
}
