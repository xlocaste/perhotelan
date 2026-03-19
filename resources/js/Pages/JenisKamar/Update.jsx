import React from 'react'
import { useForm, Link } from '@inertiajs/react'

const Update = ({ jenisKamar }) => {

  const { data, setData, put, processing, errors } = useForm({
    kode: jenisKamar.kode || '',
    nama: jenisKamar.nama || '',
    harga: jenisKamar.harga || '',
    harga_breakfast: jenisKamar.harga_breakfast || '',
    fasilitas: jenisKamar.fasilitas || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    put(route('jenis-kamar.update', jenisKamar.id))
  }

  return (
    <div>
      <h1>Edit Jenis Kamar</h1>

      <Link href={route('jenis-kamar.index')}>Kembali</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Kode</label><br />
          <input
            type="text"
            value={data.kode}
            onChange={e => setData('kode', e.target.value)}
          />
          {errors.kode && <div>{errors.kode}</div>}
        </div>

        <div>
          <label>Nama</label><br />
          <input
            type="text"
            value={data.nama}
            onChange={e => setData('nama', e.target.value)}
          />
          {errors.nama && <div>{errors.nama}</div>}
        </div>

        <div>
          <label>Harga</label><br />
          <input
            type="number"
            value={data.harga}
            onChange={e => setData('harga', e.target.value)}
          />
          {errors.harga && <div>{errors.harga}</div>}
        </div>

        <div>
          <label>Harga Breakfast</label><br />
          <input
            type="number"
            value={data.harga_breakfast}
            onChange={e => setData('harga_breakfast', e.target.value)}
          />
          {errors.harga_breakfast && <div>{errors.harga_breakfast}</div>}
        </div>

        <div>
          <label>Fasilitas</label><br />
          <textarea
            value={data.fasilitas}
            onChange={e => setData('fasilitas', e.target.value)}
          />
          {errors.fasilitas && <div>{errors.fasilitas}</div>}
        </div>

        <div>
          <button type="submit" disabled={processing}>
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default Update
