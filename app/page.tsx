import FirstSection from '@/components/home/firstSection'
import SecondSection from '@/components/home/secondSection'
import ThirdSection from '@/components/home/thirdSection'
import NavBar from '@/components/navbar/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-full w-full" id="firstSecDiv">
      <NavBar/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  )
}
