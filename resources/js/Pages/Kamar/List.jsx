import React from 'react'
import { Link, router } from '@inertiajs/react'

const List = ({ Kamar = [] }) => {

  const handleDelete = (id) => {
    if (confirm('Yakin hapus data?')) {
      router.delete(route('kamar.destroy', id))
    }
  }

  return (
    <div>
      <h1>Data Kamar</h1>

      <Link href={route('kamar.create')}>Tambah Kamar</Link>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>No</th>
            <th>Nomor Kamar</th>
            <th>Jenis Kamar</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Kamar.length > 0 ? (
            Kamar.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nomor_kamar}</td>
                <td>{item.jenis_kamar?.nama}</td>
                <td>{item.status}</td>
                <td>
                  <Link href={route('kamar.edit', item.id)}>Edit</Link>
                  <button onClick={() => handleDelete(item.id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Data tidak ada</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default List
