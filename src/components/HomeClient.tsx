"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function HomeClient({email}:{email:string}) {

  const HandleLogin = () => {
    window.location.href="/api/auth/login";
  }
  const firstLetter = email? email[0].toUpperCase():"";
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler=(e:MouseEvent)=>{
      if(popupRef.current && !popupRef.current.contains(e.target as Node)){
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className=" min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden">
      <motion.div
      initial={{ y: -100}}
      animate={{ y: 0}}
      transition={{ duration: 0.5 }}
       className=" fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className=" text-lg font-semibold tracking-tight">
            Support <span className=" text-zinc-400"> AI</span>
          </div>
          {email?<div className=" relative" ref={popupRef}>
            <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold hover:scale-105 transition" onClick={()=>setOpen(!open)}>{firstLetter}</button>
            <AnimatePresence>
            {open && (
              <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
               className="absolute rigth-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden">
                <button className=" w-full text-left px-4 py-3 text-sm hover:bg-zinc-100">Dashboard</button>
                <button className=" block w-full text-left text-red-600 px-4 py-3 text-sm hover:bg-zinc-100">LogOut</button>
              </motion.div>
            )}
            </AnimatePresence>
          </div>:
          <button className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60 flex items-center gap-2" onClick={HandleLogin} >
            Login
          </button>}
          
        </div>
      </motion.div>
      <section>
        <div className=" pt-36 pb-28 px-6">
         <div className=" max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
         <motion.div 
         initial={{ opacity: 0, y: 40 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5}}>
          <h1 className=" text-4xl md:text-5xl font-semibold leading-tight">Custumer Support<span className=" text-zinc-400"> AI</span> <br />Build for modren websites</h1>
          <p className=" mt-6 text-lg text-zinc-600 max-w-xl">
            Add a powerful AI chatbot to your website to deliver 24/7 instant support, intelligently understand and respond to customer inquiries in real time, boost customer satisfaction, reduce response times, and streamline your support operations for maximum efficiency.
          </p>
          <div className=" mt-10 flex items-center gap-4">

            {email?<button className=" px-7 py-3 rounded-xl bg-black text-white font-medium hover:bg-zinc-800 transition disabled:opacity-60">
              Go to Dashboard
            </button>:<button className=" px-7 py-3 rounded-xl bg-black text-white font-medium hover:bg-zinc-800 transition disabled:opacity-60" onClick={HandleLogin}>
              Get Started
            </button>}
            
            <a href="#feature" className=" px-7 py-3 rounded-xl border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition">
              Learn More
            </a>

          </div>

         </motion.div>
         <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.7, delay: 0.2 }}
         className=" relative">
          <div className=" rounded-2xl bg-white shadow-2xl border border-zinc-200 p-6">
            <div className=" text-sm text-zinc-500 mb-3">Live Chat Preview</div>
            <div className=" space-y-3">
              <div className=" bg-black text-white rounded-lg px-4 py-2 text-sm ml-auto w-fit">Do you offer cash on delivery?</div>
              <div className=" bg-zinc-100 rounded-lg px-4 py-2 text-sm w-fit">Yes, we do offer cash on delivery for all orders.</div>
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-black text-white flex items-center justify-around shadow-xl"
            >
              💭
            </motion.div>
          </div>
   

         </motion.div>
         </div>
        </div>
      </section>
      <section
      id="feature"
       className=" py-28 px-6 border-t border-zinc-200 bg-zinc-50">
        <div className=" max-w-6xl mx-auto ">
          <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{once:false}}
          className=" text-3xl font-semibold text-center">
            Why Businesses Choose <span className=" text-zinc-400">Support AI</span>
          </motion.h1>
        </div>


      </section>
    </div>
  );
}

export default HomeClient;
