import React from 'react'
import { useForm, Link } from '@inertiajs/react'

const Add = () => {

  const { data, setData, post, processing, errors } = useForm({
    kode: '',
    nama: '',
    harga: '',
    harga_breakfast: '',
    fasilitas: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route('jenis-kamar.store'))
  }

  return (
    <div>
      <h1>Tambah Jenis Kamar</h1>

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
            Simpan
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add
