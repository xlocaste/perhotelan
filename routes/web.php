<?php

use App\Http\Controllers\JenisKamarController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TamuController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/tamu')->name('tamu.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/create', [TamuController::class, 'create'])->name('create');
        Route::post('/', [TamuController::class, 'store'])->name('store');
        Route::put('/{tamu}', [TamuController::class, 'update'])->name('update');
        Route::delete('/{tamu}', [TamuController::class, 'destroy'])->name('destroy');
        Route::get('/{tamu}/edit', [TamuController::class, 'edit'])->name('edit');
    });
    Route::get('/', [TamuController::class, 'index'])->name('index');
});

Route::prefix('/jenis-kamar')->name('jenis-kamar.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/create', [JenisKamarController::class, 'create'])->name('create');
        Route::post('/', [JenisKamarController::class, 'store'])->name('store');
        Route::put('/{jenisKamar}', [JenisKamarController::class, 'update'])->name('update');
        Route::delete('/{jenisKamar}', [JenisKamarController::class, 'destroy'])->name('destroy');
        Route::get('/{jenisKamar}/edit', [JenisKamarController::class, 'edit'])->name('edit');
    });
    Route::get('/', [JenisKamarController::class, 'index'])->name('index');
});

require __DIR__.'/auth.php';
