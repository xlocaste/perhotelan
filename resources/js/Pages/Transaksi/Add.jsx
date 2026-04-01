import React from 'react'
import { useForm, Link } from '@inertiajs/react'

const Add = ({ reservasi = [] }) => {

  const { data, setData, post, processing, errors } = useForm({
    reservasi_id: '',
    lama_menginap: '',
    harga_per_malam: '',
    total_harga: '',
    metode_pembayaran: '',
    status_pembayaran: 'belum_bayar',
    tanggal_bayar: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route('transaksi.store'))
  }

  return (
    <div>
      <h1>Tambah Transaksi</h1>

      <Link href={route('transaksi.index')}>Kembali</Link>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Reservasi</label><br />
          <select
            value={data.reservasi_id}
            onChange={e => setData('reservasi_id', e.target.value)}
          >
            <option value="">-- Pilih Reservasi --</option>
            {reservasi.map(item => (
              <option key={item.id} value={item.id}>
                {item.kode} - {item.tamu?.nama}
              </option>
            ))}
          </select>
          {errors.reservasi_id && <div>{errors.reservasi_id}</div>}
        </div>

        <div>
          <label>Lama Menginap</label><br />
          <input
            type="number"
            value={data.lama_menginap}
            onChange={e => setData('lama_menginap', e.target.value)}
          />
          {errors.lama_menginap && <div>{errors.lama_menginap}</div>}
        </div>

        <div>
          <label>Harga per Malam</label><br />
          <input
            type="number"
            value={data.harga_per_malam}
            onChange={e => setData('harga_per_malam', e.target.value)}
          />
          {errors.harga_per_malam && <div>{errors.harga_per_malam}</div>}
        </div>

        <div>
          <label>Total Harga</label><br />
          <input
            type="number"
            value={data.total_harga}
            onChange={e => setData('total_harga', e.target.value)}
          />
          {errors.total_harga && <div>{errors.total_harga}</div>}
        </div>

        <div>
          <label>Metode Pembayaran</label><br />
          <select
            value={data.metode_pembayaran}
            onChange={e => setData('metode_pembayaran', e.target.value)}
          >
            <option value="">-- Pilih Metode --</option>
            <option value="cash">Cash</option>
            <option value="transfer">Transfer</option>
            <option value="qris">QRIS</option>
          </select>
        </div>

        <div>
          <label>Status Pembayaran</label><br />
          <select
            value={data.status_pembayaran}
            onChange={e => setData('status_pembayaran', e.target.value)}
          >
            <option value="belum_bayar">Belum Bayar</option>
            <option value="lunas">Lunas</option>
          </select>
        </div>

        <div>
          <label>Tanggal Bayar</label><br />
          <input
            type="date"
            value={data.tanggal_bayar}
            onChange={e => setData('tanggal_bayar', e.target.value)}
          />
        </div>

        <div>
          <button type="submit" disabled={processing}>
            Simpan
          </button>
        </div>

      </form>
    </div>
  )
}

export default Add
