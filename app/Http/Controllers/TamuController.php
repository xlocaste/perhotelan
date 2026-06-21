<?php

namespace App\Http\Controllers;

use App\Http\Requests\Tamu\StoreRequest;
use App\Http\Requests\Tamu\UpdateRequest;
use App\Models\Tamu;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TamuController extends Controller
{
    public function index()
    {
        $daftarTamu = Tamu::with('user')->get();

        return Inertia::render('Tamu/List', [
            'Tamu' => $daftarTamu,
        ]);
    }

    public function store(StoreRequest $request)
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

        return redirect()->route('tamu.index');
    }

    public function create()
    {
        return Inertia::render('Tamu/Add');
    }

    public function update(UpdateRequest $request, Tamu $tamu)
    {
        DB::transaction(function () use ($request, $tamu) {

            $tamu->user->update([
                'name' => $request->name,
                'email' => $request->email,
            ]);

            $tamu->update([
                'no_ktp' => $request->no_ktp,
                'no_hp' => $request->no_hp,
                'alamat' => $request->alamat,
            ]);
        });

        return redirect()->route('tamu.index');
    }

    public function edit(Tamu $tamu)
    {
        $tamu->load('user');

        return Inertia::render('Tamu/Update', [
            'tamu' => $tamu,
        ]);
    }

    public function destroy(Tamu $tamu)
    {
        $user = $tamu->user;

        $tamu->delete();

        $user->delete();

        return Redirect::route('tamu.index')->with('message', 'Data berhasil dihapus');
    }

    public function tamu()
    {
        $daftarTamu = Tamu::with('user')->get();

        return Inertia::render('User/Tamu/List', [
            'Tamu' => $daftarTamu,
        ]);
    }
}
