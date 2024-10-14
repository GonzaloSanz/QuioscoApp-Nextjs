"use client"
import { useRouter } from "next/navigation"

const GoBackButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="bg-amber-400 w-full lg:w-auto text-lg px-5 py-2 text-center font-bold cursor-pointer"
        >Volver</button>
    )
}

export default GoBackButton