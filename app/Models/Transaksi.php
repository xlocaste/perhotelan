<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    use HasFactory;

    protected $table = 'transaksi';

    protected $fillable = [
        'reservasi_id',
        'lama_menginap',
        'harga_per_malam',
        'total_harga',
        'metode_pembayaran',
        'status_pembayaran',
        'tanggal_bayar',
    ];

    public function reservasi()
    {
        return $this->belongsTo(Reservasi::class);
    }
}
