<?php

namespace App\Http\Requests\Tamu;

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
            'no_ktp' => 'required|digits:16|unique:tamu,no_ktp',
            'nama' => 'required|string|max:100',
            'alamat' => 'nullable|string|max:255',
            'no_hp' => 'nullable|digits_between:10,15',
        ];
    }

    public function messages(): array
    {
        return [
            'no_ktp.required' => 'No KTP wajib diisi',
            'no_ktp.digits' => 'No KTP harus 16 digit',
            'no_ktp.unique' => 'No KTP sudah terdaftar',

            'nama.required' => 'Nama wajib diisi',
            'nama.max' => 'Nama maksimal 100 karakter',

            'alamat.max' => 'Alamat terlalu panjang',

            'no_hp.digits_between' => 'No HP harus antara 10 sampai 15 digit',
        ];
    }
}
