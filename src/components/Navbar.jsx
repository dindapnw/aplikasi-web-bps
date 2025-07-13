"use client"

const navItems = [
  { id: "publications", label: "Daftar Publikasi" },
  { id: "add", label: "Tambah Publikasi" },
  { id: "logout", label: "Logout" },
]

function BpsLogo() {
  return <img src="https://satudata.pemalangkab.go.id/public/logo_bps.png" alt="BPS Logo" className="h-12 w-12" />
}

export default function Navbar({ currentPage, setCurrentPage, onLogout }) {
  const handleLogoutClick = () => {
    const confirmLogout = window.confirm("Apakah Anda yakin ingin logout?")
    if (confirmLogout) {
      onLogout()
    }
  }

  return (
    <nav className="bg-[#0369A1] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <BpsLogo />
            <span className="text-white text-base md:text-lg font-bold tracking-wider hidden sm:block">
              BPS PROVINSI SULAWESI BARAT
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id
              const isImplemented = ["publications", "add"].includes(item.id)

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === "logout") {
                      handleLogoutClick()
                    } else if (isImplemented) {
                      setCurrentPage(item.id)
                    }
                  }}
                  disabled={!isImplemented && item.id !== "logout"}
                  className={
                    `px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 border border-transparent ` +
                    `${isImplemented || item.id === "logout" ? "cursor-pointer" : "cursor-not-allowed opacity-60"} ` +
                    `${
                      isActive && isImplemented
                        ? "bg-slate-200 text-sky-900 shadow-inner"
                        : "text-sky-100 hover:bg-sky-700 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
