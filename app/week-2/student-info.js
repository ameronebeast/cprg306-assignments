import Link from "next/link";

export default function StudentInfo() { 
  return (
    <main className="flex main-h-screen flex-col items-centre justify-centre bg-black-100 p-10">
        <div className="shadow-lg border border-orange-400 p-7 rounded-lg w-full bg-white">
            <p className="text-xl font-bold text-black">Hi Olusola, My name is Rudra Kainth</p>
            <p className="text-lg font-bold text-black mt-2">
                GitHub:
                <Link href="https://github.com/ameronebeast" className="text-orange-300 hover: text-orange-900 transition duration-200">ameronebeast
                </Link>
            </p>
      
        </div>
    </main>
  );
}