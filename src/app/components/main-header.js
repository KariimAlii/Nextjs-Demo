import Link from "next/link";
import logoImg from '@/assets/logo.png';
export default function MainHeader() {
    return (
        <heaeder>
            <Link href="/">
                <img src={logoImg.src} alt="a plate with food on it image"/>
                Next Level Food
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                </ul>
            </nav>
        </heaeder>
    )
}