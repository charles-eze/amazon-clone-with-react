import React from 'react';

function HeaderTwo() {
    return (
        <div className='relative flex items-center justify-between bg-gray-800 h-3.5 md:h-10 text-white'>
            <div className='flex relative ml-2 pb-2.5 md:pb-0 md:ml-6 '>
                <div className='pr-2 md:px-2 md:border border-transparent hover:border-white'>
                    <a 
                        href='https://amazon.com'
                        className='md:text-sm md:font-semibold'
                        style={{fontSize: 5, fontWeight: 600}}>All</a>
                </div>
                <div className='pr-2 md:px-2 md:border border-transparent hover:border-white'>
                    <a  
                        href='https://amazon.com'
                        className='md:py-1 md:text-sm'
                        style={{fontSize: 5, fontWeight: 600}}>Today's Deals</a>
                </div>
                <div className='pr-2 md:px-2 md:border border-transparent hover:border-white'>
                    <a  
                        href='https://amazon.com'
                        className='md:py-1 md:text-sm'
                        style={{fontSize: 5, fontWeight: 600}}>Customer Service</a>
                </div>
                <div className='pr-2 md:px-2 md:border border-transparent hover:border-white'>
                    <a  
                        href='https://amazon.com'
                        className='md:py-1 md:text-sm'
                        style={{fontSize: 5, fontWeight: 600}}>Gift Cards</a>
                </div>
                <div className='pr-2 md:px-2 md:border border-transparent hover:border-white'>
                    <a  
                        href='https://amazon.com'
                        className='md:py-1 md:text-sm'
                        style={{fontSize: 5, fontWeight: 600}}>Sell</a>
                </div>
                <div className='pr-2 pb-2.5 md:px-2 md:border border-transparent hover:border-white'>
                    <a  
                        href='https://amazon.com'
                        className='md:py-1 md:text-sm'
                        style={{fontSize: 5, fontWeight: 600}}>Registry</a>
                </div>
            </div>
            <div>
                <div className='md:mr-3 mr-1.5 md:px-2 pb-2.5 md:font-bold md:border border-transparent hover:border-white'>
                    <a 
                        className='md:py-1 md:text-sm  '
                        style={{fontSize: 5, fontWeight: 700}}
                        href={'https://www.aboutamazon.com/company-news/amazons-actions-to-help-employees-communities-and-customers-affected-by-covid-19/?_encoding=UTF8&token=GW&utm_content=COVID-19_roundup&utm_medium=swm&utm_source=gateway&utm_term=gw03162020&ref_=nav_swm_undefined&pf_rd_p=5d2fb1a4-59ab-49fb-a348-f1080f4a79b0&pf_rd_s=nav-sitewide-msg-text-export&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=Q8WGPTYDNSXN53CQKWXQ'}
                        target='_blank'
                        rel='noreferrer'>Amazon's response to COVID-19</a>
                </div>
            </div>       
        </div>
    )
}

export default HeaderTwo;
