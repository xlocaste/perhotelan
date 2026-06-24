<?php

namespace App\Http\Requests\Reservasi;

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
        $rules = [
            'kamar_id' => 'required|exists:kamar,id',
            'check_in' => 'required|date',
            'check_out' => 'required|date|after:check_in',
        ];

        if (auth()->user()->hasRole('frontOffice')) {
            $rules['tamu_id'] = 'nullable|exists:tamu,id';
        }

        return $rules;
    }

    public function messages(): array
    {
        return [
            'tamu_id.required' => 'Tamu wajib dipilih',
            'tamu_id.exists' => 'Tamu tidak valid',

            'kamar_id.required' => 'Kamar wajib dipilih',
            'kamar_id.exists' => 'Kamar tidak valid',

            'check_in.required' => 'Tanggal check-in wajib diisi',
            'check_in.date' => 'Format tanggal check-in tidak valid',

            'check_out.required' => 'Tanggal check-out wajib diisi',
            'check_out.date' => 'Format tanggal check-out tidak valid',
            'check_out.after' => 'Tanggal check-out harus setelah check-in',
        ];
    }
}
