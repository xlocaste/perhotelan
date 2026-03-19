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
        $foRole = Role::firstOrCreate(['name' => 'front_office']);
        $financeRole = Role::firstOrCreate(['name' => 'finance']);
        $managerRole = Role::firstOrCreate(['name' => 'manager']);

        $admin = User::firstOrCreate(
            ['email' => 'admin@hotel.com'],
            [
                'name' => 'Administrator',
                'password' => Hash::make('password'),
            ]
        );
        $admin->syncRoles([$adminRole]);

        $fo = User::firstOrCreate(
            ['email' => 'fo@hotel.com'],
            [
                'name' => 'Front Office',
                'password' => Hash::make('password'),
            ]
        );
        $fo->syncRoles([$foRole]);

        $finance = User::firstOrCreate(
            ['email' => 'finance@hotel.com'],
            [
                'name' => 'Finance',
                'password' => Hash::make('password'),
            ]
        );
        $finance->syncRoles([$financeRole]);

        $manager = User::firstOrCreate(
            ['email' => 'manager@hotel.com'],
            [
                'name' => 'Manager',
                'password' => Hash::make('password'),
            ]
        );
        $manager->syncRoles([$managerRole]);
    }
}
