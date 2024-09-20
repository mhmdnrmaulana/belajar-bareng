"use server"

export default async function getNpm(npm: string) {
  const res = await fetch(`https://search-mahasiswa.vercel.app/api/mhs/${npm}`)
  const { data } = await res.json()

  return data
}
