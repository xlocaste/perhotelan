<?php

namespace App\Http\Requests\Kamar;

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
            'nomor_kamar' => 'required|string|max:10',
            'jenis_kamar_id' => 'required|exists:jenis_kamar,id',
            'status' => 'required|in:tersedia,terisi,maintenance',
        ];
    }

    public function messages(): array
    {
        return [
            'nomor_kamar.required' => 'Nomor kamar wajib diisi',
            'nomor_kamar.max' => 'Nomor kamar maksimal 10 karakter',

            'jenis_kamar_id.required' => 'Jenis kamar wajib dipilih',
            'jenis_kamar_id.exists' => 'Jenis kamar tidak valid',

            'status.required' => 'Status wajib dipilih',
            'status.in' => 'Status tidak valid',
        ];
    }
}
