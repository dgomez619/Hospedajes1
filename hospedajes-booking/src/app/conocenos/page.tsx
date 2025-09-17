import Link from "next/link";

export default function Conocenos() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Conócenos</h1>
      <p className="mb-4">Bienvenido a nuestra página de Conócenos. Aquí puedes aprender más sobre nuestra empresa y nuestro equipo.</p>
      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">Volver a Inicio</Link>
    </div>
  )
}