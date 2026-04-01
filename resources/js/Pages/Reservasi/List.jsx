import React from 'react'
import { Link, router } from '@inertiajs/react'

const List = ({ Reservasi = [] }) => {

  const handleDelete = (id) => {
    if (confirm('Yakin hapus data?')) {
      router.delete(route('reservasi.destroy', id))
    }
  }

  return (
    <div>
      <h1>Data Reservasi</h1>

      <Link href={route('reservasi.create')}>Tambah Reservasi</Link>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>No</th>
            <th>Kode</th>
            <th>Tamu</th>
            <th>Kamar</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Reservasi.length > 0 ? (
            Reservasi.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.kode}</td>
                <td>{item.tamu?.nama}</td>
                <td>{item.kamar?.nomor_kamar}</td>
                <td>{item.check_in}</td>
                <td>{item.check_out}</td>
                <td>{item.status}</td>
                <td>
                  <Link href={route('reservasi.edit', item.id)}>Edit</Link>
                  <button onClick={() => handleDelete(item.id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Data tidak ada</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default List
