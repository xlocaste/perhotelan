<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kamar extends Model
{
    use HasFactory;

    protected $table = 'kamar';

    protected $fillable = [
        'nomor_kamar',
        'jenis_kamar_id',
        'status',
    ];

    public function jenisKamar()
    {
        return $this->belongsTo(JenisKamar::class);
    }
}
