import React from 'react'
import { useForm, Link } from '@inertiajs/react'

const Add = ({ tamu = [], kamar = [] }) => {

  const { data, setData, post, processing, errors } = useForm({
    tamu_id: '',
    kamar_id: '',
    check_in: '',
    check_out: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route('reservasi.store'))
  }

  return (
    <div>
      <h1>Tambah Reservasi</h1>

      <Link href={route('reservasi.index')}>Kembali</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Tamu</label><br />
          <select
            value={data.tamu_id}
            onChange={e => setData('tamu_id', e.target.value)}
          >
            <option value="">-- Pilih Tamu --</option>
            {tamu.map(item => (
              <option key={item.id} value={item.id}>
                {item.nama}
              </option>
            ))}
          </select>
          {errors.tamu_id && <div>{errors.tamu_id}</div>}
        </div>

        <div>
          <label>Kamar</label><br />
          <select
            value={data.kamar_id}
            onChange={e => setData('kamar_id', e.target.value)}
          >
            <option value="">-- Pilih Kamar --</option>
            {kamar.map(item => (
              <option key={item.id} value={item.id}>
                {item.nomor_kamar}
              </option>
            ))}
          </select>
          {errors.kamar_id && <div>{errors.kamar_id}</div>}
        </div>

        <div>
          <label>Check In</label><br />
          <input
            type="date"
            value={data.check_in}
            onChange={e => setData('check_in', e.target.value)}
          />
          {errors.check_in && <div>{errors.check_in}</div>}
        </div>

        <div>
          <label>Check Out</label><br />
          <input
            type="date"
            value={data.check_out}
            onChange={e => setData('check_out', e.target.value)}
          />
          {errors.check_out && <div>{errors.check_out}</div>}
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
