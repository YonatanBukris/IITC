
import React from 'react'
import Button from './ui/Button'
import Card from './ui/Card'

const svgSnuppyProcess = (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
    <g fill="none" fill-rule="evenodd">
      <circle cx="43" cy="43" r="43" fill="#96A9C6"/>
      <path fill="#FFF" fill-rule="nonzero" d="M32 59h1.195l21.072-20.146c.276-.356.123-.534-.46-.534H45.11l9.158-10.786c.276-.356.061-.534-.612-.534h-11.67c-.337 0-.613.119-.888.356l-8.515 14.645c-.061.356.122.534.582.534h8.423L32 59z"/>
    </g>
  </svg>
);

const svgAffordablePrices = (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
    <g fill="none" fill-rule="evenodd">
      <circle cx="43" cy="43" r="43" fill="#96A9C6"/>
      <path fill="#FFF" fill-rule="nonzero" d="M43 27c-8.836 0-16 7.164-16 16s7.164 16 16 16c8.838 0 16-7.164 16-16s-7.162-16-16-16zm4.363 22.178c-.787.883-1.924 1.402-3.41 1.558V53H42.06v-2.252c-2.479-.254-4.012-1.695-4.604-4.32l2.93-.764c.271 1.65 1.17 2.475 2.695 2.475.713 0 1.24-.176 1.576-.53a1.79 1.79 0 00.504-1.279c0-.518-.168-.91-.504-1.176-.336-.267-1.084-.605-2.242-1.015-1.04-.362-1.855-.717-2.441-1.073a4.032 4.032 0 01-1.428-1.48c-.365-.637-.549-1.379-.549-2.223 0-1.107.328-2.105.98-2.992.653-.885 1.68-1.426 3.083-1.623V33h1.894v1.748c2.117.254 3.488 1.451 4.111 3.594l-2.609 1.07c-.51-1.469-1.295-2.203-2.361-2.203-.535 0-.965.164-1.287.492a1.636 1.636 0 00-.487 1.194c0 .476.157.841.47 1.097.31.254.98.569 2.003.946 1.125.41 2.008.798 2.647 1.164a4.16 4.16 0 011.533 1.513c.38.645.572 1.397.572 2.258 0 1.322-.395 2.424-1.182 3.305z"/></g></svg>
);
const svgPeopleFirst = (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
    <g fill="none" fill-rule="evenodd">
      <circle cx="43" cy="43" r="43" fill="#96A9C6"/>
      <path fill="#FFF" fill-rule="nonzero" d="M52.874 49.874l-5.095-2.547c-.48-.24-.779-.724-.779-1.261v-1.804c.122-.149.25-.32.383-.507.661-.933 1.19-1.972 1.576-3.093a2.116 2.116 0 001.241-1.929V36.6c0-.514-.192-1.011-.533-1.4v-2.837c.03-.293.147-2.04-1.116-3.48C47.455 27.633 45.678 27 43.267 27c-2.412 0-4.19.634-5.285 1.883-1.263 1.44-1.145 3.187-1.115 3.48V35.2a2.127 2.127 0 00-.534 1.4v2.133c0 .65.295 1.255.799 1.658.488 1.935 1.51 3.392 1.868 3.86v1.765c0 .516-.282.99-.734 1.237l-4.758 2.596A4.81 4.81 0 0031 54.073V55.8c0 2.531 8.024 3.2 12.267 3.2 4.242 0 12.266-.669 12.266-3.2v-1.623a4.786 4.786 0 00-2.659-4.303z"/></g></svg>
);




