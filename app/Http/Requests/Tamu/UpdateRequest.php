<?php

namespace App\Http\Requests\Tamu;

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
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email,' . $this->tamu->user_id,

            'no_ktp' => 'required|unique:tamu,no_ktp,' . $this->tamu->id,
            'no_hp' => 'required',
            'alamat' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'no_ktp.required' => 'No KTP wajib diisi',
            'no_ktp.digits' => 'No KTP harus 16 digit',

            'nama.required' => 'Nama wajib diisi',
            'nama.max' => 'Nama maksimal 100 karakter',

            'alamat.max' => 'Alamat terlalu panjang',

            'no_hp.digits_between' => 'No HP harus antara 10 sampai 15 digit',
        ];
    }
}
