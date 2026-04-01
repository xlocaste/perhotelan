import React from 'react'
import { Link, router } from '@inertiajs/react'

const List = ({ Transaksi = [] }) => {

  const handleDelete = (id) => {
    if (confirm('Yakin hapus data?')) {
      router.delete(route('transaksi.destroy', id))
    }
  }

  return (
    <div>
      <h1>Data Transaksi</h1>

      <Link href={route('transaksi.create')}>Tambah Transaksi</Link>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>No</th>
            <th>Kode Reservasi</th>
            <th>Tamu</th>
            <th>Kamar</th>
            <th>Lama Menginap</th>
            <th>Harga / Malam</th>
            <th>Total</th>
            <th>Metode</th>
            <th>Status Bayar</th>
            <th>Tanggal Bayar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Transaksi.length > 0 ? (
            Transaksi.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.reservasi?.kode}</td>
                <td>{item.reservasi?.tamu?.nama}</td>
                <td>{item.reservasi?.kamar?.nomor_kamar}</td>
                <td>{item.lama_menginap}</td>
                <td>{item.harga_per_malam}</td>
                <td>{item.total_harga}</td>
                <td>{item.metode_pembayaran || '-'}</td>
                <td>{item.status_pembayaran}</td>
                <td>{item.tanggal_bayar || '-'}</td>
                <td>
                  <Link href={route('transaksi.edit', item.id)}>Edit</Link>
                  <button onClick={() => handleDelete(item.id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11">Data tidak ada</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default List
