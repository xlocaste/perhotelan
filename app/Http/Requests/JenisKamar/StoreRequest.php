<?php

namespace App\Http\Requests\JenisKamar;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            'kode' => 'required|string|max:10|unique:jenis_kamar,kode',
            'nama' => 'required|string|max:100',
            'harga' => 'required|integer|min:0',
            'harga_breakfast' => 'nullable|integer|min:0',
            'fasilitas' => 'nullable|string',
        ];
    }

    public function messages(): array
    {
        return [
            'kode.required' => 'Kode wajib diisi',
            'kode.unique' => 'Kode sudah digunakan',
            'kode.max' => 'Kode maksimal 10 karakter',

            'nama.required' => 'Nama wajib diisi',
            'nama.max' => 'Nama maksimal 100 karakter',

            'harga.required' => 'Harga wajib diisi',
            'harga.integer' => 'Harga harus berupa angka',
            'harga.min' => 'Harga tidak boleh negatif',

            'harga_breakfast.integer' => 'Harga breakfast harus angka',
            'harga_breakfast.min' => 'Harga breakfast tidak boleh negatif',
        ];
    }
}
