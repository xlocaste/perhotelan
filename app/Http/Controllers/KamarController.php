<?php

namespace App\Http\Controllers;

use App\Http\Requests\Kamar\StoreRequest;
use App\Http\Requests\Kamar\UpdateRequest;
use App\Models\JenisKamar;
use App\Models\Kamar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class KamarController extends Controller
{
    public function index()
    {
        $daftarKamar = Kamar::with('jenisKamar')->get();

        return Inertia::render('Kamar/List', [
            'Kamar' => $daftarKamar
        ]);
    }

    public function store(StoreRequest $request)
    {
        $kamar = Kamar::create([
            'nomor_kamar' => $request -> nomor_kamar,
            'jenis_kamar_id' => $request -> jenis_kamar_id,
            'status' => $request -> status,
        ]);

        return redirect()->route('kamar.index');
    }

    public function create()
    {
        return Inertia::render('Kamar/Add', [
            'jenisKamar' => jenisKamar::all(),
        ]);
    }

    public function update(UpdateRequest $request, Kamar $kamar)
    {
        $kamar->update([
            'nomor_kamar' => $request -> nomor_kamar,
            'jenis_kamar_id' => $request -> jenis_kamar_id,
            'status' => $request -> status,
        ]);

        return redirect()->route('kamar.index');
    }

    public function edit(Kamar $kamar)
    {
        return Inertia::render('Kamar/Update', [
            'kamar' => $kamar,
            'jenisKamar' => jenisKamar::all(),
        ]);
    }

    public function destroy(Kamar $kamar)
    {
        $kamar->delete();

        return Redirect::route('kamar.index')->with('message', 'Data berhasil dihapus');
    }
}
