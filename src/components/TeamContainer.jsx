import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import teamHero from "../images/team-hero.jpg";
import team1 from "../images/team-1.jpg";
import team2 from "../images/team-2.jpg";
import team3 from "../images/team-3.jpg";
import team4 from "../images/team-4.jpg";
import TeamMemberCard from "./TeamMemberCard";
import { members } from "../data/members";

function TeamContainer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center gap-2 mt-4 text-[16px]">
        <h2 className="text-[#737373] text-[16px] font-semibold mx-10">
          WHAT WE DO
        </h2>
        <h1 className="text-[#252B42] text-[40px] font-bold mx-10">
          Innovation tailored for you
        </h1>
        <h2 className="flex mb-12">
          <span className="font-semibold">Home</span>
          <ChevronRight />
          Team
        </h2>
        <div className="lg:flex lg:flex-row lg:w-full lg:h-full">
          <img src={teamHero} className="lg:w-1/2 lg:h-full lg:object-cover" />
          <div className="lg:flex lg:flex-col lg:">
            <div className="flex mt-2 lg:mt-0 lg:h-1/2 lg:w-full">
              <img
                src={team1}
                className="w-1/2 lg:w-1/2 lg:h-full border-r-3 border-white object-cover lg:object-cover"
              />
              <img src={team2} className="w-1/2 lg:h-full lg:w-1/2" />
            </div>
            <div className="flex mt-2 lg:h-[30rem]">
              <img
                src={team3}
                className="w-1/2 lg:w-1/2 lg:h-full border-r-3 border-white h-[20rem] object-cover"
              />
              <img
                src={team4}
                className="w-1/2 h-[20rem] lg:h-full object-cover lg:object-top lg:w-1/2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10 flex flex-col justify-center items-center my-20 font-bold text-[40px]">
        <h1 className="mx-4 text-center">Meet Our Team</h1>
        <TeamMemberCard members={members} />
      </div>
      <div className="flex flex-col justify-center items-center px-10">
        <h1 className="text-[40px] text-[#252B42] text-center font-bold">
          Start your 14 days free trial
        </h1>
        <p className="text-center mt-8 text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="mt-8 text-white bg-[#23A6F0] px-10 py-4 rounded-xl">
          Try it free now
        </button>
        <div className="flex flex-row gap-10 my-10">
          <Twitter className="text-sky-500 hover:text-sky-700 w-9 h-9" />
          <Facebook className="text-blue-600 hover:text-blue-800 w-9 h-9" />
          <Instagram className="text-pink-500 hover:text-pink-600 w-9 h-9" />
          <Linkedin className="text-blue-600 hover:text-blue-800 w-9 h-9" />
        </div>
      </div>
    </>
  );
}

export default TeamContainer;
