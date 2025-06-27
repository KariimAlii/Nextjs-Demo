import '../globals.css';
import MainHeader from "@/app/components/main-header/main-header";
import MainHeaderBackground from "@/app/components/main-header/main-header-background";

export const metadata = {
    title: 'NextLevel Food',
    description: 'Delicious meals, shared by a food-loving community.',
};

export default function AuthRootLayout({ children }) {
    return (
        <>
            <header>
                <h3>Welcome Back</h3>
            </header>
            <form>
                <button>Logout</button>
            </form>
            {children}
        </>
    );
}
