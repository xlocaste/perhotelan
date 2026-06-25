<?php

namespace App\Http\Controllers;

use App\Http\Requests\Kamar\UpdateRequest;
use App\Http\Requests\Reservasi\StoreRequest;
use App\Models\JenisKamar;
use App\Models\Kamar;
use App\Models\Reservasi;
use App\Models\Tamu;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
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

    public function store(StoreRequest $request)
    {
        if (Auth::user()->hasRole('front office')) {
            $tamuId = $request->tamu_id;
        } else {
            $tamuId = Tamu::where('user_id', Auth::id())->value('id');
        }

        Reservasi::create([
            'kode' => 'RSV-' . strtoupper(Str::random(6)),
            'tamu_id' => $tamuId,
            'kamar_id' => $request->kamar_id,
            'check_in' => $request->check_in,
            'check_out' => $request->check_out,
            'status' => 'checkin',
        ]);

        $kamar = Kamar::find($request->kamar_id);

        if ($kamar) {
            $kamar->update([
                'status' => 'terisi'
            ]);
        }

        return redirect()->route('user.kamar.list');
    }

    public function create()
    {
        $user = User::with('tamu')->find(Auth::id());

        return Inertia::render('User/Reservasi/Add', [
            'auth' => [
                'user' => $user,
                'role' => $user->roles->pluck('name'),
            ],
            'tamu_id' => $user->tamu?->id,
            'tamu' => Tamu::with('user')->get(),
            'kamar' => Kamar::with('jenisKamar')->get(),
        ]);
    }

    public function storeTamu(\App\Http\Requests\Tamu\StoreRequest $request)
    {
        DB::transaction(function () use ($request) {

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $user->assignRole('pengunjung');

            Tamu::create([
                'user_id' => $user->id,
                'no_ktp' => $request->no_ktp,
                'no_hp' => $request->no_hp,
                'alamat' => $request->alamat,
            ]);
        });

        return redirect()->route('user.tamu');
    }

    public function createTamu()
    {
        return Inertia::render('User/Tamu/Add');
    }
}
