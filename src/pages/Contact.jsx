export default function Contact() {
    return (
        <div className="max-w-screen mx-auto bg-gradient-to-b from-rose-400 via-indigo-500 to-pink-500 text-center lg:p-12 py-12" id="contact">
            <h1 className="text-5xl font-bold my-2 ">Contact Me</h1>
            <div className="lg:w-3/12 w-full bg-pink-400 h-1 rounded lg:mx-auto my-4"></div>
            <div className="bg-gray-100 lg:w-3/4 mx-auto rounded-lg text-center m-5 p-8">
                <h1 className="text-2xl font-semibold">Ingin menghubungi saya?</h1>
                <p className="opacity-70 pt-2 pb-8">Tolong kirimkan pesan</p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="nama" className="font-medium opacity-70">NAMA LENGKAP</label>
                    <input type="text" placeholder="Nama Lengkap" className="w-full mx-auto shadow-md m-3 p-2 rounded-md" id="nama" />
                    <label htmlFor="email" className="font-medium opacity-70">EMAIL</label>
                    <input type="email" placeholder="Email" className="w-full mx-auto shadow-md m-3 p-2 rounded-md" id="email" />
                    <label htmlFor="messege" className="font-medium opacity-70">PESAN</label>
                    <textarea rows="4" placeholder="Tuliskan pesan" className="w-full mx-auto shadow-md m-3 p-2 rounded-md" id="messege" />
                    <button className="text-xl font-semibold text-white w-auto py-3 px-5 bg-blue-700 opacity-70 duration-300 hover:opacity-100 m-4 rounded-lg">KIRIM PESAN</button>
                </form>
            </div>
        </div>
    )
}