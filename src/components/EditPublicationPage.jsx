import React, { useState } from 'react';

export default function EditPublicationPage({ publication, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        title: publication?.title || '',
        releaseDate: publication?.releaseDate || '',
        coverFile: null,
        coverUrl: publication?.coverUrl || ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                coverFile: file,
                coverUrl: URL.createObjectURL(file)
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Publikasi</h2>
                
                <div className="space-y-6">
                    {/* Judul */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Judul
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Masukkan judul publikasi"
                            required
                        />
                    </div>

                    {/* Tanggal Rilis */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tanggal Rilis
                        </label>
                        <input
                            type="date"
                            name="releaseDate"
                            value={formData.releaseDate}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Sampul (Gambar) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Sampul (Gambar)
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        
                        {/* Preview Gambar */}
                        {formData.coverUrl && (
                            <div className="mt-4 flex justify-center">
                                <img
                                    src={formData.coverUrl}
                                    alt="Preview sampul"
                                    className="h-40 w-auto object-cover shadow-md border hover:scale-105 hover:brightness-110 transition duration-300"
                                    onError={e => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://placehold.co/100x140/cccccc/ffffff?text=Error';
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex justify-end space-x-3 pt-6">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                            Batal
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}