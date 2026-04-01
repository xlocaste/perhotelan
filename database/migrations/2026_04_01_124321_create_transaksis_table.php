<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transaksi', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('reservasi_id');
            $table->integer('lama_menginap');
            $table->decimal('harga_per_malam', 12, 2);
            $table->decimal('total_harga', 12, 2);
            $table->enum('metode_pembayaran', ['cash', 'transfer', 'qris'])->nullable();
            $table->enum('status_pembayaran', ['belum_bayar', 'lunas'])->default('belum_bayar');
            $table->date('tanggal_bayar')->nullable();
            $table->timestamps();

            $table->foreign('reservasi_id')->references('id')->on('reservasi');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaksi');
    }
};
