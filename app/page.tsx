import HomeContainer from "@/components/Home/HomeContainer";


export default async function Home() {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2500);
  })
  return (
    <main className="section swiper-container swiper-slider swiper-slider-1 swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden">
     <HomeContainer/>
    </main>
  );
}
