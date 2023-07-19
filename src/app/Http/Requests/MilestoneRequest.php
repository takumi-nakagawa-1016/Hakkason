<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MilestoneRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required',],
            'deadline' => ['required'],
        ];
    }

    public function getName(): string
    {
        return $this->input('name');
    }

    public function getMilestoneContent(): string
    {
        return $this->input('content');
    }

    public function getDeadLine(): string
    {
        return $this->input('deadline');
    }
}
