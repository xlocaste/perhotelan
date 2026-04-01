import React from 'react'
import { useForm, Link } from '@inertiajs/react'

const Update = ({ reservasi, tamu = [], kamar = [] }) => {

  const { data, setData, put, processing, errors } = useForm({
    tamu_id: reservasi.tamu_id || '',
    kamar_id: reservasi.kamar_id || '',
    check_in: reservasi.check_in || '',
    check_out: reservasi.check_out || '',
    status: reservasi.status || 'pending',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    put(route('reservasi.update', reservasi.id))
  }

  return (
    <div>
      <h1>Edit Reservasi</h1>

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
          <label>Status</label><br />
          <select
            value={data.status}
            onChange={e => setData('status', e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="checkin">Check In</option>
            <option value="checkout">Check Out</option>
            <option value="batal">Batal</option>
          </select>
          {errors.status && <div>{errors.status}</div>}
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
