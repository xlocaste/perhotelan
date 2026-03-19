<?php

namespace Database\Seeders;

use App\Models\JenisKamar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JenisKamarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        JenisKamar::insert([
            [
                'kode' => 'STD',
                'nama' => 'Standard Room',
                'harga' => 300000,
                'harga_breakfast' => 50000,
                'fasilitas' => 'AC, TV, WiFi, 1 Bed',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode' => 'SUP',
                'nama' => 'Superior Room',
                'harga' => 400000,
                'harga_breakfast' => 75000,
                'fasilitas' => 'AC, TV, WiFi, 1 King Bed, Air Panas',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode' => 'DLX',
                'nama' => 'Deluxe Room',
                'harga' => 500000,
                'harga_breakfast' => 100000,
                'fasilitas' => 'AC, TV, WiFi, 2 Bed, Air Panas, Balkon',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode' => 'FAM',
                'nama' => 'Family Room',
                'harga' => 800000,
                'harga_breakfast' => 150000,
                'fasilitas' => 'AC, TV, WiFi, 3 Bed, Air Panas, Ruang Tamu',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode' => 'SUI',
                'nama' => 'Suite Room',
                'harga' => 1200000,
                'harga_breakfast' => 200000,
                'fasilitas' => 'AC, TV, WiFi, King Bed, Air Panas, Jacuzzi, Ruang Tamu',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
