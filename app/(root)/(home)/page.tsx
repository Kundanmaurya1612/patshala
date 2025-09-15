"use client";
import { useEffect, useState } from "react";
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    setDate(new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now));
  }, []);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-end max-md:px-8 max-md:py-12 lg:p-16">
          <div className="flex flex-col gap-6 p-6">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
