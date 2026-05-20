<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $pengunjungRole = Role::firstOrCreate(['name' => 'pengunjung']);
        $pimpinanRole = Role::firstOrCreate(['name' => 'pimpinan']);

        $admin = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Administrator',
                'password' => Hash::make('password'),
            ]
        );
        $admin->syncRoles([$adminRole]);

        $pengunjung = User::firstOrCreate(
            ['email' => 'user@example.com'],
            [
                'name' => 'Pengunjung',
                'password' => Hash::make('password'),
            ]
        );
        $pengunjung->syncRoles([$pengunjungRole]);

        $pimpinan = User::firstOrCreate(
            ['email' => 'pimpinan@example.com'],
            [
                'name' => 'Pemimpin',
                'password' => Hash::make('password'),
            ]
        );
        $pimpinan->syncRoles([$pimpinanRole]);
    }
}
