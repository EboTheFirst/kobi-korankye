"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const navs = ["Biography", "Research"]

export default function Home() {
  const [selectedSectionNav, setSelectedSectionNav] = useState(navs[0]);
  const router = useRouter()

  return (
    <div className="relative">
      <div className="relative bg-gradient-to-b from-[#F2F2EF] to-[#E8E8E5] rounded-b-[6rem] px-[1.5rem] md:px-[5rem] py-[2.5rem] flex flex-col items-center">
        <div className="flex max-md:flex-col max-md:gap-[1.5rem] md:justify-between w-full">
          <div className="md:hidden flex gap-[0.5rem] items-center">
            <div className="text-sm text-[0.9rem] text-gray-700">Athens, GA | kobikorankye@uga.edu |+1 3309072708 </div>
          </div>

          <div className="flex gap-[1rem] items-center">
            {/* <div className="text-sm text-[0.9rem] text-gray-700 italic">kobikorankye@gmail.com</div> */}
            {/* <div className="rounded-full px-[1.2rem] py-[0.5rem] text-gray-700 text-[0.8rem] bg-white shadow">
              Copy
            </div> */}
            <div className="rounded-full px-[1.2rem] py-[0.5rem] text-gray-700 text-[0.8rem] bg-white shadow">
              CV
            </div>
          </div>

          <div className="max-md:hidden flex gap-[0.5rem] items-center">
            <div className="text-sm text-[0.9rem] text-gray-700">Athens, GA | kobikorankye@uga.edu |+1 3309072708 |</div>
            {/* <div className="text-sm text-[0.9rem] text-gray-700">/</div> */}
            {/* <div className="text-sm text-[0.9rem] text-gray-700">Research</div>
          <div className="text-sm text-[0.9rem] text-gray-700">/</div> */}
            {/* <div className="text-sm text-[0.9rem] text-gray-700">About me</div> */}

          </div>
        </div>
        <div className="flex max-md:flex-col max-md:justify-center md:items-center py-[2rem] gap-[2rem]">
          <Image
            width={200}
            height={200}
            alt="photo"
            src="/KobinaKorankyeBW.png"
            className="md:hidden rounded-full mx-auto object-cover"
          />
          <div className="flex-col text-center md:text-right">
            <div className="font-black text-gray-700 md:leading-[5rem] md:text-[5rem] leading-[4rem] text-[4rem]">
              <span className="text-rose-800">Kobi</span>na
              <br />
              <span className="">Korankye</span>
            </div>
            <div className="text-[0.9rem] text-gray-900 italic mt-[1rem]">
              "Philosophy PhD Candidate, University of Georgia"
            </div>
          </div>
          <Image
            width={200}
            height={200}
            alt="photo"
            src="/KobinaKorankyeToonBW.png"
            className="max-md:hidden border-b-2 border-rose-600 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col mt-[3rem] px-[1.5rem] md:px-[5rem]">
        <div className="flex gap-[2rem] mx-5">
          {
            navs.map((nav, index) => (
              <div key={index} onClick={() => { setSelectedSectionNav(nav) }} className={`text-[2rem] cursor-pointer pb-[0.25rem] text-zinc-600 box-border transition-all duration-200 ${nav == selectedSectionNav ? "border-b-2 border-rose-800" : "font-thin"}`}>{nav}</div>
            ))
          }
        </div>
        <div className="border-t border-l border-gray-300 rounded-tl-xl px-[2rem] p-[1rem] pb-[3rem]">
          {
            selectedSectionNav == navs[0] &&
            <>
              <div className="font-bold text-teal-800 text-[1.5rem] mt-[2rem]">
                Primary Interests
              </div>
              <div className="font-thin text-[1.3rem] mt-[0.5rem] ml-[1rem]">
                Epistemology, Artificial Intelligence, Philosophy of Language
              </div>
              <div className="font-bold text-teal-500 text-[1.5rem] mt-[3rem]">
                Secondary Interests
              </div>
              <div className="font-thin text-[1.3rem] mt-[0.5rem] ml-[1rem]">
                Applied Ethics, African Philosophy, Logic
              </div>
            </>
          }
          {
            selectedSectionNav == navs[1] &&
            <>
              <div className="font-bold text-teal-800 text-[1.5rem] mt-[2rem]">
                Publications
              </div>
              <div onClick={() => { router.push('http://rave.ohiolink.edu/etdc/view?acc_num=kent168420538470892') }} className="font-normal transition-all duration-300 tracking-[0.1rem] leading-tight text-[1rem] md:text-[1.16rem] mt-[0.5rem] ml-[1rem]">
                Korankye, K. O. (2023). MISGIVINGS ABOUT THE GIVEN: EXTERNALIST ELEMENTS IN BONJOUR’S INTERNALIST FOUNDATIONALISM. [Master's thesis, Kent State University]. OhioLINK Electronic Theses and Dissertations Center. <span className="italic text-[0.9rem] md:text-[1.125rem] cursor-pointer hover:underline font-normal text-sky-600">http://rave.ohiolink.edu/etdc/view?acc_num=kent168420538470892 </span>
                <br />
                <span className="text-sm">APA Style (7th edition)</span>
              </div>
              <div className="font-bold text-teal-500 text-[1.5rem] mt-[3rem]">
                Presentations
              </div>
              <div className="font-normal flex flex-col gap-[1.5rem] transition-all duration-300 tracking-[0.1rem] leading-tight mt-[0.5rem] ml-[1rem]">
                <div className="flex gap-[1rem] items-start">
                  <div className="flex-1 flex flex-col gap-[0.25rem]">
                    <div className="text-rose-600 medium text-[1.16rem]">Deepfakes, not Cheapfakes</div>
                    <div className="italic text-gray-700 text-[1rem]">Emerging Technologies and Social Ethics, University of Tennessee, Knoxville, TN</div>
                  </div>
                  <div>
                    Apr 2024
                  </div>
                </div>
                <div className="flex gap-[1rem] items-start">
                  <div className="flex-1 flex flex-col gap-[0.25rem]">
                    <div className="text-rose-600 medium text-[1.16rem]">Can Aesthetic Considerations Be The Sole Justification for Conservation?
                    </div>
                    <div className="italic text-gray-700 text-[1rem]">Integrative Conservation Conference, University of Georgia, Athens GA
                    </div>
                  </div>
                  <div>
                    Feb 2024
                  </div>
                </div>
                <div className="flex gap-[1rem] items-start">
                  <div className="flex-1 flex flex-col gap-[0.25rem]">
                    <div className="text-rose-600 medium text-[1.16rem]">Private Language by Accident: Implications of Wittgenstein's Private Language Argument on An Accidentally Private Language.</div>
                    <div className="italic text-gray-700 text-[1rem]">International Conference: Formal Philosophy 2023, Higher School of Economics, Moscow (online).</div>
                  </div>
                  <div>
                    Oct 2023
                  </div>
                </div>

              </div>
            </>
          }
        </div>

      </div>
    </div>

  );
}
