"use client"

import { useState } from "react"

export default function LoginPage({ onLogin }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("") // Clear previous error

        // Simple validation - just check if both fields are filled
        if (email.trim() && password.trim()) {
            onLogin() // Just call onLogin if both fields have something
        } else {
            setError("Silakan isi email dan password")
        }
    }

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value)
        if (error) setError("") // Clear error when user starts typing
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <img src="https://satudata.pemalangkab.go.id/public/logo_bps.png" alt="BPS Logo" className="inline-flex items-center justify-center h-20 w-20" />
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Selamat Datang</h1>
                    <p className="text-gray-600">Masuk ke Publikasi BPS Sulawesi Barat</p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-red-600 text-sm font-medium">{error}</span>
                        </div>
                    </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleInputChange(setEmail)}
                            placeholder="Masukkan email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handleInputChange(setPassword)}
                            placeholder="Masukkan password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
