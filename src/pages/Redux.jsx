import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { increment, decrement } from "../redux/Toolkit"
export default function Redux() {

    const count = useSelector((state) => state.count)

    const dispatch = useDispatch()

    return (
        <div className="h-screen flex items-center justify-center">
            <button className="text-xl m-12 font-semibold text-white w-auto px-5 py-3 bg-blue-700 opacity-70 duration-300 hover:opacity-100 rounded-tl-lg rounded-br-lg" onClick={() => dispatch(increment())}>+</button>
            <p className="px-8 text-lg">{count}</p>
            <button className="text-xl m-12 font-semibold text-white w-auto px-5 py-3 bg-blue-700 opacity-70 duration-300 hover:opacity-100 rounded-tr-lg rounded-bl-lg" onClick={() => dispatch(decrement())}>-</button>
        </div>
    )

}