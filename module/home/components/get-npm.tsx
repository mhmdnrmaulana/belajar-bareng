"use client"
import getNpm from "@/service/getNpm"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function GetNpm() {
  const [npm, setNpm] = useState<string>("")

  const [loading, setLoading] = useState<boolean>(false)

  const [error, setError] = useState<string>("")

  const { push } = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setError("")

    try {
      const data = await getNpm(npm)

      if (npm)
        if (data && data.university.trim() === "UNIVERSITAS INDRAPRASTA PGRI") {
          push("https://chat.whatsapp.com/FJUgDcOqj9R0pebEi3UJ43")
        } else {
          setError("Yang Bisa Masuk Unindra-Unindra Ajeh.")
        }
    } catch (error) {
      setError("data invalid")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
          <input type="text" id="npm" value={npm} onChange={(e) => setNpm(e.target.value)} className="w-full p-2 border rounded font-sans mb-2 text-secondary text-center bg-transparent" required placeholder="Silahkan isi NPM untuk join" />
        </div>
        {error && <p className="text-red-500 my-4">{error}</p>}
        <button type="submit" className=" border border-white py-3 px-16 rounded-md text-white text-xl hover:text-secondary hover:animate-blink mt-2" disabled={loading}>
          {loading ? "Memeriksa..." : "Join Now"}
        </button>
      </form>
    </div>
  )
}
