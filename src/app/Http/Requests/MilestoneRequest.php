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
            'name' => ['required'],
//            'deadline' => ['required'],
        ];
    }

    public function getId(): string
    {
        return $this->input('id');
    }

    public function getName(): string
    {
        return $this->input('name');
    }

    public function getMilestoneContent(): string
    {
        return $this->input('description');
    }

    public function getDeadLine(): string
    {
        return $this->input('due_date');
    }

    public function getStatus(): string
    {
        return $this->input('status');
    }
}
