'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const path = usePathname();
    const [count, setCount] = useState(0);

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Home {path === '/' ? "🔥" : ""}</Link>
                    </li>
                    <li>
                        <Link href='/about-us'>About Us {path === '/about-us' ? "🔥" : ""}</Link>
                    </li>
                </ul>
            </nav>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>

    )
}