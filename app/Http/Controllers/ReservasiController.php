<?php

namespace App\Http\Controllers;

use App\Models\Reservasi;
use Illuminate\Http\Request;
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
}
