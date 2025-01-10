'use client';
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showDialog, setShowDialog] = useState(() => {
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('passwordVerified');
    }
    return true;
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const checkPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Kurstanbul2025') {
      setShowDialog(false);
      setError('');
      localStorage.setItem('passwordVerified', 'true');
    } else {
      setError('Verilen şifre yanlış');
    }
  };

  return (
    <div className="flex-1 flex justify-center p-8">
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Sürücü kursunuzun verdiği şifreyi girin</h2>
            <form onSubmit={checkPassword}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded mb-2 dark:bg-gray-700 dark:border-gray-600"
                placeholder="Şifre"
              />
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-600">
                Giriş
              </button>
            </form>
          </div>
        </div>
      )}

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
