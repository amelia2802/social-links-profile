import Hero from "./Hero"
import SocialBody from "./SocialBody"

export default function Card(){
    return(
        <section className="w-1/4 h-auto sm:max-md:w-3/4 px-8 py-5 relative top-24 rounded-lg m-auto bg-darkgrey flex flex-col justify-start text-center items-center">
            <Hero />
            <SocialBody />
        </section>
    )
}