<?php

namespace Database\Seeders;

use App\Models\Kamar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KamarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kamar::insert([
            [
                'nomor_kamar' => '101',
                'jenis_kamar_id' => 1,
                'status' => 'tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomor_kamar' => '102',
                'jenis_kamar_id' => 1,
                'status' => 'tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomor_kamar' => '103',
                'jenis_kamar_id' => 1,
                'status' => 'maintenance',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomor_kamar' => '201',
                'jenis_kamar_id' => 2,
                'status' => 'tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomor_kamar' => '202',
                'jenis_kamar_id' => 2,
                'status' => 'terisi',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomor_kamar' => '203',
                'jenis_kamar_id' => 2,
                'status' => 'tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomor_kamar' => '301',
                'jenis_kamar_id' => 3,
                'status' => 'tersedia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomor_kamar' => '302',
                'jenis_kamar_id' => 3,
                'status' => 'terisi',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomor_kamar' => '303',
                'jenis_kamar_id' => 3,
                'status' => 'maintenance',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