function Article() {
 
  return (
    <main className='max-w-96 text-center mx-auto bg-base-500'>
      <nav className='flex justify-between p-4 items-center bg-base-110'>
      <svg xmlns="http://www.w3.org/2000/svg" width="112" height="18"><path fill="#2C2830" d="M0 .224h3.578v17.53H0V.223zm8.086 0h3.555l10.923 5.72V.224h3.556v17.53h-3.556V9.711L11.641 4.026v13.727H8.086V.224zm23.81 12.314c.635.36 1.28.683 1.934.97.654.288 1.333.531 2.035.73.703.198 1.442.349 2.215.454.774.104 1.599.157 2.473.157 1.054 0 1.952-.07 2.692-.208.74-.138 1.344-.329 1.811-.572.467-.243.808-.533 1.02-.869.214-.336.32-.703.32-1.1 0-.635-.265-1.137-.796-1.507-.53-.37-1.35-.556-2.456-.556-.486 0-.998.032-1.537.096l-.811.1-.82.107a97.03 97.03 0 01-1.626.208c-.535.063-1.038.095-1.509.095-.785 0-1.538-.1-2.26-.303a5.98 5.98 0 01-1.917-.908 4.5 4.5 0 01-1.33-1.514c-.328-.606-.493-1.312-.493-2.12 0-.478.066-.953.196-1.424.131-.471.34-.922.628-1.352.288-.43.66-.83 1.116-1.2a6.682 6.682 0 011.655-.958c.646-.27 1.394-.48 2.243-.634.848-.153 1.814-.23 2.899-.23.785 0 1.573.043 2.366.129.792.086 1.564.207 2.316.364.751.157 1.475.346 2.17.567.695.22 1.342.465 1.94.734l-1.559 2.871a16.689 16.689 0 00-1.592-.6 18.789 18.789 0 00-1.783-.476 20.428 20.428 0 00-1.924-.32 17.169 17.169 0 00-2.024-.118c-.98 0-1.785.071-2.417.213-.632.143-1.135.324-1.508.544-.374.221-.634.468-.78.74a1.714 1.714 0 00-.219.814c0 .523.236.951.707 1.284.471.333 1.189.499 2.153.499.39 0 .836-.028 1.34-.084l.777-.089.816-.096a72.218 72.218 0 011.705-.185c.58-.056 1.142-.084 1.688-.084 1.031 0 1.945.115 2.742.347.796.232 1.463.563 2.001.993.539.43.946.95 1.223 1.559.277.609.415 1.291.415 2.046 0 1.01-.234 1.909-.701 2.698-.467.788-1.133 1.454-1.996 1.996-.864.542-1.905.953-3.124 1.233-1.218.28-2.575.421-4.07.421-.988 0-1.952-.062-2.894-.185a21.57 21.57 0 01-2.709-.527 20.3 20.3 0 01-2.467-.819A17.998 17.998 0 0130 15.421l1.895-2.883zM53.382.224h3.555V9.88c0 .793.109 1.498.326 2.114.216.617.54 1.139.97 1.565.43.426.962.75 1.598.97.635.22 1.375.33 2.22.33.838 0 1.576-.11 2.215-.33.64-.22 1.174-.544 1.604-.97.43-.426.753-.948.97-1.565.217-.616.325-1.321.325-2.114V.224h3.555v10.083c0 1.15-.194 2.198-.583 3.14a6.668 6.668 0 01-1.693 2.422c-.74.673-1.647 1.193-2.72 1.559-1.073.366-2.297.55-3.673.55-1.375 0-2.6-.184-3.673-.55-1.072-.366-1.979-.886-2.72-1.559a6.668 6.668 0 01-1.693-2.422c-.388-.942-.583-1.99-.583-3.14V.224zm21.667 0h8.916c1.346 0 2.513.14 3.5.42.986.281 1.805.687 2.455 1.218a4.907 4.907 0 011.453 1.94c.318.762.476 1.626.476 2.59 0 .651-.078 1.27-.235 1.857a5.512 5.512 0 01-.723 1.62 5.526 5.526 0 01-1.228 1.318 6.677 6.677 0 01-1.739.959l3.813 5.607h-4.351l-3.297-4.98-5.484-.01v4.99H75.05V.224zm9.006 9.466c.673 0 1.262-.079 1.766-.236.505-.157.928-.377 1.268-.661.34-.285.594-.63.762-1.038a3.54 3.54 0 00.253-1.362c0-.98-.337-1.737-1.01-2.272-.673-.534-1.686-.801-3.039-.801h-5.45v6.37h5.45zm12-9.466h14.927v3.118H99.611v3.5h10.071v2.926h-10.07v4.879h11.607v3.106H96.056V.224z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z"/><g fill="#2C2830"><path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z"/></g></g></svg>
      </nav>
      <img src='src\images\image-intro-desktop.jpg' ></img>
      <div className=' text-base-110  px-4 py-24 space-y-6 bg-bg-pattern-how-we-work-mobile bg-no-repeat overflow-visible bg-primary-700'>
        
        <h2 className='text-5xl font-extrabold font-dm-serif'>Humanizing your insurance.</h2>
        <p className='font-light	 font-karla'>Get your life insurance coverage easier and faster. We blend our expertise 
  and technology to help you find the plan that’s right for you. Ensure you 
  and your loved ones are protected.</p>
        <Button>VIEW PLANS</Button>
        
      </div>
      <div className='bg-base-110 px-6 py-36 bg-bg-pattern-how-we-work-mobile bg-no-repeat overflow-visible space-y-16' >
        <hr></hr>
        <h2 className='text-5xl font-dm-serif text-primary-700 my-16'>We're different</h2>

        <Card
        svg = {svgSnuppyProcess}
        title="Snappy Process"
        description="Our application process can be completed in minutes, not hours. Don't get 
        stuck filling in tedious forms."  
      >
      </Card>

        <Card
          svg = {svgAffordablePrices}
          title="Affordable Prices"
          description="We don't want you worrying about high monthly costs. Our prices may be low, 
        but we still offer the best coverage possible."  
        >
        </Card>
        <Card
          svg = {svgPeopleFirst}
          title="People First"
          description="Our plans aren't full of conditions and clauses to prevent payouts. We make 
        sure you're covered when you need it."  
        >
        </Card>
        
      </div>
      <div>
        <h2>Find out more about how we work</h2>
        <button>How we work</button>

      </div>

      <div>
      <h4>Our company</h4>
      <ul>
          <li>How we work</li>
          <li>Why Insure?</li>
          <li>View plans</li>
          <li>Reviews</li>
      </ul>
      <h4>Help me</h4>
      <ul>
          <li>FAQ</li>
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <li>Cookies</li>
      </ul>
      <h4>Contact</h4>
      <ul>
          <li>Sales</li>
          <li>Support</li>
          <li>Live chat</li>
      </ul>
      <h4>Others</h4>
      <ul>
          <li>Careers</li>
          <li>Press</li>
          <li>Licenses</li>
      </ul>


      </div>


    </main>
  )
}

export default Article