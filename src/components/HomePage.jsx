import { useState } from 'react'
import './style.css';
import {AiOutlineSearch} from 'react-icons/ai'
import {GiBirdLimb} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsCardText} from 'react-icons/bs'
import {ImFileText} from 'react-icons/im'
// import {IoNotificationsOutline} from 'react-icons/io'
import {MdNotificationsNone} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkDash} from 'react-icons/bs'
import {AiFillCaretDown} from 'react-icons/ai'
import movix from '../../src/assests/movix-logo.png'



function HomePage() {

  return (
    <div className='homefull'>

{/* sidebar */}
        <div className='sidebar'>

            <div className='sidebar-1'>
            <GiBirdLimb className='text-hoverColor text-[30px] cursor-pointer'/>   
            <br />
            <AiOutlineSearch className='text-hoverColor text-[30px] cursor-pointer'/>
            </div>
          

            <div className='sidebar-2 '>
            <button className='button1'><AiFillHome className='ic' /></button>
            <br />
            <BsCardText className='ic2'/>
            <br />
            <ImFileText className='ic2'/>
            <br />
            <AiOutlineUser className='ic2'/>
            </div>

            <div className='sidebar-3'>
            {/* <IoNotificationsOutline/> */}
            <MdNotificationsNone className='noti'/>
            <br />
            <BsBookmarkDash className='book'/>
            </div>

        </div>

{/* profilebar */}
        <div className='profilebar'>
             <div className='pro-wel'>
                <div className='img'>
                <img src={movix} alt="" />
                </div>
                <div className='p-well'>
                <h2>Hi Manoj,</h2>
                <p>welcome back</p>
                </div>  
             </div>
            

            <div >
            <h5>Today</h5>
            <h3>$19,892 <br />
            <span className='span'>Account Balance</span>
            </h3>
            
        </div>
        <div>
        <h4 className='h4'>$4,000<br />
            <span className='span'>Year-to-Date Contribution</span>
            </h4>
        </div>

        <div>
            <h4 className='h4'>$1,892<br />
            <span className='span'>Toatl Interest</span>
            </h4>
            
            <button className='button'>I want to<AiFillCaretDown/></button>
            <br />
        </div>

        <div className='trnas'>
            <br />
            <h4>Recent Transaction</h4>
            <span className='span'>2020-08-07<h5>Withdrawal Transfer to Bank-XXX11</h5><hr /></span>
            <span className='span2'>2020-07-21 <h5>Withdrawal Transfer to Bank-XXX11</h5><hr /></span>
            <span className='span yes'>2020-07-16 <h5>Withdrawal Transfer to Bank-XXX11</h5><hr /></span>
        </div>
        </div>

       

{/* statsection */}
        <div className='statsection'>
            <h5><span className='spanre'>Retirement Income</span>
                <h2>Starting Year 2056</h2>
            </h5>

            <div className='inst'>

                <div className='inst1'>
                <h4>$300,000 <br /> <span>My Goal</span></h4>
                </div>

            <div className='bothin12'>
                <div className='inst2'>
                <h4>59% <br /> <span>Goal Achieved</span></h4>
                </div>

                <div className='inst3'>
                <h4>$300 <br /> <span>Est. Monthly Income</span></h4>
                </div>
            </div>
                

            </div>

            <div  className='chardiv'>
                <h4 className='con'>Contributions Overtime</h4>
                <div className='chart-1'>
                    <div className='emp1'>
                        <button className='color'></button>
                        <span className='span'>Employer:</span>
                        <h5>K73,500</h5>
                    </div>

                    <div className='emp2'>
                        <button className='color'></button>
                        <span className='span'>Employer:</span>
                        <h5>K52,500</h5>
                    </div>

                    <div className='emp3'>
                        <button className='color1'></button>
                        <span className='span'>Total Interest:</span>
                        <h5>K244,313</h5>
                    </div>      
                </div>
                <div className='container'>
                      <div className='bar one'></div>
                      <div className='bar two'></div>
                      <div className='bar three'></div>
                      <div className='bar four'></div>
                      <div className='bar five'></div>
                      <div className='bar six'></div>
                      <div className='bar seven'></div>
                      <div className='bar eight'></div>
                      <div className='bar nine'></div>
                      <div className='bar ten'></div>
                      <div className='bar ten1'></div>
                      <div className='bar ten2'></div>
                      <div className='bar ten3'></div>

                      <ul className="v-meter">
                        <li><div>$300</div></li>
                        <li><div>$200</div></li>
                        <li><div>$100</div></li>
                        <li><div>$0</div></li>
                      </ul>
                </div>
            </div>





            <div className='howdo'>
                <h5 className='h5'>How do I compare to my peer?<br />
                    <span className='span'>These numbers represent current goal <br />
                     achievement</span>
                </h5>


         <div className='circlechart'>

                <div className='leftsec'>
                   <h5>Age: <span className='span'>Under 30 <AiFillCaretDown/></span><hr className='hor1' /></h5>
                   <h5>Salary: <span className='span'>K 20 - K 30 <AiFillCaretDown/></span><hr className='hor1' /></h5>
                   <h5>Gender: <span className='span'>Male<AiFillCaretDown/></span></h5>
                </div>
               
                <div className='rightsec'>

                   

                 <div class="flex-wrapper">
                 <div class="single-chart">
                     <svg viewBox="0 0 36 36" class="circular-chart orange">
                      <path class="circle-bg"
                      d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                  <path class="circle"
                 stroke-dasharray="78, 100"
                 d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
                   />
      <text x="18" y="20.35" class="percentage">78%</text>
    </svg>
    <div>Average</div>
  </div>
  
  <div class="single-chart1">
    <svg viewBox="0 0 36 36" class="circular-chart green">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="95, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">95%</text>
    </svg>
    <div>Top</div>
  </div>

  <div class="single-chart2">
    <svg viewBox="0 0 36 36" class="circular-chart blue">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="59, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">59%</text>
    </svg>
    <div>Me</div>
  </div>
</div>


                </div>

                </div>
               
            </div>
        </div>

{/* updatesection */}
        <div className='updatesection'>
            <div className='update'>
               <h4>Retirement Starategy</h4>
            <div >
                <h5>Employee Contribution</h5>
            <div className='progressB'>

                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
                <h5>12%</h5>
            </div>
                </div>
                

               <div>
                <h5> Retairement Age</h5> 
                <div className='progressB1'>

<div class="progress-bar1">
  <div class="progress"></div>
</div>
<h5>65%</h5>
</div>  
               </div><hr />

               <div>
                <div className='empCon'>
                    <h5>Employer Contribution</h5>
                    <h5>8.5%</h5>
                </div>
                <div className='empCon1'>
                    <h5 >Interest Rate</h5>
                    <h5>5%</h5>
                </div>
                <div className='buttU'>
                    <button className='buttUp'>Update</button>
                </div><br />
                <div className='text'>
                    <span>View Help Docs<AiFillCaretDown/> </span>
                    
                </div>
               </div>
            </div>

            <div className='aftUpa'>
                   <div>
                    <p>Are you considering a <h4>Housing Advance?</h4> <span className='span'>Limited time reuced interest.</span></p>    
                    <span className='text'>Learn More<AiFillCaretDown/></span>
                   </div>
            </div>
            
        </div>
    </div>
  )
}

export default HomePage