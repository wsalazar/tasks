<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditTaskRequest extends FormRequest
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
            'task_name' => ['sometimes', 'string', 'max:255'],
            'task_duration' => ['sometimes','integer'],
            'task_address' => ['sometimes','string', 'max:255'],
            'point_of_contact' => ['sometimes','string', 'max:255'],
            'contact_number' => ['sometimes','string', 'max:255'],
        ];
    }

}
