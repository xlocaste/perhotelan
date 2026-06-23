<?php

namespace App\Http\Controllers;

use App\Http\Requests\Kamar\StoreRequest;
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

    public function listKamar()
    {
        $daftarKamar = Kamar::with('jenisKamar')->get();

        return Inertia::render('User/Kamar/List', [
            'Kamar' => $daftarKamar
        ]);
    }

    public function kamarStore(StoreRequest $request)
    {
        $kamar = Kamar::create([
            'nomor_kamar' => $request -> nomor_kamar,
            'jenis_kamar_id' => $request -> jenis_kamar_id,
            'status' => $request -> status,
        ]);

        return redirect()->route('user.dashboard');
    }
}
