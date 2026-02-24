import ExploreBtn from "@/components/ExploreBtn"
import FeaturedEventsSection from "@/components/FeaturedEventsSection"

const Home = () => {

  return (
    <section>
      <h1 className="text-center">The Hub For Every Dev <br /> Event You Can&apos;t Miss</h1>
      <p className="text-center mt-5" >Hackathons, Meetups, and Conferences, All in one Place</p>

      <ExploreBtn />

      <FeaturedEventsSection />

    </section>
  )
}

export default Home
