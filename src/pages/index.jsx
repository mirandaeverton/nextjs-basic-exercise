import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href='/page1'>Página de Teste 1</Link>
      <Link href='/page2'>Página de Intergração com API</Link>
    </div>
  )
}
