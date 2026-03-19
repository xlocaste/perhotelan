<?php

namespace App\Http\Controllers;

use App\Models\Kamar;
use Illuminate\Http\Request;
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
}
