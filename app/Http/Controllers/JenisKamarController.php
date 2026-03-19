<?php

namespace App\Http\Controllers;

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
}
