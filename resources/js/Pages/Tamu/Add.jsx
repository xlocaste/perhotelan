import React from 'react'
import { useForm, Link } from '@inertiajs/react'

const Add = () => {

  const { data, setData, post, processing, errors } = useForm({
    no_ktp: '',
    nama: '',
    alamat: '',
    no_hp: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route('tamu.store'))
  }

  return (
    <div>
      <h1>Tambah Tamu</h1>

      <Link href={route('tamu.index')}>Kembali</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label>No KTP</label><br />
          <input
            type="text"
            value={data.no_ktp}
            onChange={e => setData('no_ktp', e.target.value)}
          />
          {errors.no_ktp && <div>{errors.no_ktp}</div>}
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
          <label>Alamat</label><br />
          <input
            type="text"
            value={data.alamat}
            onChange={e => setData('alamat', e.target.value)}
          />
          {errors.alamat && <div>{errors.alamat}</div>}
        </div>

        <div>
          <label>No HP</label><br />
          <input
            type="text"
            value={data.no_hp}
            onChange={e => setData('no_hp', e.target.value)}
          />
          {errors.no_hp && <div>{errors.no_hp}</div>}
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
