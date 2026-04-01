<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservasi extends Model
{
    use HasFactory;

    protected $table = 'reservasi';

    protected $fillable = [
        'kode',
        'tamu_id',
        'kamar_id',
        'check_in',
        'check_out',
        'status',
    ];

    public function kamar()
    {
        return $this->belongsTo(Kamar::class);
    }

    public function tamu()
    {
        return $this->belongsTo(Tamu::class);
    }
}
