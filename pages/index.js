import Head from 'next/head'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EventNoteIcon from '@mui/icons-material/EventNote';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Home() {
  return (

    <div >
      <Head>
        <title>ViSa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Roboto&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ padding: 20 }}>

        <div className='boxbetween'>
          <div>
            <div className='textblueh1'> All my accounts</div>
          </div>
          <div className='iconbule'>
            <EqualizerIcon />
          </div>
        </div>


        <div className="textleft">
          <div className='textgrey3'>June 10,2018</div>
        </div>

       <div className='textgrey5'>Click on VisaCard </div>

        <div >
          <Carousel
            showThumbs={false}
            showArrows={false}
            showStatus={false}>
            <a href="/visaDetail">
              <img src="visa-1.png" />
            </a>
            <a href="/visaDetail">
              <img src="visa-2.png" />
            </a>
            <a href="/visaDetail">
              <img src="visa-3.png" />
            </a>
          </Carousel>
        </div>

        <div style={{ padding: "8px 0px 10px 0", }}>
          <div className='boxstyle2'>
            <div style={{ width: "50%" }}>
              <div style={{ padding: "0px 40px 5px 40px" }}>
                <div className='boxstyle4'>Income</div>
              </div>
              <div className='divrowgreen'>
                <div >
                  <ArrowDownwardIcon />
                </div>
                <div style={{ padding: "0px 0px 0px 5px" }}>$9,302.00</div>
              </div>

            </div>
            <div
              style={{
                width: "50%",
              }}
            >
              <div style={{ padding: "0px 40px 5px 40px" }}>
                <div className='boxstyle4'>Expense</div>
              </div>

              <div className='divrowred'>
                <div >
                  <ArrowUpwardIcon />
                </div>
                <div style={{ padding: "0px 0px 0px 5px" }}>$2,790.00</div>
              </div>
            </div>
          </div>
        </div>

        <div className='boxspace'>
          <div className='boxbetween'>
            <div>
              <div className='textblueh3'> Detail of movements</div>
            </div>
            <div className='iconbule' style={{paddingBottom:"10px"}}>
              <EventNoteIcon />
            </div>
          </div>

          <div className='boxstyle2' >
            <div className='icon'>
              <RestaurantIcon />
            </div>
            <div style={{ width: "70%", }}>
              <div class="textleft">Restaurant Manhattan</div>
              <div class="textleft2">June 2,2018</div>
            </div>
            <div className='divrowred'>
              <div style={{ padding: "0px 5px 0px 0px" }}>$170</div>
              <div>
                <ArrowUpwardIcon />
              </div>
            </div>
          </div>
        </div>

        <div className='boxspace'>
          <div className='boxstyle2'>
            <div className='icon'>
              <PaidIcon />
            </div>
            <div style={{ width: "70%", }}>
              <div class="textleft">Salary Deposit</div>
              <div class="textleft2">June 2,2018</div>
            </div>
            <div className='divrowgreen'>
              <div style={{ padding: "0px 5px 0px 0px" }}>$1,200</div>
              <div >
                <ArrowDownwardIcon />
              </div>
            </div>
          </div>
        </div>

        <div className='boxspace'>
          <div className='boxstyle2'>
            <div className='icon'>
              <ShoppingBasketIcon />
            </div>
            <div style={{ width: "70%", }}>
              <div class="textleft">Central Market Deposit</div>
              <div class="textleft2">May 2,2018</div>
            </div>
            <div className='divrowred'>
              <div style={{ padding: "0px 5px 0px 0px" }}>$170</div>
              <div>
                <ArrowUpwardIcon />
              </div>
            </div>
          </div>
        </div>


        <div className='boxspace'>
          <div className='boxstyle2'>
            <div className='icon'>
              <PaidIcon />
            </div>
            <div style={{ width: "70%", }}>
              <div class="textleft">Salary Deposit</div>
              <div class="textleft2">June 2,2018</div>
            </div>
            <div className='divrowgreen'>
              <div style={{ padding: "0px 5px 0px 0px" }}>$1,200</div>
              <div >
                <ArrowDownwardIcon />
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "10px" }}></div>


      </div>











    </div>
  )
}
