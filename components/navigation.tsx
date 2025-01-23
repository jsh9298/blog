"use client"; //클라이언트 컴포넌트를 의미하지 실제로 클라이언트 렌더가 되는 의미가 아님, components가 clients에서 hydration될것임을 명시
//또한, 클라이언트 컴포넌트는 서버 컴포넌트에 포함될수있지만, 반대는 그렇지않다.
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    console.log(path);
    return (
        <nav>
            <ul>
                <li><Link href='/'>Home</Link>{path === "/" ? "🐵" : ""}</li>
                <li><Link href='/profile'>Profile</Link>{path === "/profile" ? "🐵" : ""}</li>
            </ul>
        </nav>
    );
}