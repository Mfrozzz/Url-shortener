import logo from "../../assets/linkLogo.png";

export default function Footer() {
    return (
        <footer className="w-full bg-blue-900 text-white py-6 mt-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
                <div className="flex items-center gap-2">
                    <img alt="link" src={logo} className="h-8 w-auto" />
                    <span className="font-semibold">URL Shortener</span>
                </div>
                <div className="text-sm text-blue-200">
                    © {new Date().getFullYear()} Developed by <a href="https://github.com/Mfrozzz" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Marcos Vinicius Schimaichel Boava</a>
                </div>
            </div>
        </footer>
    );
}