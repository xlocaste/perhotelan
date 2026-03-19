import React from 'react'
import { Link, router } from '@inertiajs/react'

const List = ({ Tamu }) => {

  return (
    <div>
      <h1>Data Tamu</h1>
      <Link href={route('tamu.create')}>Tambah Tamu</Link>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>No</th>
            <th>No KTP</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>No HP</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Tamu.length > 0 ? (
            Tamu.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.no_ktp}</td>
                <td>{item.nama}</td>
                <td>{item.alamat}</td>
                <td>{item.no_hp}</td>
                <td>
                  <Link href={`/tamu/${item.id}/edit`}>Edit</Link>
                  <button onClick={() => handleDelete(item.id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Data tidak ada</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default List
