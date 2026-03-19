import React from 'react'
import { useForm, Link } from '@inertiajs/react'

const Add = ({ jenisKamar = [] }) => {

  const { data, setData, post, processing, errors } = useForm({
    nomor_kamar: '',
    jenis_kamar_id: '',
    status: 'tersedia',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route('kamar.store'))
  }

  return (
    <div>
      <h1>Tambah Kamar</h1>

      <Link href={route('kamar.index')}>Kembali</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nomor Kamar</label><br />
          <input
            type="text"
            value={data.nomor_kamar}
            onChange={e => setData('nomor_kamar', e.target.value)}
          />
          {errors.nomor_kamar && <div>{errors.nomor_kamar}</div>}
        </div>

        <div>
          <label>Jenis Kamar</label><br />
          <select
            value={data.jenis_kamar_id}
            onChange={e => setData('jenis_kamar_id', e.target.value)}
          >
            <option value="">-- Pilih Jenis Kamar --</option>
            {jenisKamar.map(item => (
              <option key={item.id} value={item.id}>
                {item.nama}
              </option>
            ))}
          </select>
          {errors.jenis_kamar_id && <div>{errors.jenis_kamar_id}</div>}
        </div>

        <div>
          <label>Status</label><br />
          <select
            value={data.status}
            onChange={e => setData('status', e.target.value)}
          >
            <option value="tersedia">Tersedia</option>
            <option value="terisi">Terisi</option>
            <option value="maintenance">Maintenance</option>
          </select>
          {errors.status && <div>{errors.status}</div>}
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
