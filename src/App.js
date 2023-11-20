import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdContact } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import './App.css';
export default function App() {
  return (
    <div>
      {/* <p className="text-2xl underline decoration-red-300
      decoration-wavy decoration-1 underline-offset-8
      leading-relaxed capitalize">
      This is my paragraph</p> */}
      <div id='main-container' className="flex justify-between  p-2 text-lg" >
        {/* <span className=''>Menu</span> */}
        <span id='main-contents' className='pl-[10rem] pr-[3rem]'>prime video</span>
        <span id='main-contents' className='text-gray-400 flex'>Home <a className='text-[2rem]' id="up-arrow"><RiArrowDropDownLine /></a>  </span>     
        <span id='main-contents' className='text-gray-400 flex'>Store <a className='text-[2rem]' id="up-arrow"><RiArrowDropDownLine /></a> </span>
        <span id='main-contents' className='text-gray-400 flex'>Live TV <a className='text-[2rem]' id='up-arrow'><RiArrowDropDownLine /></a> </span>
        <span id='main-contents' className='text-gray-400 pr-10 flex'>Categories <a className=' text-[2rem]' id='up-arrow'><RiArrowDropDownLine /></a> </span>
        <a href='#' className='text-gray-400 text-[2rem]'><AiOutlineSearch /></a>
        <span id='main-contents' className='text-gray-400'>Try for free</span>
        <span id='main-contents' className='text-gray-400 flex'>EN <a className='text-[2rem]' id='up-arrow'><RiArrowDropDownLine /></a></span>
        <a href='#' className='text-gray-400 pr-[13rem] text-[2rem] '><IoMdContact /></a>
       
      </div>
      <div>
        {/* <img className="w-[100rem] flex" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg"></img> */}
        {/* <div>className="max-w-full h-[30rem] bg-[url('/public/images/amazon-img1.jpg')]" */}
        <div id="header-img" className="h-[30rem] bg-[url('/public/images/amazon-img1.jpg')]">
          <div className='px-10 py-[3rem]'>
            <p id="header-para" className="text-[2.5rem] flex justify-start font-times font-sans">Welcome to Prime Video</p>
            <p id="context" className="text-[1.6rem] leading-7 font-light pt-4 pr-[40rem] flex justify-start font-sans">Watch the latest movies,TV shows,and award-winning Amazon Originals</p>
          
            <form className="bg-blue-500 rounded-sm mr-[61rem] py-2 text-center text-xl text-white mt-2" id="form" action="">
              <input  type="submit" value="Sign in to join Prime"></input>
            </form>
          </div>
          <div id="header-img" className="mt-[20rem] h-[30rem] bg-[url('/public/images/amazon-img2.jpg')]">
          <div id="header2" className='px-10 py-[0rem] ml-[45rem]'>
            <p className="text-[2.5rem] flex justify-start font-sans">Movie rentals on Prime Video</p>
            <p className="text-[1.5rem] leading-7 font-light pt-4 pr-[0rem] flex justify-start font-sans">Early Access to new movies, before digital subscription</p>
          
            <form className="bg-blue-500 rounded-sm mr-[20rem] py-2 text-center text-xl text-white mt-7" id="form" action="">
              <input type="submit" value="Rent now"></input>
            </form>
            </div>
        </div>

        <div id="main-contant-3" className='channels-wrapper bg-white text-black '>
        <div className="channels-main mb-[15rem]">
        <h1 id="header3" className='text-[2.5rem] flex justify-start font-sans'>Your favorite channels all in one place</h1>
        <div>
          <p id="content3" className='text-[1.5rem] leading-7 font-light pt-4 pr-[0rem] flex justify-start font-sans'>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
        </div>
      </div>
      <div id="media-img" className="img-grid w-[65%] ml-[7rem]">
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
          </a>
        </div>
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg" alt="" />
          </a>
        </div>
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_BBC_PLAYER.png" alt="" />
          </a>
        </div>
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg" alt="" />
          </a>
        </div>
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg" alt="" />
          </a>
        </div>
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Chaupal.png" alt="" />
          </a>
        </div>
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Amc.png" alt="" />
          </a>
        </div>
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg" alt="" />
          </a>
        </div>
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg" alt="" />
          </a>
        </div>
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png" alt="" />
          </a>
        </div>
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png" alt="" />
          </a>
        </div>
        <div className='card'>
          <a href="">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
          <div id="header-img-4" className="h-[31rem] bg-[url('/public/images/amazon-img3.jpg')]">
            <div id="header-4" className='px-10 py-[7rem] ml-[45rem]'>
              <p id="header-content-4" className="text-[2.5rem] flex justify-start font-sans">Even better with Fire TV Stick</p>
              <p id="header-para-4" className="text-[1.5rem] leading-7 font-light pt-4 pr-[0rem] flex justify-start font-sans">The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</p>
              <form className="bg-blue-500 rounded-sm mr-[20rem] py-2 text-center text-xl text-white mt-7" id="form" action="">
                <input  type="submit" value="Get started"></input>
              </form>
            </div>
          </div>
          <div id='header-img' className="h-[30rem] bg-[url('/public/images/amazon-img4.jpg')]">
          <div id='family-header' className='px-10 py-[3rem] mr-[7rem]'>
            <p id='family-content' className="text-[2.5rem] flex justify-start font-sans">Family Friendly</p>
            <p id='family-content-para' className="text-[1.5rem] leading-7 font-light pt-4 pr-[40rem] flex justify-start font-sans">With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>
          
            <form className="bg-blue-500 rounded-sm mr-[59rem] py-2 text-center text-xl text-white mt-7" id="form" action="">
              <input  type="submit" value="Get started"></input>
            </form>
        </div>
        </div>
        <div className="text-center text-sm bg-gray-600 font-light py-[1.5rem]">
          {/* <span className="flex justify-center"><img src='/public/images/web-footer.png'></img></span> */}
          {/* <div id="" className="flex justify-center bg-[url('/public/images/web-footer.png')]"></div> */}
          <div id='foooter' className="flex justify-center">
          <img className="" src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"></img>
          </div>
          <div id='footer-list'>
            <a  className='pl-[5rem] flex gap-8 text-blue-400 ml-[30%] p-3' href="#">   
              <span id='footer-list content'>Tearms and Privacy Notice</span>
              <span id='footer-list content'>Send as feedback</span>
              <span id='footer-list content'>Help</span>
            </a>
          </div>
          <span className=''>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
        </div>
        </div>
      </div>
  </div>
  )
}
