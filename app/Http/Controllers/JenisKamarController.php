<?php

namespace App\Http\Controllers;

use App\Http\Requests\JenisKamar\StoreRequest;
use App\Models\JenisKamar;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JenisKamarController extends Controller
{
    public function index()
    {
        $daftarJenisKamar = JenisKamar::all();

        return Inertia::render('JenisKamar/List', [
            'JenisKamar' => $daftarJenisKamar
        ]);
    }

    public function store(StoreRequest $request)
    {
        $jenisKamar = JenisKamar::create([
            'kode' => $request -> kode,
            'nama' => $request -> nama,
            'harga' => $request -> harga,
            'harga_breakfast' => $request -> harga_breakfast,
            'fasilitas' => $request -> fasilitas,
        ]);

        return redirect()->route('jenis-kamar.index');
    }

    public function create()
    {
        return Inertia::render('JenisKamar/Add');
    }
}
