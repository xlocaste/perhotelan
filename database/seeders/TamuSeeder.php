<?php

namespace Database\Seeders;

use App\Models\Tamu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TamuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tamu::insert([
            [
                'no_ktp' => '3201010101010001',
                'nama' => 'Budi Santoso',
                'alamat' => 'Bandung',
                'no_hp' => '081234567890',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'no_ktp' => '3201010101010002',
                'nama' => 'Siti Aminah',
                'alamat' => 'Jakarta',
                'no_hp' => '082345678901',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'no_ktp' => '3201010101010003',
                'nama' => 'Ahmad Hidayat',
                'alamat' => 'Surabaya',
                'no_hp' => '083456789012',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'no_ktp' => '3201010101010004',
                'nama' => 'Dewi Lestari',
                'alamat' => 'Yogyakarta',
                'no_hp' => '084567890123',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'no_ktp' => '3201010101010005',
                'nama' => 'Rudi Hartono',
                'alamat' => 'Semarang',
                'no_hp' => '085678901234',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'no_ktp' => '3201010101010006',
                'nama' => 'Maya Sari',
                'alamat' => 'Medan',
                'no_hp' => '086789012345',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'no_ktp' => '3201010101010007',
                'nama' => 'Andi Saputra',
                'alamat' => 'Makassar',
                'no_hp' => '087890123456',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'no_ktp' => '3201010101010008',
                'nama' => 'Nur Aisyah',
                'alamat' => 'Palembang',
                'no_hp' => '088901234567',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'no_ktp' => '3201010101010009',
                'nama' => 'Fajar Nugroho',
                'alamat' => 'Solo',
                'no_hp' => '089012345678',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'no_ktp' => '3201010101010010',
                'nama' => 'Putri Maharani',
                'alamat' => 'Denpasar',
                'no_hp' => '081112223334',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
