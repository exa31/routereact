import { useNavigate } from "react-router-dom"

export default function ErrosPage() {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-9xl text-center">Maaf halaman tidak ditemukan</h1>
            <button className="text-xl m-12 font-semibold text-white w-auto px-5 py-3 bg-blue-700 opacity-70 duration-300 hover:opacity-100 rounded-tl-lg rounded-br-lg" onClick={() => navigate("/")}>Back to home</button >
        </div>
    )
}