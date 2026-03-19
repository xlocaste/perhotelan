<?php

namespace App\Http\Controllers;

use App\Http\Requests\Tamu\StoreRequest;
use App\Http\Requests\Tamu\UpdateRequest;
use App\Models\Tamu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
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

    public function update(UpdateRequest $request, Tamu $tamu)
    {
        $tamu->update([
            'no_ktp' => $request -> no_ktp,
            'nama' => $request -> nama,
            'alamat' => $request -> alamat,
            'no_hp' => $request -> no_hp,
        ]);

        return redirect()->route('tamu.index');
    }

    public function edit(Tamu $tamu)
    {
        return Inertia::render('Tamu/Update', [
            'tamu' => $tamu,
        ]);
    }

    public function destroy(Tamu $tamu)
    {
        $tamu->delete();

        return Redirect::route('tamu.index')->with('message', 'Data berhasil dihapus');
    }
}
