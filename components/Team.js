import Image from "next/image";
import React from "react";
import Profile1 from "../public/Profile1.jpg";

const Team = () => {
  return (
    <div
      id="team"
      className="w-full min-h-screen flex flex-col justify-start items-center gap-8 py-28"
    >
      <h1 className="tabletLg:text-7xl mobileLg:text-5xl text-4xl text-center font-medium text-dark_blue">
        Meet our Team of Creators
      </h1>
      <p className="font-medium text-center">
        To be the company our customer want us to be ,it takes electic group of
        passionate operators.
      </p>
      <div className="w-full flex flex-wrap justify-evenly items-center gap-7">
        <div className="flex flex-col justify-start gap-3 py-5 px-4 items-center w-[22rem] h-[26rem]">
          <Image
            className="w-[80%] h-[80%] object-cover rounded-lg"
            src={Profile1}
          />
          <div className="flex flex-col justify-start items-center gap-1">
            <h1 className="text-xl font-medium">John Doe</h1>
            <p className="text-sm  italic">Founder and CEO</p>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-3 py-5 px-4 items-center w-[22rem] h-[26rem]">
          <img
            className="w-[80%] h-[80%] rounded-lg"
            src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
            alt="profile2"
          />
          <div className="flex flex-col justify-start items-center gap-1">
            <h1 className="text-xl font-medium">Mia Ward</h1>
            <p className="text-sm  italic">Head of Engineering</p>
          </div>
        </div>

        <div className="flex flex-col justify-start gap-3 py-5 px-4 items-center w-[22rem] h-[26rem]">
          <img
            className="w-[80%] h-[80%] object-cover rounded-lg"
            src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs="
            alt=""
          />
          <div className="flex flex-col justify-start items-center gap-1">
            <h1 className="text-xl font-medium">John Wick</h1>
            <p className="text-sm  italic">CTO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
