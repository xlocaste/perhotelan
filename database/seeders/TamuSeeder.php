<?php

namespace Database\Seeders;

use App\Models\Tamu;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class TamuSeeder extends Seeder
{
    public function run(): void
    {
        $dataTamu = [
            [
                'no_ktp' => '3201010101010001',
                'name' => 'Budi Santoso',
                'email' => 'budi@gmail.com',
                'alamat' => 'Bandung',
                'no_hp' => '081234567890',
            ],
            [
                'no_ktp' => '3201010101010002',
                'name' => 'Siti Aminah',
                'email' => 'siti@gmail.com',
                'alamat' => 'Jakarta',
                'no_hp' => '082345678901',
            ],
            [
                'no_ktp' => '3201010101010003',
                'name' => 'Ahmad Hidayat',
                'email' => 'ahmad@gmail.com',
                'alamat' => 'Surabaya',
                'no_hp' => '083456789012',
            ],
            [
                'no_ktp' => '3201010101010004',
                'name' => 'Dewi Lestari',
                'email' => 'dewi@gmail.com',
                'alamat' => 'Yogyakarta',
                'no_hp' => '084567890123',
            ],
            [
                'no_ktp' => '3201010101010005',
                'name' => 'Rudi Hartono',
                'email' => 'rudi@gmail.com',
                'alamat' => 'Semarang',
                'no_hp' => '085678901234',
            ],
            [
                'no_ktp' => '3201010101010006',
                'name' => 'Maya Sari',
                'email' => 'maya@gmail.com',
                'alamat' => 'Medan',
                'no_hp' => '086789012345',
            ],
            [
                'no_ktp' => '3201010101010007',
                'name' => 'Andi Saputra',
                'email' => 'andi@gmail.com',
                'alamat' => 'Makassar',
                'no_hp' => '087890123456',
            ],
            [
                'no_ktp' => '3201010101010008',
                'name' => 'Nur Aisyah',
                'email' => 'nur@gmail.com',
                'alamat' => 'Palembang',
                'no_hp' => '088901234567',
            ],
            [
                'no_ktp' => '3201010101010009',
                'name' => 'Fajar Nugroho',
                'email' => 'fajar@gmail.com',
                'alamat' => 'Solo',
                'no_hp' => '089012345678',
            ],
            [
                'no_ktp' => '3201010101010010',
                'name' => 'Putri Maharani',
                'email' => 'putri@gmail.com',
                'alamat' => 'Denpasar',
                'no_hp' => '081112223334',
            ],
        ];

        foreach ($dataTamu as $item) {

            $user = User::create([
                'name' => $item['name'],
                'email' => $item['email'],
                'password' => Hash::make('password'),
            ]);

            $user->assignRole('pengunjung');

            Tamu::create([
                'user_id' => $user->id,
                'no_ktp' => $item['no_ktp'],
                'alamat' => $item['alamat'],
                'no_hp' => $item['no_hp'],
            ]);
        }
    }
}
