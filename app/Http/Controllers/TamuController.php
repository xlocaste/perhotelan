<?php

namespace App\Http\Controllers;

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
}
