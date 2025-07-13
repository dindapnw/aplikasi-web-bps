"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import PublicationListPage from "./components/PublicationListPage"
import AddPublicationPage from "./components/AddPublicationPage"
import EditPublicationPage from "./components/EditPublicationPage"
import DeleteConfirmationModal from "./components/DeleteConfirmationModal"
import Footer from "./components/Footer"
import LoginPage from "./components/LoginPage"

const initialPublications = [
  {
    id: 1,
    title: "Daftar Nama Wilayah Administrasi Provinsi Sulawesi Barat Semester II 2024",
    releaseDate: "2025-04-28",
    coverUrl:
      "https://web-api.bps.go.id/cover.php?f=BBI52aaLcNE4r/BESgTdv0JUZ2xhNjdTZ2NRYm5jSGtzQ3YxbnpkN25TU3h4b2lmRVRybHJzOTQ4NFlINWYwL3pXYllHclUwaXc3dkZhYzNpWFlyb1F1SEg3QXY4YzAvTXpDZkJVK0E3SUd1dVlSejVIaWtNS0Y0WmZKbThzVEFYdWRLckE3RVY0Vjh2M3FY",
  },
  {
    id: 2,
    title: "Nilai Tukar Petani Provinsi Sulawesi Barat",
    releaseDate: "2025-04-10",
    coverUrl:
      "https://sulbar.bps.go.id/_next/image?url=https%3A%2F%2Fweb-api.bps.go.id%2Fcover.php%3Ff%3DvuGrAhG8Q1ShxBn5cbO%2F%2FmxaY29xdy84T2FQdmFWUkV1UEg2bURlY0tJRGRBTExZazJaOFZOV0dpcE52VlRGbVRtRm82clNGdy9sUHNKWWFndERKSjB3RjBRZnUrdnF3dkU4NVNLalByKzZId2JjSmpERUhqSld3NmJLeU0rZFVsdVl4UGF4ZnRnS21JUHVr&w=3840&q=75",
  },
  {
    id: 3,
    title: "Katalog Publikasi BPS Provinsi Sulawesi Barat 2024",
    releaseDate: "2025-03-27",
    coverUrl:
      "https://sulbar.bps.go.id/_next/image?url=https%3A%2F%2Fweb-api.bps.go.id%2Fcover.php%3Ff%3DBLCzviTJuwQyTRfZtBKWKkpjWDd1dkF2QUxIWkhHbWFpMEVnVnMxOWdQbWNINVFlQmJDREJHbnlJanJmU2lPZUdCZUc2Q2NRZFEzLzhaVHk2bk1Qb0ZURThVWEdqTXBoWGY0MWU1TkJnRHFoOE1QSEhVUFdHQWNXN2lmVFlRb3BqOGZURlNrNENxa2FvRHFY&w=3840&q=75",
  },
  {
    id: 4,
    title: "Profil Usaha Konstruksi Perorangan Provinsi Sulawesi Barat, 2022",
    releaseDate: "2023-12-22",
    coverUrl:
      "https://www.bps.go.id/_next/image?url=https%3A%2F%2Fweb-api.bps.go.id%2Fcover.php%3Ff%3DNIbd3OQ1bF1j997S3veOMUlGS2grNG5LVnZHVWVxR1JhKzJHalluaE9CZFlHdTIvNjdabWJKYWlxVlBIc0MwbTJ5VGcwRCtYTy9oV2w1Z2tYS1hnQzByQlQ4bWVoQ0RTTHhkL2NYQmwyc2tHRitKaFFsOHVKS0o4NTFaVGJLbFJ3aTBqMDBhQUsrMFYwTUI5&w=3840&q=75",
  },
]

export default function App() {
  const [publications, setPublications] = useState(initialPublications)
  const [currentPage, setCurrentPage] = useState("publications")
  const [selectedPublication, setSelectedPublication] = useState(null)
  const [publicationToDelete, setPublicationToDelete] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // If not logged in, show login page
  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />
  }

  const handleAddPublication = (newPub) => {
    setPublications([newPub, ...publications])
  }

  const handleEditPublication = (publication) => {
    setSelectedPublication(publication)
    setCurrentPage("edit")
  }

  const handleSavePublication = (formData) => {
    setPublications((prev) =>
      prev.map((pub) =>
        pub.id === selectedPublication.id ? { ...pub, ...formData, id: selectedPublication.id } : pub,
      ),
    )
    setCurrentPage("publications")
    setSelectedPublication(null)
  }

  const handleCancelEdit = () => {
    setCurrentPage("publications")
    setSelectedPublication(null)
  }

  const handleDeletePublication = (publication) => {
    setPublicationToDelete(publication)
  }

  const handleConfirmDelete = (publicationId) => {
    setPublications((prev) => prev.filter((pub) => pub.id !== publicationId))
    setPublicationToDelete(null)
  }

  const handleCancelDelete = () => {
    setPublicationToDelete(null)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage("publications")
  }

  let pageContent
  if (currentPage === "add") {
    pageContent = <AddPublicationPage onAddPublication={handleAddPublication} setCurrentPage={setCurrentPage} />
  } else if (currentPage === "edit") {
    pageContent = (
      <EditPublicationPage
        publication={selectedPublication}
        onSave={handleSavePublication}
        onCancel={handleCancelEdit}
      />
    )
  } else {
    pageContent = (
      <PublicationListPage
        publications={publications}
        onEditPublication={handleEditPublication}
        onDeletePublication={handleDeletePublication}
      />
    )
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} onLogout={handleLogout} />
      <main className="p-4 sm:p-6 lg:p-8">{pageContent}</main>
      <Footer />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        publication={publicationToDelete}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  )
}