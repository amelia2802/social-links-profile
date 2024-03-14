import profilePicture from "../assets/images/avatar-jessica.jpeg"
export default function Hero(){
    return(
        <section className="font-inter">
            <img className="m-auto w-2/5 rounded-full" src={profilePicture} alt="jessica" />
            <h1 className="text-lg font-bold text-white ">Jessica Randal</h1>
            <p className="text-sm text-green">London, United Kingdom</p>
            <p className="mt-5 text-sm text-white">"Front-end developer and avid reader."</p>
        </section>
    )
}