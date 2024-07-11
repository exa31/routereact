import frameWork from '../assets/framework.jpg'

export default function Skill() {
    return (
        <div className=" m-auto " id="skill">
            <div className="h-screen flex items-center flex-wrap p-10 justify-around gap-2">
                <div className="w-full md:w-4/12">
                    <img className="my-auto shadow-2xl rounded-2xl" src={frameWork} alt="img" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold  my-2 text-center">Skill Framework</h1>
                    <div className="w-8/12 bg-pink-400 h-1 rounded mx-auto my-4"></div>
                    <div className="opacity-70">
                        <p>Berikut adalah item dan skala keahlian untuk framework:</p>
                        <div className="grid grid-cols-2 py-2 items-center pr-2">
                            <p>Tailwindcss</p>
                            <div className="w-full gradient-skill h-5 rounded "></div>
                        </div>
                        <div className="grid grid-cols-2 py-1 items-center pr-2">
                            <p>Bootstrap</p>
                            <div className="w-3/5 gradient-skill h-5 rounded "></div>
                        </div>
                        <div className="grid grid-cols-2 py-1 items-center pr-2">
                            <p>Codeligniter</p>
                            <div className="w-2/5 gradient-skill h-5 rounded "></div>
                        </div>
                        <div className="grid grid-cols-2 py-1 items-center pr-2">
                            <p>Laravel</p>
                            <div className="w-3/12 gradient-skill h-5  rounded "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}