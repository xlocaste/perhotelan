<?php

namespace App\Http\Controllers;

use App\Models\Kamar;
use App\Models\Tamu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $daftarKamar = Kamar::with('jenisKamar')->get();
        $daftarTamu = Tamu::with('user')->get();

        return Inertia::render('Dashboard', [
            'Kamar' => $daftarKamar,
            'Tamu' => $daftarTamu
        ]);
    }
}
