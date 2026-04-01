<?php

namespace App\Http\Controllers;

use App\Http\Requests\Transaksi\StoreRequest;
use App\Models\Reservasi;
use App\Models\Transaksi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransaksiController extends Controller
{
    public function index()
    {
        $daftarTransaksi = Transaksi::with('reservasi.kamar','reservasi.tamu')->get();

        return Inertia::render('Transaksi/List', [
            'Transaksi' => $daftarTransaksi
        ]);
    }

    public function store(StoreRequest $request)
    {
        Transaksi::create([
            'reservasi_id' => $request -> reservasi_id,
            'lama_menginap' => $request -> lama_menginap,
            'harga_per_malam' => $request -> harga_per_malam,
            'total_harga' => $request -> total_harga,
            'metode_pembayaran' => $request -> metode_pembayaran,
            'status_pembayaran' => $request -> status_pembayaran,
            'tanggal_bayar' => $request -> tanggal_bayar,
        ]);

        return redirect()->route('transaksi.index');
    }

    public function create()
    {
        return Inertia::render('Transaksi/Add', [
            'reservasi' => Reservasi::with('tamu')->get(),
        ]);
    }
}
