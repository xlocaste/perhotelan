<?php

namespace App\Http\Controllers;

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
}
