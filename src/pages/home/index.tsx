import React from 'react';

import Button from '../../components/button/index';

import Nav from '../../components/nav/index';
import img1 from '../../assets/Sankore.png';
import img2 from '../../assets/client1.png';
import img3 from '../../assets/client2.png';
import img4 from '../../assets/client5.png';
import img5 from '../../assets/client7.png';
import maskImg from '../../assets/Mask group.png';
import Bs1 from '../../assets/bstatistic1.png';
import Bs2 from '../../assets/bstatistic2.png';
import Bs3 from '../../assets/bstatistc3.png';
import Bs4 from '../../assets/bstatistc4.png';
import WhatWeDo from '../../components/whatWeDo/index';
import FAQ from '../../components/FAQ/index';
import Footer from '../../components/footer/index';
import { useElementOnscreen } from '../../components/hooks/useElementOnscreen';

function Home() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const refvalue = useElementOnscreen(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  return (
    <div className="App w-[100%] flex justify-center">
      <div className="w-[100%]">
        {/* section one hero section */}
        <section className="hero xl:h-[19%] w-full relative md:p-5 p-0 h-[13%] md:h-[16%] ">
          {/* <Nav /> */}

          <div className="h-[97%] flex justify-center flex-col items-start w-full md:pl-[70px]  ">
            <div className="p-[20px] mt-9">
              <h2 className="leading-[26px] text-[24px] text-white mt-6 ">
                We prioritize providing the
              </h2>
              <div className=" text-[34px] md:text-[40px]  leading-[40px]  md:leading-[50px] text-white md:w-[474px] md:h-[100px] mt-2 font-[700]">
                Best Services possible through a Skilled Team
              </div>
              <p className="leading-[24px] text-[16px] text-white md:w-[415px] h-[72px] font-[500] mt-3">
                In order to lay a solid basis for your financial future, we
                provide a smarter, easier approach to invest in a wide variety
                of company shares.
              </p>
              <div className="mt-10">
                <Button
                  text="Learn more"
                  className="bg-white text-purple w-[158px] rounded-[10px] h-[50px] p-2 md:mt-3 font-bold "
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="flex justify-evenly md:w-[10%] w-[50%]">
              <div className="bg-white h-3 w-3 rounded-full"></div>
              <div className="bg-black h-3 w-3 rounded-full"></div>
              <div className="bg-black h-3 w-3 rounded-full"></div>
              <div className="bg-black h-3 w-3 rounded-full"></div>
            </div>
          </div>
        </section>
        {/* section two */}
        <section className="flex justify-center w-full bg-white mt-10 mb-10">
          <div className="flex justify-around md:w-[65%] w-[80%] pl-1 pr-1">
            <div>
              <img
                src={img1}
                alt="image"
                className="md:w-[107px] h-[30px] p-1 "
              />
            </div>
            <div>
              <img
                src={img3}
                alt="image"
                className="md:w-[107px] h-[30px] p-1"
              />
            </div>
            <div>
              <img
                src={img5}
                alt="image"
                className="md:w-[107px] h-[30px] p-1"
              />
            </div>
            <div>
              <img
                src={img4}
                alt="image"
                className="md:w-[107px] h-[30px] p-1"
              />
            </div>
            <div>
              <img
                src={img2}
                alt="image"
                className="md:w-[107px] h-[30px] p-1"
              />
            </div>
          </div>
        </section>
        <section className="flex justify-center w-full md:m-10">
          <div className="flex w-full  md:w-[90%] md:justify-between  items-center md:flex-row flex-col">
            <div className="md:w-[50%] w-[70%] md:p-3">
              <h3 className="text-purple  text-[24px] font-[500] leading-[36px]">
                About
              </h3>
              <h2 className="md:text-[30px] font-[800] text-black leading-[50px] text[23px]">
                We are FOY Global
              </h2>
              <p className="md:w-[385px] leading-[24px] font-[400] text-[16px] w-[242px]">
                FOY Global Investments Limited is an African high-scoring
                investment and consulting institution, whose endeavors are to
                invest in the defining fiscal transactions of international
                trade which is importation and exportation, and in domestic oil
                and gas reserve, while also offering excellent financial
                opportunities to various industry partners and qualified
                individual investors.
              </p>
              <Button
                text="Learn more"
                className="bg-purple text-white w-[158px] h-[50px] rounded p-3  mb-10 mt-10"
              />
            </div>
            <div className="50%">
              <img src={maskImg} alt="" />
            </div>
          </div>
        </section>
        {/* business sattistic section */}
        <section className="bg-purple flex justify-center w-full p-9 mt-5">
          <div className="md:w-[80%] w-full">
            <h3 className="text-center p-1 text-white text-[30px] font-[500]">
              Business Statistics
            </h3>
            <div
              className="grid md:grid-cols-4   xl:grid-cols-4  sm:grid-cols-2  grid-cols-2 gap-4  mt-5 p-1 "
              ref={ref}
            >
              {refvalue && (
                <div className="flex flex-col justify-center items-center business">
                  <img src={Bs1} alt="" />
                  <span className="text-white font-[800] text-3xl">100+</span>
                  <span className="text-white md:text-[18px] text-[13px] leading-[22px] font-[500]">
                    people support
                  </span>
                </div>
              )}
              {refvalue && (
                <div className="flex flex-col justify-center items-center business">
                  <img src={Bs2} alt="" />
                  <span className="text-white font-[800] text-3xl">100+</span>

                  <span className="text-white md:text-[18px] text-[13px] leading-[22px] font-[500]">
                    Advisory
                  </span>
                </div>
              )}
              {refvalue && (
                <div className="flex flex-col justify-center items-center business">
                  <img src={Bs3} alt="" />
                  <span className="text-white font-[800] text-3xl">100+</span>

                  <span className="text-white md:text-[18px] text-[13px] leading-[22px] font-[500]">
                    satifield client
                  </span>
                </div>
              )}
              {refvalue && (
                <div className="flex flex-col justify-center items-center business">
                  <img src={Bs4} alt="" />
                  <span className="text-white font-[900] text-3xl">100+</span>

                  <span className="text-white md:text-[18px] text-[13px] leading-[22px] font-[500]">
                    completed transaction
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* service we offer */}
        <section className="m-5">
          <div className="text-center p-5">
            <h2 className="text-[24px] font-[500] leading-[36px] text-purple">
              Services
            </h2>
            <h3 className="text-[30px] leading-[50px] font-[700] text-black">
              What we do
            </h3>
          </div>
          <div className="flex justify-center">
            <WhatWeDo />
          </div>
        </section>
        {/* faq section */}
        <section className="flex justify-center m-5 ">
          <div className="flex justify-center flex-col items-center w-full">
            <h3 className="text-center font-[800] ">FAQS</h3>
            <FAQ />
          </div>
        </section>
        {/*footer section  */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
// "react-scripts": "5.0.1",
