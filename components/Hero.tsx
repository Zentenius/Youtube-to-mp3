import React from 'react'
import { useRef, useState } from "react"
import { youtube_parser } from './utils';
import axios from "axios"
import { FormEvent } from 'react';

type Props = {}

function Hero({}: Props) {

    const inputUrlRef = useRef<any>()
    const [urlResult, setUrlResult] = useState(null);
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const youtubeID = youtube_parser(inputUrlRef.current.value);
        console.log(youtubeID)

        const options = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            params: {id: youtubeID},
            headers: {
              'X-RapidAPI-Key': '04799fdd3fmshf5c60cc72d75b6dp145ceajsnd53acb1962c1',
              'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            }

        }
        axios(options)
        .then(res => setUrlResult(res.data.link))
        .catch(err => console.log(err))

        inputUrlRef.current.value = ''
        
        
    }

    return (
        <section>
            <div className='container flex flex-col md:flex-row items-center px-6 space-y-0 md:space-y-0 mx-auto mt-10'>
                <div className='flex flex-col mb-32 space-y-12 md:space-y-8 md:w-1/2'>
                    <h1 className='max-w-md text-4xl font-bold text-center text-[#a6adba] md:text-5xl md:text-left'>Youtube to MP3 converter</h1>
                    <form onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                        <input ref={inputUrlRef} placeholder='Paste a Youtube url' type="text" className='peer h-10 w-full border-b-2 border-gray-300 text-white outline-none focus:border-rose-600 bg-transparent placeholder-transparent'></input>
                        <label className='left-0 -top-16 relative text-[#a6adba] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-top-8'>Paste a Youtube url</label>
                        <div className='flex justify-center md:justify-start mt-5'>
                            <button type="submit"
                                className="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-lg shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full rounded-lg text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Convert</span>
                                <span className="relative invisible">Convert</span>
                            </button>
                        </div>
                    </form>
                    {urlResult ? <a target='_blank' rel="noreferrer" href={urlResult} className="underline text-[#a6adba] flex justify-center md:justify-start">Download MP3</a> : ''}
                </div>
            </div>
        </section>
    )
}

export default Hero