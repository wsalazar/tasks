<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TaskRequest extends FormRequest
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
            'task_name' => ['required', 'string', 'max:255'],
            'task_duration' => ['required','integer'],
            'task_address' => ['required','string', 'max:255'],
            'point_of_contact' => ['required','string', 'max:255'],
            'contact_number' => ['required','string', 'max:255'],
        ];
    }
}
