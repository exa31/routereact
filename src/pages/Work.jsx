import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import framework from '../assets/framework.jpg'

export default function Work() {
    return (
        <div className="bg-green-100 text-center flex items-center flex-col py-14 px-10" id="work">
            <h1 className="text-5xl font-bold  my-2 ">My Recent Work</h1>
            <div className="w-3/12 bg-pink-400 h-1 rounded mx-auto my-4"></div>
            <p className=" opacity-70">Berikut adalah pekerjaan terbaru saya</p>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img className="rounded-md shadow-xl h-40 mx-auto" src={img1} alt="img1" />
                    <h1 className="text-xl font-bold my-2">Sistem Informasi Penelitian</h1>
                    <p className="opacity-70">Sistem Informasi Penelitian untuk dosen dan mahasiswa di Univeritas Lorem</p>
                    <button
                        className="text-xl m-12 font-semibold text-white w-auto px-5 py-3 bg-blue-700 opacity-70 duration-300 hover:opacity-100 rounded-tl-lg rounded-br-lg">
                        Detail</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img className="rounded-md shadow-xl h-40 mx-auto" src={img2} alt="img1" />
                    <h1 className="text-xl font-bold my-2">Sistem Informasi Perpustakaan</h1>
                    <p className="opacity-70">Sistem Informasi Perpustakaan untuk Perpustakaan kota Lorem</p>
                    <button
                        className="text-xl font-semibold text-white w-auto px-5 py-3 bg-blue-700 opacity-70 duration-300 hover:opacity-100 m-12 rounded-tl-lg rounded-br-lg">
                        Detail</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img className="rounded-md shadow-xl h-40 mx-auto" src={framework} alt="img1" />
                    <h1 className="text-xl font-bold my-2">Sistem Informasi Keuangan</h1>
                    <p className="opacity-70">Sistem Informasi Keuangan untuk perusahaaan Lorem</p>
                    <button
                        className="text-xl font-semibold text-white w-auto px-5 py-3 bg-blue-700 opacity-70 duration-300 hover:opacity-100 m-12 rounded-tr-lg rounded-bl-lg">
                        Detail</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img className="rounded-md shadow-xl h-40 mx-auto" src={img1} alt="img1" />
                    <h1 className="text-xl font-bold my-2">Sistem Informasi Asset</h1>
                    <p className="opacity-70">Sistem Informasi Asset untuk Laboratorium Lorem</p>
                    <button
                        className="text-xl font-semibold text-white w-auto px-5 py-3 bg-blue-700 opacity-70 duration-300 hover:opacity-100 m-12 rounded-tr-lg rounded-bl-lg">
                        Detail</button>
                </div>
            </div>
        </div>
    )
}