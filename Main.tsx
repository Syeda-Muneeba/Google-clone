'use client'
import 'regenerator-runtime';
import Image from "next/image";

import image from '../components/image.png';
import {CiSearch} from 'react-icons/ci';
import {IoMicOutline} from 'react-icons/io5';
import {FaMicrophone} from 'react-icons/fa'
import {FaCamera} from 'react-icons/fa';
import { useState } from "react";
import { useRouter } from "next/navigation";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';




const Main: React.FC = () => {
    const [search, setSearch] = useState<string>('');

        const {
          transcript,
          listening,
          resetTranscript,
          browserSupportsSpeechRecognition
        } = useSpeechRecognition();
      

    const router = useRouter();


    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        router.push(`https://www.google.com/search?q=${search}`)
    }

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: 'en' });
    }
    const stopListening = () => {
        SpeechRecognition.stopListening();
        setSearch(transcript);
    }

    if (!browserSupportsSpeechRecognition) {
        return null;
      }


    return (
        <div className="items-center flex flex-col mt-20">
            <Image 
            src={image} 
            alt="Image" 
            height={100}
            width={270}
            />
            <form 
            className="flex border mt-1 px-5 py-2 rounded-full w-2/5 items-center hover:shadow-md"
            onSubmit={(e) => onSearchSubmit(e)}
            >
                <CiSearch className="text-xl text-slate-400"/>
                <input
                 type="text" 
                 className="w-full focus:outline-none ml-4"
                 onChange={(e) => setSearch(e.target.value)}
                 value={search || transcript}
                 />
                 {
                    listening ?
                    <FaMicrophone
                    className="text-3xl text-slate-400 mr-5"
                    onClick={(e) => stopListening()}
                    />
                    :
                    <IoMicOutline
                    className="text-3xl text-slate-400 mr-5"
                    onClick={(e) => startListening()}
                    />
                 }
                <FaCamera className="text-3xl text-slate-400"/>
            </form>
            <div className="mt-7">
                <button
                 className="bg-slate-100 mr-3 py-2 px-4 text-sm rounded hover:border"
                 onClick={(e) => onSearchSubmit(e)}>Google Search</button>
                <button 
                className="bg-slate-100 mr-3 py-2 px-4 text-sm rounded hover:border"
                onClick={() => router.push('https://www.google.com/doodles')}>I'm Feeling Lucky</button>
            </div>
        </div>
    )
}

export default Main;