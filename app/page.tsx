import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex justify-center p-8">
      <main className="flex flex-col items-center gap-8 w-full max-w-4xl">
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          <Link href="/exam" className="flex-1">
            <div className="h-48 p-6 rounded-xl border hover:shadow-lg transition-all bg-white dark:bg-gray-800">
              <h2 className="text-2xl font-bold mb-4">Sınavlar</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Tüm sınavları görüntüle ve yönet
              </p>
            </div>
          </Link>
          
          <Link href="/lesson" className="flex-1">
            <div className="h-48 p-6 rounded-xl border hover:shadow-lg transition-all bg-white dark:bg-gray-800">
              <h2 className="text-2xl font-bold mb-4">Dersler</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Ders listesini görüntüle ve yönet
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
