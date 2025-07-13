import React, { useState } from 'react';
export default function AddPublicationPage({ onAddPublication, setCurrentPage }) {
    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [coverFile, setCoverFile] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !releaseDate) {
            alert('Judul dan Tanggal Rilis harus diisi!');
            return;
        }
        let coverUrl = '';
        if (coverFile) {
            // Tidak bisa copy file langsung di browser, jadi kita simpan URL lokal sementara
            coverUrl = URL.createObjectURL(coverFile);
            // Di dunia nyata, upload ke server atau gunakan backend
        } else {
            coverUrl = `https://placehold.co/200x280/7f8c8d/ffffff?text=${encodeURIComponent(title)}`;
        }
        const newPublication = {
            id: Date.now(),
            title,
            releaseDate,
            description: 'Deskripsi untuk publikasi baru ini akan ditambahkan kemudian.',
            coverUrl,
        };
        onAddPublication(newPublication);
        setCurrentPage('publications');
        setTitle('');
        setReleaseDate('');
        setCoverFile(null);
    };
    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Form Tambah Publikasi Baru</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>

                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Judul</label>

                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                        placeholder="Contoh: Indikator Ekonomi Sulawesi Barat 2025"
                    />
                </div>
                <div>

                    <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-700 mb-1">Tanggal Rilis</label>

                    <input
                        type="date"
                        id="releaseDate"
                        value={releaseDate}
                        onChange={e => setReleaseDate(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                    />
                </div>
                <div>
                    <label htmlFor="cover" className="block text-sm font-medium text-gray-700 mb-1">Sampul (Gambar)</label>
                    <input
                        type="file"
                        id="cover"
                        accept="image/*"
                        onChange={e => setCoverFile(e.target.files[0])}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-6 rounded-lg
transition-colors duration-300"
                    >
                        Tambah
                    </button>
                </div>
            </form>
        </div>
    );
}