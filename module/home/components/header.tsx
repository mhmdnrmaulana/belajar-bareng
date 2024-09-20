import GetNpm from "./get-npm"

export default function Header() {
  return (
    <div className="w-3/4 mx-auto text-center my-16">
      <h2 className="font-sans font-bold text-xl text-secondary">From Zero to Hero</h2>
      <h1 className="text-5xl my-2">Komunitas Coding Universitas Indra Prasta PGRI</h1>
      <p className="font-serif text-lg mb-16">Komunitas ini ditujukan bagi seluruh mahasiswa Universitas Indra Prasta PGRI, bertujuan untuk saling belajar, berbagi, bertanya dan berdiskusi tentang coding</p>

      <GetNpm />
    </div>
  )
}
