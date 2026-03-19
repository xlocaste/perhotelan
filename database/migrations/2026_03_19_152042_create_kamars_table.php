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
        Schema::create('kamar', function (Blueprint $table) {
            $table->id();
            $table->string('nomor_kamar')->unique();
            $table->unsignedBigInteger('jenis_kamar_id');
            $table->enum('status', ['tersedia', 'terisi', 'maintenance'])->default('tersedia');
            $table->timestamps();

            $table->foreign('jenis_kamar_id')->references('id')->on('jenis_kamar');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kamar');
    }
};
