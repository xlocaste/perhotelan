<?php

namespace App\Http\Requests\Transaksi;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'reservasi_id' => 'required|exists:reservasi,id',
            'lama_menginap' => 'required|integer|min:1',
            'harga_per_malam' => 'required|numeric|min:0',
            'total_harga' => 'required|numeric|min:0',
            'metode_pembayaran' => 'nullable|in:cash,transfer,qris',
            'status_pembayaran' => 'required|in:belum_bayar,lunas',
            'tanggal_bayar' => 'nullable|date',
        ];
    }

    public function messages(): array
    {
        return [
            'reservasi_id.required' => 'Reservasi wajib dipilih',
            'reservasi_id.exists' => 'Reservasi tidak valid',

            'lama_menginap.required' => 'Lama menginap wajib diisi',
            'lama_menginap.integer' => 'Lama menginap harus angka',
            'lama_menginap.min' => 'Minimal 1 hari',

            'harga_per_malam.required' => 'Harga per malam wajib diisi',
            'harga_per_malam.numeric' => 'Harga harus berupa angka',

            'total_harga.required' => 'Total harga wajib diisi',
            'total_harga.numeric' => 'Total harga harus berupa angka',

            'metode_pembayaran.in' => 'Metode pembayaran tidak valid',

            'status_pembayaran.required' => 'Status pembayaran wajib dipilih',
            'status_pembayaran.in' => 'Status pembayaran tidak valid',

            'tanggal_bayar.date' => 'Tanggal bayar tidak valid',
        ];
    }
}
