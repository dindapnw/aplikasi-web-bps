import React from 'react';

export default function PublicationListPage({ publications, onEditPublication, onDeletePublication }) {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <header className="mb-8 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Daftar Publikasi BPS Provinsi Sulawesi Barat</h1>
                <p className="text-gray-500 mt-1">Sumber data publikasi terkini</p>
            </header>
            <div className="relative overflow-x-auto shadow-xl rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-white uppercase bg-slate-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center w-16">No</th>
                            <th scope="col" className="px-6 py-3">Judul</th>
                            <th scope="col" className="px-6 py-3">Tanggal Rilis</th>
                            <th scope="col" className="px-6 py-3 text-center">Sampul</th>
                            <th scope="col" className="px-6 py-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publications.map((pub, idx) => (
                            <tr key={pub.id} className="bg-white border-b hover:bg-gray-50 transition-colors duration-200">
                                <td className="px-6 py-4 font-medium text-gray-900 text-center">{idx + 1}</td>
                                <td className="px-6 py-4 font-semibold text-gray-800">{pub.title}</td>
                                <td className="px-6 py-4 text-gray-600">{pub.releaseDate}</td>
                                <td className="px-6 py-4 flex justify-center items-center">
                                    <img
                                        src={pub.coverUrl}
                                        alt={`Sampul ${pub.title}`}
                                        className="h-24 w-auto object-cover rounded shadow-md hover:scale-105 hover:brightness-110 transition duration-300"
                                        onError={e => {
                                            e.target.onerror = null; 
                                            e.target.src = 'https://placehold.co/100x140/cccccc/ffffff?text=Error';
                                        }}
                                    />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() => onEditPublication(pub)}
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-blue-50 transition-colors duration-200 group"
                                        title="Edit Publikasi"
                                    >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                                        alt="Edit"
                                        className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                                    />
                                    </button>
                                    <button
                                        onClick={() => onDeletePublication(pub)}
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-red-50 transition-colors duration-200 group"
                                        title="Hapus Publikasi"
                                    >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
                                        alt="Delete"
                                        className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                                    />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}