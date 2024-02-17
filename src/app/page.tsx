import {turrent_road} from './fonts'

export default function Home(){
  return (   
    <>
      <div className={`${turrent_road.className} home h-[85vh] flex justify-center items-center`}>
        <p className='pb-20'>vijayaditya.source</p>
      </div>
      <div className="relative ">
        <div className="absolute inset-x-0 text-center bottom-0">COPYRIGHT2024</div>
      </div>

    </>
  )
}