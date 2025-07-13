import React from 'react';

export default function DeleteConfirmationModal({ publication, onConfirm, onCancel }) {
    if (!publication) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                        <div className="flex-shrink-0">
                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Konfirmasi Hapus
                            </h3>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-4">
                            Apakah Anda yakin ingin menghapus publikasi berikut?
                        </p>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-start space-x-3">
                                <img
                                    src={publication.coverUrl}
                                    alt={`Sampul ${publication.title}`}
                                    className="h-16 w-auto object-cover rounded shadow-sm flex-shrink-0"
                                    onError={e => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://placehold.co/100x140/cccccc/ffffff?text=Error';
                                    }}
                                />
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                                        {publication.title}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        Tanggal Rilis: {publication.releaseDate}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                            <div className="flex">
                                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                <p className="ml-2 text-sm text-red-700">
                                    <strong>Peringatan:</strong> Tindakan ini tidak dapat dibatalkan. Publikasi akan dihapus secara permanen.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                        >
                            Batal
                        </button>
                        <button
                            type="button"
                            onClick={() => onConfirm(publication.id)}
                            className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}