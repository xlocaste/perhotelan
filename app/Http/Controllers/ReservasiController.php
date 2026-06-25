<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reservasi\StoreRequest;
use App\Http\Requests\Reservasi\UpdateRequest;
use App\Models\Kamar;
use App\Models\Reservasi;
use App\Models\Tamu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ReservasiController extends Controller
{
    public function index()
    {
        $daftarReservasi = Reservasi::with('tamu.user', 'kamar')->get();

        return Inertia::render('Reservasi/List', [
            'Reservasi' => $daftarReservasi
        ]);
    }

    public function store(StoreRequest $request)
    {
        Reservasi::create([
            'kode' => 'RSV-' . strtoupper(Str::random(6)),
            'tamu_id' => $request -> tamu_id,
            'kamar_id' => $request -> kamar_id,
            'check_in' => $request -> check_in,
            'check_out' => $request -> check_out,
            'status' => 'pending',
        ]);

        return redirect()->route('reservasi.index');
    }

    public function create()
    {
        return Inertia::render('Reservasi/Add', [
            'tamu' => Tamu::with('user')->get(),
            'kamar' => Kamar::with('jenisKamar')->get(),
        ]);
    }

    public function update(UpdateRequest $request, Reservasi $reservasi)
    {
        if ($request->kamar_id != $reservasi->kamar_id) {

            Kamar::where('id', $reservasi->kamar_id)
                ->update([
                    'status' => 'tersedia'
            ]);
        }

        $reservasi->update([
            'tamu_id' => $request->tamu_id,
            'kamar_id' => $request->kamar_id,
            'check_in' => $request->check_in,
            'check_out' => $request->check_out,
            'status' => $request->status,
        ]);

        if ($request->status == 'checkin') {
            Kamar::where('id', $request->kamar_id)
                ->update([
                    'status' => 'terisi'
                ]);
        }

        if (in_array($request->status, ['checkout', 'batal'])) {
            Kamar::where('id', $request->kamar_id)
                ->update([
                    'status' => 'tersedia'
                ]);
        }

        return redirect()->route('reservasi.index');
    }

    public function edit(Reservasi $reservasi)
    {
        return Inertia::render('Reservasi/Update', [
            'reservasi' => $reservasi,
            'tamu' => Tamu::with('user')->get(),
            'kamar' => Kamar::where('status', 'tersedia')->get(),
        ]);
    }

    public function destroy(Reservasi $reservasi)
    {
        $reservasi->delete();

        return Redirect::route('reservasi.index')->with('message', 'Data berhasil dihapus');
    }

    public function indexUser()
    {
        $daftarReservasi = Reservasi::with('tamu.user', 'kamar')->get();

        return Inertia::render('User/Reservasi/List', [
            'Reservasi' => $daftarReservasi
        ]);
    }

    public function storeUser(StoreRequest $request)
    {
        Reservasi::create([
            'kode' => 'RSV-' . strtoupper(Str::random(6)),
            'tamu_id' => $request -> tamu_id,
            'kamar_id' => $request -> kamar_id,
            'check_in' => $request -> check_in,
            'check_out' => $request -> check_out,
            'status' => 'pending',
        ]);

        return redirect()->route('user.reservasi.indexUser');
    }

    public function createUser()
    {
        return Inertia::render('User/Reservasi/Add', [
            'tamu' => Tamu::with('user')->get(),
            'kamar' => Kamar::with('jenisKamar')->get(),
        ]);
    }
}
