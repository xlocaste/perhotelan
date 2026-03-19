<?php

namespace App\Http\Controllers;

use App\Http\Requests\Tamu\StoreRequest;
use App\Models\Tamu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TamuController extends Controller
{
    public function index()
    {
        $daftarTamu = Tamu::all();

        return Inertia::render('Tamu/List', [
            'Tamu' => $daftarTamu
        ]);
    }

    public function store(StoreRequest $request)
    {
        $tamu = Tamu::create([
            'no_ktp' => $request -> no_ktp,
            'nama' => $request -> nama,
            'alamat' => $request -> alamat,
            'no_hp' => $request -> no_hp,
        ]);

        return redirect()->route('tamu.index');
    }

    public function create()
    {
        return Inertia::render('Tamu/Add');
    }
}
