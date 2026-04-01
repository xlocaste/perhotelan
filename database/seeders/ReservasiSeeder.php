<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Reservasi;

class ReservasiSeeder extends Seeder
{
    public function run(): void
    {
        Reservasi::insert([
            [
                'kode' => 'RSV001',
                'tamu_id' => 1,
                'kamar_id' => 1,
                'check_in' => '2026-04-01',
                'check_out' => '2026-04-03',
                'status' => 'checkin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode' => 'RSV002',
                'tamu_id' => 2,
                'kamar_id' => 2,
                'check_in' => '2026-04-02',
                'check_out' => '2026-04-04',
                'status' => 'pending',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode' => 'RSV003',
                'tamu_id' => 3,
                'kamar_id' => 3,
                'check_in' => '2026-04-01',
                'check_out' => '2026-04-02',
                'status' => 'checkout',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode' => 'RSV004',
                'tamu_id' => 4,
                'kamar_id' => 4,
                'check_in' => '2026-04-05',
                'check_out' => '2026-04-07',
                'status' => 'pending',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode' => 'RSV005',
                'tamu_id' => 5,
                'kamar_id' => 5,
                'check_in' => '2026-04-03',
                'check_out' => '2026-04-06',
                'status' => 'checkin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
