<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reservasi\StoreRequest;
use App\Http\Requests\Reservasi\UpdateRequest;
use App\Models\Kamar;
use App\Models\Reservasi;
use App\Models\Tamu;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ReservasiController extends Controller
{
    public function index()
    {
        $daftarReservasi = Reservasi::with('tamu', 'kamar')->get();

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
            'tamu' => Tamu::all(),
            'kamar' => Kamar::where('status', 'tersedia')->get(),
        ]);
    }

    public function update(UpdateRequest $request, Reservasi $reservasi)
    {
        if ($request->kamar_id != $reservasi->kamar_id) {

            Kamar::where('id', $reservasi->kamar_id)
                ->update(['status' => 'tersedia']);

            Kamar::where('id', $request->kamar_id)
                ->update(['status' => 'terisi']);
        }

        if ($request->status == 'checkout' || $request->status == 'batal') {
            Kamar::where('id', $reservasi->kamar_id)
                ->update(['status' => 'tersedia']);
        }

        if ($request->status == 'checkin') {
            Kamar::where('id', $reservasi->kamar_id)
                ->update(['status' => 'terisi']);
        }

        $reservasi->update([
            'tamu_id' => $request->tamu_id,
            'kamar_id' => $request->kamar_id,
            'check_in' => $request->check_in,
            'check_out' => $request->check_out,
            'status' => $request->status,
        ]);

        return redirect()->route('reservasi.index');
    }

    public function edit(Reservasi $reservasi)
    {
        return Inertia::render('Reservasi/Update', [
            'reservasi' => $reservasi,
            'tamu' => Tamu::all(),
            'kamar' => Kamar::where('status', 'tersedia')->get(),
        ]);
    }
}
