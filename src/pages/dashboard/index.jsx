import React from "react";
import MatchLive from "../../Component/Dashboard/matchlive";
import Match_cards from "../../Component/Dashboard/Match_cards";
import { BiChevronRight } from "react-icons/bi"
import Hilights_Cards from "../../Component/Dashboard/Highlights_cards";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import News_cards from "../../Component/Dashboard/News_cards";
import Tournaments_cards from "../../Component/Dashboard/Tournaments_cards";


const Dashboard = () => {
  const slides = [
    {
      id: 1,
      url: '../../CBL_Images/background4.webp',
      Tournament: "Gokuldham Premier League",
      Fisrt_Team: "MEHTA KE MAHAARATHI",
      Secound_Team: "JETHA KE JABAAZ",
      is_live: 1,
    },
    {
      id: 2,
      url: '../../CBL_Images/background3.webp',
      Tournament: "Gokuldham Premier League",
      Fisrt_Team: "MEHTA KE MAHAARATHI",
      Secound_Team: "JETHA KE JABAAZ",
      is_live: 0,
    },
    {
      id: 3,
      url: '../../CBL_Images/background2.webp',
      Tournament: "FIBA Americas Championship",
      Fisrt_Team: "Dallas Mavericks",
      Secound_Team: "Denver Nuggets",
      is_live: 1,
    },
    {
      id: 4,
      url: '../../CBL_Images/background1.webp',
      Tournament: "Gokuldham Premier League",
      Fisrt_Team: "MEHTA KE MAHAARATHI",
      Secound_Team: "JETHA KE JABAAZ",
      is_live: 0,
    },
  ];

  const matches = [
    {
      id: 1,
      day: "Fri",
      date: "1 Feb",
      is_live: 0,
      time: "23:00PM GMT+5:30",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament: "CBL Legue",
      location: "Ahmedabad",
      tournament_logo: "../../CBL_Images/logo5.png"
    },
    {
      id: 2,
      day: "Fri",
      date: "1 Feb",
      is_live: 1,
      time: "23:00PM GMT+5:30",
      first_team: "Mehta ke mahati",
      secound_team: "Real Madrid",
      F_logo: "../../../CBL_Images/logo3.png",
      s_logo: "../../../CBL_Images/logo4.png",
      tournament: "NBA National",
      location: "Mumbai",
      tournament_logo: "../../CBL_Images/logo5.png"
    },
    {
      id: 3,
      day: "Fri",
      date: "1 Feb",
      is_live: 0,
      time: "23:00PM GMT+5:30",
      first_team: "Royal Chalengers",
      secound_team: "Chennai Superking",
      F_logo: "../../../CBL_Images/logo5.png",
      s_logo: "../../../CBL_Images/logo1.png",
      tournament: "LJ Cup",
      location: "Delhi",
      tournament_logo: "../../CBL_Images/logo5.png"
    },
    {
      id: 4,
      day: "Fri",
      date: "1 Feb",
      is_live: 1,
      time: "23:00PM GMT+5:30",
      first_team: "Mumbai Indians",
      secound_team: "Delhi Daredevils",
      F_logo: "../../../CBL_Images/logo2.png",
      s_logo: "../../../CBL_Images/logo3.png",
      tournament: "Basketball legue",
      location: "Kolkata",
      tournament_logo: "./../CBL_Images/logo5.png"
    },
  ]

  const Highlights = [
    {
      id: 1,
      photo: "../../CBL_Images/high6.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
    {
      id: 2,
      photo: "../../CBL_Images/high4.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo3.png",
      s_logo: "../../../CBL_Images/logo4.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
    {
      id: 3,
      photo: "../../CBL_Images/high3.jfif",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo2.png",
      s_logo: "../../../CBL_Images/logo1.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
    {
      id: 4,
      photo: "../../CBL_Images/high1.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
    {
      id: 5,
      photo: "../../CBL_Images/high5.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
    {
      id: 6,
      photo: "../../CBL_Images/high4.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
  ]


  const News = [
    {
      id: 1,
      photo: "../../CBL_Images/sd_11zon.webp",
      heading: "Wellbenix created web for basketball",
      title1: "CBL",
      title2: "CVL",
      title3: "Ayursattva",
      date: "10/MARCH/2023"
    },
    {
      id: 2,
      photo: "../../CBL_Images/high4.jfif",
      heading: "Wellbenix created web for basketball",
      title1: "CBL",
      title2: "CVL",
      title3: "Ayursattva",
      date: "10/FEB/2023"
    },
    {
      id: 3,
      photo: "../../CBL_Images/news1.jpg",
      heading: "Wellbenix created web for basketball",
      title1: "CBL",
      title2: "CVL",
      title3: "Ayursattva",
      date: "10/APRIL/2023"
    },
  ]

  const Tournament = [
    {
      id: 1,
      logo: "../../CBL_Images/logo3.png"
    },
    {
      id: 2,
      logo: "../../CBL_Images/logo5.png"
    },
    {
      id: 3,
      logo: "../../CBL_Images/logo2.png"
    },
    {
      id: 4,
      logo: "../../CBL_Images/logo.png"
    },
  ]

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Tournament.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Tournament.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 8;
    setCurrentIndex(newIndex);
  };


  return (
    <div className="min-h-screen ">
      {/* Main Slider for live and upcoming matches */}
      <div className="py-10 px-24">
        <MatchLive slides={slides} />
      </div>

      {/* Live and Upcoming match  */}
      <div className="py-10 pl-8  ">
        <div className="flex justify-between items-center pr-8">
          <h1 className="font-bold text-3xl text-black">
            Leagues on Courtside :
          </h1>
          <p className="flex items-center text-[13px] font-semibold cursor-pointer hover:underline">
            Discover More
            <BiChevronRight className="text-xl mt-1" />
          </p>
        </div>
        <div className="bg-black h-[5px] w-32 my-1 relative top-[7px] left-2">
        </div>
        <div className="bg-gray-700 h-[1px] w-full my-1 bg-gradient-to-l from-slate-50">
        </div>
        <div className="player-container w-full flex justify-start  items-center gap-8 sm:gap-16 md:gap-5 my-5 overflow-x-scroll  py-10">
          {
            matches.length > 0
              ?
              matches.map((item, index) => {
                return (
                  <Match_cards
                    key={index}
                    id={item.id}
                    day={item.day}
                    date={item.date}
                    is_live={item.is_live}
                    time={item.time}
                    first_team={item.first_team}
                    secound_team={item.secound_team}
                    F_logo={item.F_logo}
                    s_logo={item.s_logo}
                    tournament={item.tournament}
                    location={item.location}
                    tournament_logo={item.tournament_logo}
                  />
                )
              })
              :
              <div className="bg-red-100 w-full mt-4 text-center">
                <h4 className='text-red-700 font-medium p-2'>No Matches Found</h4>
              </div>
          }
          {/* Left Arrow */}
          <div className='hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl h-1/2 mt-6  justify-center items-center p-2 bg-black/20 duration-300 hover:bg-black text-white cursor-pointer'>
            <FaChevronLeft
              onClick={prevSlide} 
              size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl h-1/2 mt-6  justify-center items-center p-2 bg-black/20 duration-300 hover:bg-black text-white cursor-pointer'>
            <FaChevronRight
              onClick={nextSlide} 
              size={30} />
          </div>
        </div>

      </div>


      {/* Tournaments  */}
      <div className="py-10 pl-8  relative">
        <div className="flex justify-between items-center pr-8">
          <h1 className="font-bold text-3xl text-black">
            Key Tournaments :
          </h1>
          <p className="flex items-center text-[13px] font-semibold cursor-pointer hover:underline">
            Discover More
            <BiChevronRight className="text-xl mt-1" />
          </p>
        </div>
        <div className="bg-black h-[5px] w-32 my-1 relative top-[7px] left-2">
        </div>
        <div className="bg-gray-700 h-[1px] w-full my-1 bg-gradient-to-l from-slate-50">
        </div>
        <div className=" w-full flex justify-start group items-center gap-8 sm:gap-16 md:gap-5 my-5 overflow-x-hidden py-10">
          {
            Tournament.length > 0
              ?
              Tournament.map((item, index) => {
                return (
                  <Tournaments_cards
                    key={index}
                    id={item.id}
                    logo={item.logo}
                  />
                )
              })
              :
              <div className="bg-red-100 w-full mt-4 text-center">
                <h4 className='text-red-700 font-medium p-2'>No Matches Found</h4>
              </div>
          }
          {/* Left Arrow */}
          <div className='hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] py-20 mt-7 left-0 text-2xl   justify-center items-center p-2 bg-gradient-to-r hover:text-[#ee6730] duration-300 from-black text-white cursor-pointer'>
            <FaChevronLeft
              // onClick={prevSlide} 
              size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] py-20 mt-7 right-0 text-2xl   justify-center items-center p-2 bg-gradient-to-l hover:text-[#ee6730] duration-300 from-black text-white cursor-pointer'>
            <FaChevronRight
              // onClick={nextSlide} 
              size={30} />
          </div>
        </div>

      </div>

      {/* Highlights previus matches  */}
      <div className=" my-5 pl-8 ">
        <div className="flex justify-between items-center pr-8 ">
          <h1 className="font-bold text-3xl text-black">
            Highlights of The Week :
          </h1>
          <p className="flex items-center text-[13px] font-semibold cursor-pointer hover:underline">
            Discover More
            <BiChevronRight className="text-xl mt-1" />
          </p>
        </div>
        <div className="bg-black h-[5px] w-32 my-1 relative top-[7px] left-2">
        </div>
        <div className="bg-gray-700 h-[.8px] w-full my-1 bg-gradient-to-l from-slate-50">
        </div>
        <div className=" relative flex justify-start  items-center gap-8 sm:gap-16 md:gap-2 my-5  py-10 ">
          {
            Highlights.length > 0
              ?
              Highlights.map((item, index) => {
                return (
                  <Hilights_Cards
                    key={index}
                    id={item.id}
                    photo={item.photo}
                    first_team={item.first_team}
                    secound_team={item.secound_team}
                    F_logo={item.F_logo}
                    s_logo={item.s_logo}
                    tournament_logo={item.tournament_logo}
                  />
                )
              })
              :
              <div className="bg-red-100 w-full mt-4 text-center">
                <h4 className='text-red-700 font-medium p-2'>No Highlights Found</h4>
              </div>
          }
        </div>
      </div>

      {/* News previus matches  */}
      <div className="py-10 pl-8 ">
        <div className="flex justify-between items-center pr-8">
          <h1 className="font-bold text-3xl text-black">
            News :
          </h1>
          <p className="flex items-center text-[13px] font-semibold cursor-pointer hover:underline">
            Discover More
            <BiChevronRight className="text-xl mt-1" />
          </p>
        </div>
        <div className="bg-black h-[5px] w-32 my-1 relative top-[7px] left-2">
        </div>
        <div className="bg-gray-700 h-[1px] w-full my-1 bg-gradient-to-l from-slate-50">
        </div>
        <div className=" w-full flex justify-start  items-center gap-8 sm:gap-16 md:gap-2 my-5 overflow-x-hidden  player-container py-10">
          {
            News.length > 0
              ?
              News.map((item, index) => {
                return (
                  <News_cards
                    key={index}
                    id={item.id}
                    photo={item.photo}
                    heading={item.heading}
                    title1={item.title1}
                    title2={item.title2}
                    title3={item.title3}
                    date={item.date}
                  />
                )
              })
              :
              <div className="bg-red-100 w-full mt-4 text-center">
                <h4 className='text-red-700 font-medium p-2'>No Matches Found</h4>
              </div>
          }
        </div>

      </div>
    </div>
  );
};



export default Dashboard;
