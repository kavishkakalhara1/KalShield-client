import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl'>
        <div className="flex flex-col justify-center flex-1">
            <h2 className='text-2xl'>
                Want to learn more about CyberSecurity?
            </h2>
            <p className='my-2 text-white-500'>
                Checkout 
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-bl-none rounded-tl-xl'>
                <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
                    Baby Hacker YouTube channel
                </a>
            </Button>
        </div>
        <div className="flex-1 p-7">
            <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" />
        </div>
    </div>
  )
}