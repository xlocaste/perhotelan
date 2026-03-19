import React from 'react'
import { Link, router } from '@inertiajs/react'

const List = ({ JenisKamar }) => {

  const handleDelete = (id) => {
    if (confirm('Yakin hapus data?')) {
      router.delete(route('jenis-kamar.destroy', id))
    }
  }

  return (
    <div>
      <h1>Data Jenis Kamar</h1>

      <Link href={route('jenis-kamar.create')}>Tambah Jenis Kamar</Link>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>No</th>
            <th>Kode</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Harga Breakfast</th>
            <th>Fasilitas</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {JenisKamar.length > 0 ? (
            JenisKamar.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.kode}</td>
                <td>{item.nama}</td>
                <td>{item.harga}</td>
                <td>{item.harga_breakfast}</td>
                <td>{item.fasilitas}</td>
                <td>
                  <Link href={route('jenis-kamar.edit', item.id)}>Edit</Link>
                  <button onClick={() => handleDelete(item.id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Data tidak ada</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default List
