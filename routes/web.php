<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\JenisKamarController;
use App\Http\Controllers\KamarController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservasiController;
use App\Http\Controllers\TamuController;
use App\Http\Controllers\TransaksiController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    return inertia('Welcome');
})->name('welcome');

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::get('/user/dashboard', [KamarController::class, 'list'
])->middleware(['auth', 'verified'])->name('user.dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/tamu')->name('tamu.')->group(function () {
    Route::group(['middleware' => ['auth']], function () {
        Route::get('/create', [TamuController::class, 'create'])->name('create');
        Route::post('/', [TamuController::class, 'store'])->name('store');
        Route::put('/{tamu}', [TamuController::class, 'update'])->name('update');
        Route::delete('/{tamu}', [TamuController::class, 'destroy'])->name('destroy');
        Route::get('/{tamu}/edit', [TamuController::class, 'edit'])->name('edit');
    });
    Route::get('/', [TamuController::class, 'index'])->name('index');
});

Route::prefix('/jenis-kamar')->name('jenis-kamar.')->group(function () {
    Route::group(['middleware' => ['auth']], function () {
        Route::get('/create', [JenisKamarController::class, 'create'])->name('create');
        Route::post('/', [JenisKamarController::class, 'store'])->name('store');
        Route::put('/{jenisKamar}', [JenisKamarController::class, 'update'])->name('update');
        Route::delete('/{jenisKamar}', [JenisKamarController::class, 'destroy'])->name('destroy');
        Route::get('/{jenisKamar}/edit', [JenisKamarController::class, 'edit'])->name('edit');
    });
    Route::get('/', [JenisKamarController::class, 'index'])->name('index');
});

Route::prefix('/kamar')->name('kamar.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/create', [KamarController::class, 'create'])->name('create');
        Route::post('/', [KamarController::class, 'store'])->name('store');
        Route::put('/{kamar}', [KamarController::class, 'update'])->name('update');
        Route::delete('/{kamar}', [KamarController::class, 'destroy'])->name('destroy');
        Route::get('/{kamar}/edit', [KamarController::class, 'edit'])->name('edit');
    });
    Route::get('/', [KamarController::class, 'index'])->name('index');
});

Route::prefix('/reservasi')->name('reservasi.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/create', [ReservasiController::class, 'create'])->name('create');
        Route::post('/', [ReservasiController::class, 'store'])->name('store');
        Route::put('/{reservasi}', [ReservasiController::class, 'update'])->name('update');
        Route::delete('/{reservasi}', [ReservasiController::class, 'destroy'])->name('destroy');
        Route::get('/{reservasi}/edit', [ReservasiController::class, 'edit'])->name('edit');
    });
    Route::get('/', [ReservasiController::class, 'index'])->name('index');
});

Route::prefix('/transaksi')->name('transaksi.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/create', [TransaksiController::class, 'create'])->name('create');
        Route::post('/', [TransaksiController::class, 'store'])->name('store');
        Route::put('/{transaksi}', [TransaksiController::class, 'update'])->name('update');
        Route::delete('/{transaksi}', [TransaksiController::class, 'destroy'])->name('destroy');
        Route::get('/{transaksi}/edit', [TransaksiController::class, 'edit'])->name('edit');
    });
    Route::get('/', [TransaksiController::class, 'index'])->name('index');
});

Route::prefix('/user')->name('user.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/create', [DashboardController::class, 'createTamu'])->name('create');
        Route::post('/', [DashboardController::class, 'storeTamu'])->name('store');
        Route::put('/{user}', [TamuController::class, 'update'])->name('update');
        Route::delete('/{user}', [TamuController::class, 'destroy'])->name('destroy');
        Route::get('/{user}/edit', [TamuController::class, 'edit'])->name('edit');
    });
    Route::get('/', [TamuController::class, 'tamu'])->name('tamu');
});

Route::prefix('/user/kamar')->name('user.kamar.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/create', [DashboardController::class, 'create'])->name('create');
        Route::post('/', [DashboardController::class, 'store'])->name('store');
        Route::put('/{kamar}', [DashboardController::class, 'update'])->name('update');
        Route::delete('/{kamar}', [DashboardController::class, 'destroy'])->name('destroy');
        Route::get('/{kamar}/edit', [DashboardController::class, 'edit'])->name('edit');
    });
    Route::get('/', [DashboardController::class, 'listKamar'])->name('list');
});

Route::prefix('/user/reservasi')->name('user.reservasi.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/create', [DashboardController::class, 'create'])->name('create');
        Route::post('/', [DashboardController::class, 'store'])->name('store');
        Route::put('/{reservasi}', [ReservasiController::class, 'updateUser'])->name('updateUser');
        Route::get('/{reservasi}/edit', [ReservasiController::class, 'editUser'])->name('editUser');
    });
});


Route::prefix('/user/reservasi')->name('user.reservasi.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/', [ReservasiController::class, 'indexUser'])->name('indexUser');
    });
});

Route::prefix('/user/transaksi')->name('user.transaksi.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/create', [TransaksiController::class, 'createUser'])->name('createUser');
        Route::post('/', [TransaksiController::class, 'storeUser'])->name('storeUser');
        Route::put('/{transaksi}', [TransaksiController::class, 'update'])->name('update');
        Route::delete('/{transaksi}', [TransaksiController::class, 'destroy'])->name('destroy');
        Route::get('/{transaksi}/edit', [TransaksiController::class, 'edit'])->name('edit');
    });
    Route::get('/', [TransaksiController::class, 'indexUser'])->name('indexUser');
});

Route::prefix('/laporan')->name('laporan.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/', [TransaksiController::class, 'laporantransaksi'])->name('index');
        Route::get('/cetak', [TransaksiController::class, 'cetak'])->name('cetak');
    });
});

Route::prefix('/user/laporan')->name('user.laporan.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/', [TransaksiController::class, 'laporan'])->name('index');
        Route::get('/cetak', [TransaksiController::class, 'cetak'])->name('cetak');
    });
});

require __DIR__.'/auth.php';
