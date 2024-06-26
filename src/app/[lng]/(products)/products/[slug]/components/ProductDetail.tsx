'use client'

import { useState } from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState('tab1');

  const toggleTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
    <div className="px-5 py-16 md:p-20 bg-cyan-50">
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
        </ul>
      </div>

      <div id="content1" className={activeTab === 'tab1' ? '' : 'hidden'}>
        <Tab1 />
      </div>
      <div id="content2" className={activeTab === 'tab2' ? '' : 'hidden'}>
        <Tab2 />
      </div>
      <div id="content3" className={activeTab === 'tab3' ? '' : 'hidden'}>
        <Tab3 />
      </div>
    </div>
    </>
  )
}