import Link from 'next/link';

export default function Header({ title }: { title: string; }) {
    return (
        <header className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/">
                        <span>{title}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

