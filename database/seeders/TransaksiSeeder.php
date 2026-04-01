<?php

namespace Database\Seeders;

use App\Models\Transaksi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransaksiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transaksi::insert([
            [
                'reservasi_id' => 1,
                'lama_menginap' => 2,
                'harga_per_malam' => 300000,
                'total_harga' => 600000,
                'metode_pembayaran' => 'cash',
                'status_pembayaran' => 'lunas',
                'tanggal_bayar' => '2026-04-03',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'reservasi_id' => 2,
                'lama_menginap' => 2,
                'harga_per_malam' => 300000,
                'total_harga' => 600000,
                'metode_pembayaran' => null,
                'status_pembayaran' => 'belum_bayar',
                'tanggal_bayar' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'reservasi_id' => 3,
                'lama_menginap' => 1,
                'harga_per_malam' => 500000,
                'total_harga' => 500000,
                'metode_pembayaran' => 'transfer',
                'status_pembayaran' => 'lunas',
                'tanggal_bayar' => '2026-04-02',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'reservasi_id' => 4,
                'lama_menginap' => 2,
                'harga_per_malam' => 700000,
                'total_harga' => 1400000,
                'metode_pembayaran' => null,
                'status_pembayaran' => 'belum_bayar',
                'tanggal_bayar' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'reservasi_id' => 5,
                'lama_menginap' => 3,
                'harga_per_malam' => 500000,
                'total_harga' => 1500000,
                'metode_pembayaran' => 'qris',
                'status_pembayaran' => 'lunas',
                'tanggal_bayar' => '2026-04-06',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
